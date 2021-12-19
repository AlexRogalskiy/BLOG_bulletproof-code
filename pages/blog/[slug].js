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

const BlogPostTemplate = ({ frontMatter, mdxSource }) => {
  const { title, subTitle, coverImage, categories } = frontMatter;

  return (
    <BlogPostLayout postDetails={frontMatter}>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      {categories.map((category) => (
        <div
          key={v4()}
          className={classNames(
            `bg-${category.color}-200`,
            "rounded-lg text-xs py-1 px-2 inline-block mr-3"
          )}
        >
          {category.name}
        </div>
      ))}
      <div className="relative h-96 w-full">
        <Image
          src={coverImage}
          alt={title + "hero image"}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>

      <MDXRemote
        {...mdxSource}
        components={{ SyntaxHighlighter, TestForm }}
        lazy={true}
      />
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
