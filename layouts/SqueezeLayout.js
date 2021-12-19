import Container from "../components/structure/Container";

const SqueezeLayout = ({ children, offer }) => {
  return (
    <Container
      title={`${offer.title} | Bulletproof Code`}
      description={offer.description}
      image={`https://bulletproof-code.com${offer.image}`}
      hasHeader={false}
      hasFooter={false}
    >
      <section>{children}</section>
    </Container>
  );
};

export default SqueezeLayout;
