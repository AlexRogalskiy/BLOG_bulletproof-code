import Container from "../components/Structural/Container";

const SqueezeLayout = ({ children, offer }) => {
  return (
    <Container
      title={`${offer.title} | Bulletproof Code`}
      description={offer.description}
      image={`https://bulletproof-code.com${offer.image}`}
    >
      <main>{children}</main>
    </Container>
  );
};

export default SqueezeLayout;
