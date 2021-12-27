import TwoColumnEBook from "../components/Marketing/TwoColumnEBook";

const BPFrontEndGuide = {
  title: "Bulletproof Guide to Becoming a PAID Front-End Developer",
  image: "/static/images/bp-front-end/Book_Cover.png",
  wordCount: 16511,
  optInLink: "/opt-in/bulletproof-guide-to-becoming-a-paid-front-end-developer",
  mainFeatures: [
    {
      feature: "Strategically integrate action points in your business",
      description:
        "So we can hit the ground running, we will be dynamically investing every ballpark figure in our space.",
    },
    {
      feature: "Virtually grow capabilities in your business",
      description:
        "Learn seamless best practices are becoming unparalleled prince2 practitioner experts",
    },
    {
      feature: "Intelligently reuse step-changes in your business",
      description:
        "Touching base about engineering emerging markets will make us leaders in the holistic visibility industry",
    },
  ],
  ctaCopy: "Download my Free Guide!",
};

const HomePage = (props) => {
  return (
    <section>
      <TwoColumnEBook eBookDetails={BPFrontEndGuide} />
    </section>
  );
};

export default HomePage;
