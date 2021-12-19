import Container from "../components/Structural/Container";
import Footer from "../components/Structural/Footer";
import Header from "../components/Structural/Header";

const BlogPostLayout = ({ children, postDetails }) => {
  return (
    <Container
      title={`${postDetails.title} | Bulletproof Code`}
      description={postDetails.excerpt}
      image={`https://bulletproof-code.com${postDetails.coverImage}`}
      date={new Date(postDetails.publishedOn).toISOString()}
      type="article"
    >
      <Header />
      <main className="max-w-7xl mx-auto">{children}</main>
      <Footer />
    </Container>
  );
};

export default BlogPostLayout;
