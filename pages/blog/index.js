import { allBlogs } from "../../.contentlayer/data/allBlogs.mjs";
import { pick } from "../../lib/contentlayer.helpers.js";

const BlogPosts = ({ posts }) => {
  console.log("posts:", posts);
  return (
    <section>
      <h1>TEST</h1>
    </section>
  );
};

export default BlogPosts;

export function getStaticProps() {
  const posts = allBlogs.map((post) =>
    pick(post, ["slug", "title", "subTitle", "excerpt", "publishedAt"])
  );

  return { props: { posts } };
}
