import Container from "../components/Structural/Container";
import Footer from "../components/Structural/Footer";
import Header from "../components/Structural/Header";

const MainLayout = ({ children, page }) => {
  return (
    <Container page={page}>
      <Header />
      <main className="max-w-7xl min-h-screen mx-auto px-6 mt-6 lg:mt-12">
        {children}
      </main>
      <Footer />
    </Container>
  );
};

export default MainLayout;
