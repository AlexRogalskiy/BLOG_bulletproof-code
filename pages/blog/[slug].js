import { useMDXComponent } from "next-contentlayer/hooks";
import { allBlogs } from "../../.contentlayer/data/allBlogs.mjs";
import BlogPostLayout from "../../layouts/BlogPostLayout";
import { MDXComponents } from "../../lib/mdx.helpers";

const BlogPostTemplate = ({ post }) => {
  const Component = useMDXComponent(post.body.code);

  return (
    <BlogPostLayout post={post}>
      <Component components={MDXComponents} />
    </BlogPostLayout>
  );
};

export default BlogPostTemplate;

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug);

  return {
    props: { post },
  };
}
