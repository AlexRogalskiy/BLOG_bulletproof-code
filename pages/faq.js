import { nanoid } from "nanoid";
import MainLayout from "../layouts/MainLayout";

// TSK: Put these in a markdown file and parse them so you can do spacing and links and CTA's
// TSK: Add more FAQ's as time goes along!

const faqs = [
  {
    question: "How did you get started in tech?",
    answer:
      "Everyone's journey is different. When I decided software development was the path I wanted to take, it took over two years of dedicated practice every day after long hours of manual labor. Times were hard, but eventually, I got some lucrative freelance clients and accepted a job offer as a developer. I continued learning and coding on the side, and about two years into this, I decided to teach a coding Bootcamp after work three times a week. I LOVED IT! Helping others learn to program and change their lives brings great fulfillment. So I started teaching more and more, and now I have successfully guided over 100+ students with no technical experience to getting their first job as a developer! You could be next :D",
  },
  {
    question:
      "Can I get a job as a developer with no experience (and no college degree)?",
    answer:
      "Absolutely Yes! I can say this because I had no experience and no college degree, and I have taught hundreds of others in the same boat. All of us got jobs as developers. So yes, you can do it. You are smart enough. You are not too old nor too young. One step at a time - believe in yourself.",
  },
  {
    question: "I want to become a front-end developer. Where do I start?",
    answer:
      "Lucky for you, I have created a guide for anyone looking to become a Front-End developer that you can find at https://bulletproof-code.com! It is over 100+ pages and contains clear, practical advice on every aspect of becoming a PAID Front-End developer... On a literal note, HTML.",
  },
  {
    question: "How can I stay consistent in my learning?",
    answer:
      "What a great question! If you are asking this, you have what it takes, here's what you can do: Create a study plan, remove as many distractions as you can in your environment, and write down WHY you want to become a developer in extreme detail. Then, continue to write these reasons down every day. Besides these, the most important thing you can do to stay consistent is finding a mentor or group of people going in the same direction or that have already achieved what you are looking to achieve.",
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
