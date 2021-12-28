import { ArrowRightIcon } from "@heroicons/react/outline";
import { CheckCircleIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { v4 } from "uuid";

const TwoColumnEBook = ({ eBookDetails }) => {
  const { title, image, ctaCopy, wordCount, mainFeatures } = eBookDetails;
  return (
    <article className="px-2 lg:px-0 max-w-6xl mx-auto min-h-screen">
      {/*  Top Section - Title & SubTitle */}
      <section className="text-center mt-4 mb-10 xl:mt-12 xl:mb-20">
        <h1 className="text-2xl lg:text-3xl font-bold text-red-700 mb-6 lg:mb-14">
          {title}
        </h1>
        <h2 className=" text-red-800 font-semibold lg:font-medium italic text-xl lg:text-2xl">
          No BS. No false promises. Just a step-by-step system that actually
          works.
        </h2>
      </section>

      <section className="flex flex-col lg:flex-row justify-between">
        {/* Left Section - Main Features */}
        <section className="w-full lg:w-6/12">
          <h3 className="text-xl lg:text-2xl text-gray-600">
            Download my{" "}
            <span className="font-bold text-gray-800">
              free {wordCount}-word Bulletproof Guide to Becoming a PAID
              Front-End Developer,
            </span>{" "}
            and I&apos;ll show you:
          </h3>
          <ul className="my-10 space-y-8 mb-10">
            {mainFeatures.map((feature) => (
              <li className="flex justify-between" key={v4()}>
                <CheckCircleIcon className="h-6 w-1/12 text-green-500 mr-2 align-top self-start justify-self-start" />
                <p className="leading-relaxed text-gray-700 font-light text-lg w-11/12">
                  <span className="font-bold text-gray-800">
                    {feature.feature}
                  </span>{" "}
                  ({feature.description})
                </p>
              </li>
            ))}
          </ul>
          <ArrowRightIcon className="hidden xl:block h-24 w-24 mx-auto text-gray-800" />
        </section>

        {/* Right Section - Image and CTA */}
        <section className="w-full lg:w-5/12">
          <div className="relative h-72 w-72 lg:h-80 lg:w-80 xl:h-[425px] xl:w-[425px] mx-auto">
            <Image
              src={image}
              alt={title + " Book Cover"}
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <button className="bg-red-700 rounded mt-16 w-full py-4 px-4 lg:px-8 text-white font-bold text-xl lg:text-2xl uppercase hover:bg-red-800 transition-colors">
            {ctaCopy}
          </button>
        </section>
      </section>
    </article>
  );
};

export default TwoColumnEBook;
