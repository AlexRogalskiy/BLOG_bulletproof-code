import { ArrowRightIcon } from "@heroicons/react/outline";
import { CheckCircleIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { v4 } from "uuid";

const TwoColumnEBook = ({ eBookDetails }) => {
  const { title, image, ctaCopy, wordCount, mainFeatures, optInLink } =
    eBookDetails;
  return (
    <article className="max-w-6xl mx-auto min-h-screen">
      {/*  Top Section - Title & SubTitle */}
      <section className="text-center mt-12 mb-20">
        <h1 className="text-3xl font-bold text-red-700 mb-14">{title}</h1>
        <h2 className=" text-red-800 font-medium italic text-2xl">
          No BS. No false promises. Just a step-by-step system that actually
          works.
        </h2>
      </section>

      <section className="flex justify-between">
        {/* Left Section - Main Features */}
        <section className="w-6/12">
          <h3 className="text-2xl text-gray-600">
            Download my{" "}
            <span className="font-bold text-gray-800">
              free {wordCount}-word Bulletproof Guide to Becoming a PAID
              Front-End Developer,
            </span>{" "}
            and I&apos;ll show you:
          </h3>
          <ul className="my-10 space-y-8 mb-16">
            {mainFeatures.map((feature) => (
              <li className="flex justify-between" key={v4()}>
                <CheckCircleIcon className="h-14 w-14 text-green-500 mr-3 align-top self-start justify-self-start" />
                <p className="leading-relaxed text-gray-700 font-light text-lg">
                  <span className="font-bold text-gray-800">
                    {feature.feature}
                  </span>{" "}
                  ({feature.description})
                </p>
              </li>
            ))}
          </ul>
          <ArrowRightIcon className="h-28 w-28 mx-auto text-gray-800" />
        </section>

        {/* Right Section - Image and CTA */}
        <section className="w-5/12">
          <div className="relative h-[475px] w-[475px] mx-auto">
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
