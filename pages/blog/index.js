import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import MainLayout from "../../layouts/MainLayout";
import BlogCard from "../../components/Blog/BlogCard";
import { v4 } from "uuid";

const BlogPosts = ({ posts }) => {
  console.log("posts:", posts);
  return (
    <MainLayout>
      <div className="flex justify-between">
        {/* LEFT: ARTICLES & CTA's */}
        <section className="w-8/12 bg-white shadow-md rounded-lg">
          {posts.slice(0, 1).map((post) => (
            <BlogCard key={v4()} postDetails={post} />
          ))}
        </section>

        {/* RIGHT: BEST EBOOKS */}
        <section className="bg-white shadow-lg w-3/12"></section>
      </div>
      {/* {posts.map((post, index) => (
        <Link href={"/blog/" + post.slug} passHref key={index}>
          <div className="card mb-3 pointer" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{post.frontMatter.title}</h5>
                  <p className="card-text">{post.frontMatter.excerpt}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      {post.frontMatter.postedOn}
                    </small>
                  </p>
                </div>
              </div>
              <div className="col-md-4 m-auto">
                <Image
                  src={post.frontMatter.coverImage}
                  className="img-fluid mt-1 rounded-start"
                  alt="thumbnail"
                  width={500}
                  height={400}
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </Link>
      ))} */}
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
