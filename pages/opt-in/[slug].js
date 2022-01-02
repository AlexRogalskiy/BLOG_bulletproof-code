import TwoColumnEBook from "../../components/Marketing/TwoColumnEBook";
import SqueezeLayout from "../../layouts/SqueezeLayout";
import allOffers from "../../data/offers.db.json";
import DoubleDownload from "../../components/Marketing/DoubleDownload";

const OptInTemplate = ({ optInOffer }) => {
  return (
    <SqueezeLayout offer={optInOffer}>
      {optInOffer.type === "eBook" && (
        <TwoColumnEBook eBookDetails={optInOffer} />
      )}

      {/* TSK: Create an optIn Template for bonus checklists and downloadables */}
      {optInOffer.type === "bonus" && (
        <DoubleDownload offerDetails={optInOffer} />
      )}

      {/* TSK: Create an optIn Template for newsletter */}
      {optInOffer.type === "newsletter" && <h1>Coming Soon</h1>}
    </SqueezeLayout>
  );
};

export default OptInTemplate;

export async function getStaticProps({ params: { slug } }) {
  const currOptInOffer = allOffers.filter((path) => path.slug === slug);

  return {
    props: {
      optInOffer: currOptInOffer[0],
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
