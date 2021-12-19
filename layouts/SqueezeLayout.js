import Container from "../components/Structural/Container";

const SqueezeLayout = ({ children }) => {
  return (
    <Container>
      <main>{children}</main>
    </Container>
  );
};

export default SqueezeLayout;
