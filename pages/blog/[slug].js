import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";

import { v4 } from "uuid";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { classNames } from "../../utils/css.helpers";
import SyntaxHighlighter from "react-syntax-highlighter";

import TestForm from "../../components/CTA/TestForm";
import BlogPostLayout from "../../layouts/BlogPostLayout";
import { useRouter } from "next/router";
import Error from "next/error";

const BlogPostTemplate = ({ frontMatter, mdxSource }) => {
  const router = useRouter();
  const { title, subTitle, coverImage, categories } = frontMatter;
  console.log("frontMatter:", frontMatter);

  if (!router.isFallback && !frontMatter?.title) {
    return <Error statusCode={404} />;
  }

  return (
    <BlogPostLayout postDetails={frontMatter}>
      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <>
          <h1 className="text-5xl font-black text-gray-900">{title}</h1>
          <h2 className="text-3xl font-semibold text-blue-800 mt-3">
            {subTitle}
          </h2>
          {categories.map((category) => (
            <div
              key={v4()}
              className={`bg-${category.color}-200 rounded-3xl py-2 px-4 font-bold text-xs inline-block mt-4 mr-2`}
            >
              {category.name}
            </div>
          ))}

          <div className="relative h-96 w-full my-5">
            <Image
              src={coverImage}
              alt={title + "hero image"}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-md shadow-lg"
              priority
            />
          </div>
          <section className="max-w-prose mx-auto blog">
            <MDXRemote
              {...mdxSource}
              components={{ SyntaxHighlighter, TestForm }}
              lazy={true}
            />
          </section>
        </>
      )}
    </BlogPostLayout>
  );
};

export default BlogPostTemplate;

export async function getStaticPaths() {
  // TSK: Abstract
  const files = fs.readdirSync(path.join("_posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("_posts", slug + ".mdx"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: { frontMatter, slug, mdxSource },
  };
}
