import { allBlogs } from "../../.contentlayer/data/allBlogs.mjs";
import { pick } from "../../lib/contentlayer.helpers.js";
import { v4 } from "uuid";

const BlogPosts = ({ posts }) => {
  console.log("posts:", posts);
  return (
    <section>
      {posts.map((post) => (
        <article key={v4()}>
          <h2>{post.title}</h2>
        </article>
      ))}
    </section>
  );
};

export default BlogPosts;

export function getStaticProps() {
  const posts = allBlogs.map((post) =>
    pick(post, [
      "slug",
      "title",
      "subTitle",
      "excerpt",
      "category",
      "publishedAt",
    ])
  );

  return { props: { posts } };
}
