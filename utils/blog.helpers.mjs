import fs from "fs";
import path from "path";
import matter from "gray-matter";

function getAllBlogPosts() {
  const files = fs.readdirSync(path.join("_posts"));

  const allPosts = files.map((filename) => {
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

  return allPosts;
}

export const allBlogPosts = getAllBlogPosts();
