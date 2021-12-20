import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import MainLayout from "../../layouts/MainLayout";
import BlogCard from "../../components/Blog/BlogCard";
import { v4 } from "uuid";
import BlogFeedForm from "../../components/CTA/BlogFeedForm";

const myFavoriteGuides = [
  {
    title: "Become a PAID Front-End Developer",
    image: "/static/images/bp-front-end/Book_Cover.png",
    slug: "bulletproof-guide-to-becoming-a-paid-front-end-developer",
  },
  {
    title: "Some Other Great Guide I Will Write",
    image: "/static/images/bp-front-end/Book_Cover.png",
    slug: "bulletproof-guide-to-becoming-a-paid-front-end-developer",
  },
  {
    title: "Some Other Great Guide I Will Write",
    image: "/static/images/bp-front-end/Book_Cover.png",
    slug: "bulletproof-guide-to-becoming-a-paid-front-end-developer",
  },
];

const BlogPosts = ({ posts }) => {
  return (
    <MainLayout>
      <div className="flex flex-col lg:flex-row justify-between">
        {/* LEFT: ARTICLES & CTA's */}
        {/* ARTICLE #1 */}
        <section className="w-full lg:w-8/12 space-y-12">
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
        <section className="bg-white shadow-lg w-full lg:w-3/12 h-full mt-12 lg:mt-0 text-center ">
          <h2 className="text-xl font-bold mt-6">
            Read my Favorite Bulletproof Guides!
          </h2>
          <p className="mt-2 text-gray-500">P.S. They are all FREE!</p>
          <div className="space-y-12 mt-8 mb-12">
            {myFavoriteGuides.map((guide) => (
              <article key={v4()} className="hover:scale-105 transition-all">
                <Link href={"/blog/" + guide.slug} passHref>
                  <a>
                    <div className="relative w-full h-96 lg:h-64">
                      <Image
                        src={guide.image}
                        alt={guide.title}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </a>
                </Link>
              </article>
            ))}
          </div>
        </section>
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
