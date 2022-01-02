import { nanoid } from "nanoid";
import MainLayout from "../layouts/MainLayout";

const faqs = [
  {
    question: "How did you get started in tech?",
    answer: "TSK",
  },
  {
    question:
      "Can I get a job as a developer with no experience (and no college degree)?",
    answer: "TSK",
  },
  {
    question: "I want to become a front-end developer. Where do I start?",
    answer: "TSK",
  },
  {
    question: "How can I stay consistent in my learning?",
    answer: "TSK",
  },
];

const FAQPage = () => {
  return (
    <MainLayout page="FAQ">
      <section className="max-w-7xl mx-auto py-12 lg:py-16 pl-4 pr-8 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Frequently asked questions
        </h1>
        <div className="mt-8">
          <dl className="divide-y divide-gray-200">
            {faqs.map((faq) => (
              <div
                key={nanoid()}
                className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"
              >
                <dt className="text-base font-medium text-gray-900 md:col-span-5">
                  {faq.question}
                </dt>
                <dd className="mt-2 md:mt-0 md:col-span-7">
                  <p className="text-base text-gray-500">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </MainLayout>
  );
};

export default FAQPage;
