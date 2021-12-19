import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import SyntaxHighlighter from "react-syntax-highlighter";
import TestForm from "../../components/CTA/TestForm";
// import BlogPostLayout from "../../layouts/BlogPostLayout";

const BlogPostTemplate = ({ frontMatter: { title }, mdxSource }) => {
  return (
    <div>
      <h1>{title}</h1>
      <MDXRemote {...mdxSource} components={{ SyntaxHighlighter, TestForm }} />
    </div>
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
