import TwoColumnEBook from "../components/Marketing/TwoColumnEBook";

const BPFrontEndGuide = {
  title: "Bulletproof Guide to Becoming a PAID Front-End Developer",
  image: "/static/images/bp-front-end/Book_Cover.png",
  wordCount: 16511,
  optInLink: "",
  mainFeatures: [],
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
