import TwoColumnEBook from "../components/Marketing/TwoColumnEBook";
import SqueezeLayout from "../layouts/SqueezeLayout";

const BPFrontEndGuide = {
  title:
    "Let me show you what it REALLY takes to land your first developer job in 2022.",
  image: "/static/images/bp-front-end/Book_Cover.png",
  wordCount: "16,511",
  optInLink: "/opt-in/bulletproof-guide-to-becoming-a-paid-front-end-developer",
  mainFeatures: [
    {
      feature: "A Bulletproof 6 Month Plan to Learning Front-End Development",
      description:
        "from finding what to focus on, to growing your skills, to building your portfolio and acing the interview",
    },
    {
      feature:
        "What My Most Successful Students Do That Puts Them Ahead of the Rest",
      description:
        "no sugar coating. I'll show you exactly what you need to do, and how to stand above the rest of the competition and excel as a programmer",
    },
    {
      feature:
        "An Easy-to-Implement Study Strategy Proven to Enhance Learning, Memory & Recall",
      description:
        "nobody talks about this, and yet, it is a key component for successfully learning to code and continue your journey as a excellent front-end developer",
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
