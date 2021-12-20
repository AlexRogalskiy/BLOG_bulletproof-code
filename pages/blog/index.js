import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MainLayout from "../../layouts/MainLayout";
import BlogCard from "../../components/Blog/BlogCard";
import { v4 } from "uuid";
import BlogFeedForm from "../../components/CTA/BlogFeedForm";
import FavoriteEbooksSidebar from "../../components/Blog/FavoriteEbooksSidebar";

const BlogPosts = ({ posts }) => {
  return (
    <MainLayout>
      <div className="flex flex-col lg:flex-row justify-between">
        {/* LEFT: ARTICLES & CTA's */}
        <section className="w-full lg:w-8/12 space-y-12">
          {/* ARTICLE #1 */}
          {posts.slice(0, 1).map((post) => (
            <BlogCard key={v4()} postDetails={post} isPriority />
          ))}

          {/* CTA #1 */}
          <BlogFeedForm isPriority />

          {/* ARTCILES #2 & #3 */}
          {posts.slice(1, 3).map((post) => (
            <BlogCard key={v4()} postDetails={post} isPriority />
          ))}

          {/* CTA #2 */}
          <BlogFeedForm />

          {/* ARTICLES #4+ */}
          {posts.slice(3).map((post) => (
            <BlogCard key={v4()} postDetails={post} />
          ))}
        </section>

        {/* RIGHT: BEST EBOOKS */}
        <FavoriteEbooksSidebar />
      </div>
    </MainLayout>
  );
};

export default BlogPosts;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("_posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("_posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });
  // TSK: abstract

  return { props: { posts } };
}
