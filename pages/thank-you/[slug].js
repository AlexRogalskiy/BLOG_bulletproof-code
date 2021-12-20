import MainLayout from "../../layouts/MainLayout";
import allOffers from "../../data/offers.db.json";
import Image from "next/image";

const ThankYouTemplate = ({ optInItem }) => {
  return (
    <MainLayout>
      <h1 className="text-4xl text-center leading-snug">
        Thank You for Downloding the{" "}
        <span className="font-black block">{optInItem.name}</span>
      </h1>
      <div className="relative w-96 h-96 mx-auto my-12">
        <Image
          src={optInItem.image}
          alt={optInItem.name}
          layout="fill"
          objectFit="contain"
        />
      </div>
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
