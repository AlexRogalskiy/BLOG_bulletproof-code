import Container from "../components/Structural/Container";
import Footer from "../components/Structural/Footer";
import Header from "../components/Structural/Header";

const MainLayout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default MainLayout;
