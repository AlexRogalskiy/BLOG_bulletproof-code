import Container from "../components/structure/Container";
import Image from "next/image";
import { format, parseISO } from "date-fns";

const BlogPostLayout = ({ children, post }) => {
  return (
    <Container
      title={`${post.title} | Bulletproof Code`}
      description={post.excerpt}
      image={`https://blog.bulletproof-code.com${post.image}`}
      date={new Date(post.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {post.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt="William Wilder"
              height={24}
              width={24}
              src="/avatar.jpg"
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {"William Wilder / "}
              {format(parseISO(post.publishedAt), "MMMM dd, yyyy")}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
            {post.readingTime.text}
            {` • `}
            {/* <ViewCounter slug={post.slug} /> */}
          </p>
        </div>
        <div className="w-full mt-4 prose dark:prose-dark max-w-none">
          {children}
        </div>
        <div className="mt-8">{/* <Subscribe /> */}</div>
      </article>
    </Container>
  );
};

export default BlogPostLayout;
