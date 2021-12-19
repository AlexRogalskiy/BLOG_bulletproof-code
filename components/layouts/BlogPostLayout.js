import Container from "../components/structure/Container";
import Image from "next/image";

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

        <div className="bg-green-100 rounded-3xl py-2 px-4 font-bold text-xs">
          {post.category}
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
