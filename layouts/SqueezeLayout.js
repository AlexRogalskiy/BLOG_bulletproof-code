import Container from "../components/Structural/Container";

const SqueezeLayout = ({ children, offer }) => {
  return (
    <Container
      title={`${offer.title} | Bulletproof Code`}
      description={offer.description}
      image={`https://bulletproof-code.com${offer.image}`}
    >
      <main className="max-w-7xl mx-auto px-6 mt-12">{children}</main>
    </Container>
  );
};

export default SqueezeLayout;
