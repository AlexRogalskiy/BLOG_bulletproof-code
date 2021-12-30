import MainLayout from "../../layouts/MainLayout";
import BlogCard from "../../components/Blog/BlogCard";
import { v4 } from "uuid";
import FavoriteEbooksSidebar from "../../components/Blog/FavoriteEbooksSidebar";
import { allBlogPosts } from "../../utils/blog.helpers.mjs";
import InlineForm from "../../components/CTA/InlineForm";
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
          <BrandPanel />
          {/* <InlineForm
            isPriority
            slug="bp-front-end-ebook"
            headline="Download this ESSENTIAL Front-End eBook"
            description="This comprehensive guide is all you need to succeed in your goal of landing your first developer position."
            cta="Enter your email below and get started on becoming a PAID Front-End Developer!"
            btnText="I Want To Be a Developer"
            image="/static/images/bp-front-end/BP_FE_3D.png"
          /> */}

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
