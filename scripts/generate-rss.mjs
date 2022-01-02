import { writeFileSync } from "fs";
import RSS from "rss";
import { allBlogPosts } from "../utils/blog.helpers.mjs";

async function generate() {
  const feed = new RSS({
    title: "Bulletproof Code Blog",
    description:
      "Bulletproof Code is a passion project dedicated to taking anyone with any level of technical knowledge and giving them the skills, mentality, and knowledge necessary to begin a career as a software developer!",
    managingEditor: "William Wilder",
    webMaster: "William Wilder",
    language: "en",
    categories: [
      "JavaScript",
      "Front-End Development",
      "Coding Guides",
      "Programming Tutorials",
    ],
    image_url: `https://bulletproof-code.com/static/images/BP_Logo-Large.png`,
    site_url: "https://bulletproof-code.com",
    feed_url: "https://bulletproof-code.com/rss.xml",
  });

  allBlogPosts.map((post) => {
    feed.item({
      title: post.frontMatter.title,
      description: post.frontMatter.excerpt,
      url: `https://bulletproof-code.com/blog/${post.slug}`,
      date: post.frontMatter.publishedOn,
    });
  });

  writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
}

generate();
