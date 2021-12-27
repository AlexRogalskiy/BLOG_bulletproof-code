import TwoColumnEBook from "../components/Marketing/TwoColumnEBook";
import SqueezeLayout from "../layouts/SqueezeLayout";

const BPFrontEndGuide = {
  title:
    "Let me show you what it REALLY takes to land your first developer job in 2022.",
  image: "/static/images/bp-front-end/Book_Cover.png",
  wordCount: 16511,
  optInLink: "/opt-in/bulletproof-guide-to-becoming-a-paid-front-end-developer",
  mainFeatures: [
    {
      feature: "Strategically integrate action points in your business",
      description:
        "so we can hit the ground running, we will be dynamically investing every ballpark figure in our space.",
    },
    {
      feature: "Virtually grow capabilities in your business",
      description:
        "learn seamless best practices are becoming unparalleled prince2 practitioner experts",
    },
    {
      feature: "Intelligently reuse step-changes in your business",
      description:
        "touching base about engineering emerging markets will make us leaders in the holistic visibility industry",
    },
  ],
  ctaCopy: "Download my Free Guide!",
};

const HomePage = (props) => {
  return (
    <SqueezeLayout offer={BPFrontEndGuide}>
      <TwoColumnEBook eBookDetails={BPFrontEndGuide} />
    </SqueezeLayout>
  );
};

export default HomePage;
