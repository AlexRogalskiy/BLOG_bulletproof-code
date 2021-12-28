import MainLayout from "../../layouts/MainLayout";
import allOffers from "../../data/offers.db.json";
import Image from "next/image";

const ThankYouTemplate = ({ optInItem }) => {
  return (
    <MainLayout>
      <section className="text-center">
        <h1 className="text-4xl leading-snug">
          Thank You for your interest in the{" "}
          <span className="font-black block">{optInItem.name}</span>
        </h1>
        <h2 className="mt-4 text-2xl text-lightBlue-700 font-medium">
          P.S. It is waiting for you in your inbox!
        </h2>
        <div className="relative w-96 h-96 mx-auto my-12">
          <Image
            src={optInItem.image}
            alt={optInItem.title}
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>

        <div className="max-w-prose mx-auto space-y-6 text-blueGray-800 ">
          <p className="text-axl">
            Check your inbox for the confirmation email with the title "
            <span className="font-bold">
              {optInItem.type !== "newsletter" && "Download Your"}{" "}
              {optInItem.name}!
            </span>
            ".
          </p>

          <p className="font-light text-gray-700">
            Use Gmail? If my email is in your “Promotions” tab, just drag it
            into your “Primary” folder so you always see your newsletter.
          </p>
          <p className="font-light text-gray-600">
            (Note: If you didn’t receive my email within the next hour, check
            your spam folder.)
          </p>
          <hr />
          <p className="mt-12">
            I am happy to have you here and hope you enjoy your{" "}
            <span className="font-bold">{optInItem.shortName}</span>. Talk with
            you soon!
          </p>
        </div>
      </section>
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
