import Container from "../components/structure/Container";
import Image from "next/image";
import TestForm from "../components/CTA/TestForm";

const BlogPostLayout = ({ children, post }) => {
  return (
    <Container
      title={`${post.title} | Bulletproof Code`}
      description={post.excerpt}
      image={`https://bulletproof-code.com${post.image}`}
      date={new Date(post.publishedAt).toISOString()}
      type="article"
    >
      {/* TSK: Abstract this! */}
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-black tracking-tight text-black md:text-5xl dark:text-white">
          {post.title}
        </h1>
        <h2 className="font-bold mb-4">{post.subTitle}</h2>
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
              {"William Wilder"}
              {/* {format(parseISO(post.publishedAt), "MMMM dd, yyyy")} */}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
            {post.readingTime.text.split(" ")[0] < 30 && post.readingTime.text}
            {` • `}
          </p>
          <div className="bg-green-100 rounded-3xl py-2 px-4 font-bold text-xs">
            {post.category}
          </div>
        </div>
        <div className="w-full mt-4 prose dark:prose-dark max-w-none">
          {children}
        </div>
        <div className="mt-8">
          {/* TSK */}
          {/* <TestForm /> */}
        </div>
      </article>
    </Container>
  );
};

export default BlogPostLayout;
