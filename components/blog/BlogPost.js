import Link from "next/link";

const BlogPost = ({ title, subTitle, category, excerpt, slug }) => {
  return (
    <article>
      <Link href={`/blog/${slug}`}>
        <a className="w-full">
          <h2>{title}</h2>
          {/* <h3>{subTitle}</h3> */}
          <p>{excerpt}</p>
        </a>
      </Link>
    </article>
  );
};

export default BlogPost;
