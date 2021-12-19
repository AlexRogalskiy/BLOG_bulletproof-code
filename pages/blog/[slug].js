import BlogPostLayout from "../../layouts/BlogPostLayout";

const BlogPostTemplate = ({ post }) => {
  return <BlogPostLayout post={post}></BlogPostLayout>;
};

export default BlogPostTemplate;

// export async function getStaticPaths() {
//   return {
//     paths: allBlogs.map((post) => ({ params: { slug: post.slug } })),
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const post = allBlogs.find((post) => post.slug === params.slug);

//   return {
//     props: { post },
//   };
// }
