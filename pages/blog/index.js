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
  console.log("posts:", posts);
  return (
    <MainLayout>
      <div className="flex justify-between">
        {/* LEFT: ARTICLES & CTA's */}
        {/* ARTICLE #1 */}
        <section className="w-8/12 space-y-12">
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
        <section className="bg-white shadow-lg w-3/12 h-full">
          <h2 className="">Read my Favorite Bulletproof Guides:</h2>
          <div className="space-y-12 my-12">
            {myFavoriteGuides.map((guide) => (
              <article key={v4()}>
                <Link href={"/blog/" + guide.slug} passHref>
                  <a>
                    <div className="relative w-full h-64">
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
