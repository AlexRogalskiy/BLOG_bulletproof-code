import TwoColumnEBook from "../components/Marketing/TwoColumnEBook";
import SqueezeLayout from "../layouts/SqueezeLayout";
import Offers from "../data/offers.db.json";

const HomePage = ({ frontEndEBook }) => {
  return (
    <SqueezeLayout offer={frontEndEBook}>
      <TwoColumnEBook eBookDetails={frontEndEBook} />
    </SqueezeLayout>
  );
};

export default HomePage;

export async function getStaticProps() {
  const frontEndEBook = Offers.filter(
    (offer) => offer.slug === "bp-front-end-ebook"
  )[0];

  return {
    props: {
      frontEndEBook,
    },
  };
}
