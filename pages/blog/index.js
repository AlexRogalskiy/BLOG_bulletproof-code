import { v4 } from "uuid";

const BlogPosts = ({ posts }) => {
  console.log("posts:", posts);
  return (
    <section>
      {posts?.map((post) => (
        <article key={v4()}>
          <h2>{post.title}</h2>
        </article>
      ))}
    </section>
  );
};

export default BlogPosts;

export function getStaticProps() {
  const posts = [];
  // TSK: Get these from the file structure

  return { props: { posts } };
}
