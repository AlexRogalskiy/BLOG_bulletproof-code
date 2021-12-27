import { ArrowRightIcon } from "@heroicons/react/outline";
import { CheckCircleIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { v4 } from "uuid";

const TwoColumnEBook = ({ eBookDetails }) => {
  const { title, image, ctaCopy, wordCount, mainFeatures, optInLink } =
    eBookDetails;
  return (
    <article className="max-w-6xl mx-auto">
      {/*  Top Section - Title & SubTitle */}
      <section className="text-center space-y-12 mt-12 mb-16">
        <h1 className="text-3xl font-bold text-red-700">{title}</h1>
        <h2 className=" text-red-700 font-medium italic text-2xl">
          No BS. No false promises. Just a step-by-step system that actually
          works.
        </h2>
      </section>

      <section className="flex justify-between">
        {/* Left Section - Main Features */}
        <section className="w-5/12">
          <h3 className="">
            Download my{" "}
            <span className="font-bold">
              free {wordCount}-word Bulletproof Guide to Becoming a PAID
              Front-End Developer,
            </span>{" "}
            and I&apos;ll show you:
          </h3>
          <ul className="">
            {mainFeatures.map((feature) => (
              <li className="flex" key={v4()}>
                <CheckCircleIcon className="h-12 w-12 text-green-500" />
                <p className="">
                  <span className="font-bold">{feature.feature}</span>
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
          <ArrowRightIcon className="h-12 w-12" />
        </section>

        {/* Right Section - Image and CTA */}
        <section className="w-5/12">
          <div className="relative h-[450px] w-[450px] mx-auto">
            <Image
              src={image}
              alt={title + " Book Cover"}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <button className="bg-red-700 rounded mt-16 w-full py-4 px-8 text-white font-bold text-2xl uppercase hover:bg-red-800 transition-colors">
            {ctaCopy}
          </button>
        </section>
      </section>
    </article>
  );
};

export default TwoColumnEBook;
