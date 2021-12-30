import MainLayout from "../../layouts/MainLayout";
import BlogCard from "../../components/Blog/BlogCard";
import { v4 } from "uuid";
import FavoriteEbooksSidebar from "../../components/Blog/FavoriteEbooksSidebar";
import { allBlogPosts } from "../../utils/blog.helpers.mjs";
import BrandPanel from "../../components/CTA/BrandPanel";

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
          <BrandPanel
            cta="Download My Free eBook!"
            type="eBook"
            slug="bp-front-end-ebook"
          />

          {/* ARTCILES #2 & #3 */}
          {posts.slice(1, 3).map((post) => (
            <BlogCard key={v4()} postDetails={post} isPriority />
          ))}

          {/* CTA #2 */}
          {/* <ExtrasForm /> */}

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
  const posts = allBlogPosts;

  return { props: { posts } };
}
