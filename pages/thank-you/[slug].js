import MainLayout from "../../layouts/MainLayout";
import allOffers from "../../data/offers.db.json";

const ThankYouTemplate = ({ optInItem }) => {
  return (
    <MainLayout>
      <h1 className="">Thank You! {optInItem.name}</h1>
    </MainLayout>
  );
};

export default ThankYouTemplate;

export async function getStaticProps({ params: { slug } }) {
  const currOptInItem = allOffers.filter((path) => path.slug === slug);

  return {
    props: {
      optInItem: currOptInItem[0],
    },
  };
}

export async function getStaticPaths() {
  const allOfferPaths = allOffers.map((offer) => ({
    params: {
      slug: offer.slug,
    },
  }));

  return {
    paths: allOfferPaths,
    fallback: false,
  };
}
