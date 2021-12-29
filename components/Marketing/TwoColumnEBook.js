import Script from "next/script";
import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { CheckCircleIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { v4 } from "uuid";
import BasicModal from "../CTA/BasicModal";
import BigRedCTA from "../CTA/BigRedCTA";

const TwoColumnEBook = ({ eBookDetails }) => {
  const { title, subTitle, image, cta, wordCount, mainFeatures } = eBookDetails;

  const [showModal, setShowModal] = useState(false);

  return (
    <article className="px-2 lg:px-0 max-w-6xl mx-auto min-h-screen">
      {/*  Top Section - Title & SubTitle */}
      <section className="text-center mt-4 mb-10 xl:mt-12 xl:mb-20">
        <h1 className="text-2xl lg:text-3xl font-bold text-red-700 mb-6 lg:mb-12 xl:mb-14">
          {title}
        </h1>
        <h2 className=" text-red-800 font-semibold lg:font-medium italic text-xl lg:text-2xl">
          {subTitle}
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
          <div className="relative h-72 w-72 lg:h-80 lg:w-80 xl:h-[425px] xl:w-[425px] mx-auto mb-16">
            <Image
              src={image}
              alt={title + " Book Cover"}
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>

          <BigRedCTA cta={cta} handleClick={() => setShowModal(true)} />

          {showModal && (
            <BasicModal
              open={showModal}
              setOpen={setShowModal}
              cta={cta}
              title={title}
              image={eBookDetails.mockup || image}
            />
          )}

          {/* {showModal && (
            <TwoColCTA
              src="https://bulletproofcode.ck.page/3e34f9b6e0"
              setShowModal={setShowModal}
            />
          )} */}
        </section>
      </section>
    </article>
  );
};

export default TwoColumnEBook;
