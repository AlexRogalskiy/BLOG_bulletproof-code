import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";

import { v4 } from "uuid";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import SyntaxHighlighter from "react-syntax-highlighter";

import InlineForm from "../../components/CTA/InlineForm";
import BlogPostLayout from "../../layouts/BlogPostLayout";
import { useRouter } from "next/router";
import Error from "next/error";
import CategoryBubble from "../../components/Blog/CategoryBubble";
import TableOfContents from "../../components/Blog/TableOfContents";
import CommentContainer from "../../components/Comments/CommentContainer";
import BlogPostImage from "../../components/Blog/BlogPostImage";

const BlogPostTemplate = ({ frontMatter, mdxSource }) => {
  const router = useRouter();
  const { title, subTitle, coverImage, categories } = frontMatter;

  if (!router.isFallback && !frontMatter?.title) {
    return <Error statusCode={404} />;
  }

  return (
    <BlogPostLayout postDetails={frontMatter}>
      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900">
            {title}
          </h1>
          <h2 className="text-xl md:text-3xl font-semibold text-blue-800 mt-4">
            {subTitle}
          </h2>
          {categories.map((category) => (
            <CategoryBubble key={v4()} category={category} />
          ))}

          <div className="relative h-[500px] md:h-[1250px] w-full my-5">
            <Image
              src={coverImage}
              alt={title + "hero image"}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              className="rounded-md shadow-lg"
              priority
            />
          </div>
          <section className="max-w-prose mx-auto blog">
            <MDXRemote
              {...mdxSource}
              components={{
                SyntaxHighlighter,
                TableOfContents,
                InlineForm,
                BlogPostImage,
              }}
              lazy={true}
            />
          </section>
          <CommentContainer />
        </>
      )}
    </BlogPostLayout>
  );
};

export default BlogPostTemplate;

export async function getStaticPaths() {
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
