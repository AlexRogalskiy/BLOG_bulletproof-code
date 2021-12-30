import { useState } from "react";
import { AcademicCapIcon, CalendarIcon } from "@heroicons/react/outline";
import BigRedCTA from "../CTA/BigRedCTA";
import BasicModal from "../CTA/BasicModal";

const DoubleDownload = ({ offerDetails }) => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  console.log("offerDetails:", offerDetails);

  return (
    <article className="relative py-16 overflow-hidden">
      <section className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-sky-600">
                  {/* TSK */}
                  <CalendarIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {offerDetails.downloads[0].name}
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  {offerDetails.downloads[0].description}
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => setOpen(true)}
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700"
                  >
                    {offerDetails.downloads[0].cta}
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    {/* TSK */}
                    &ldquo;{offerDetails.downloads[0].testimonial.quote}&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src={
                          offerDetails.downloads[0].testimonial.profile_picture
                        }
                        alt={offerDetails.downloads[0].testimonial.name}
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">
                      {offerDetails.downloads[0].testimonial.name},{" "}
                      {offerDetails.downloads[0].testimonial.status}
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={offerDetails.downloads[0].image}
                alt={offerDetails.downloads[0].name}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-sky-600">
                  <AcademicCapIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {offerDetails.downloads[1].name}
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  {offerDetails.downloads[1].description}
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => setOpen(true)}
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700"
                  >
                    {offerDetails.downloads[1].cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -mr-24 sm:pr-6 md:-mr-36 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={offerDetails.downloads[1].image}
                alt={offerDetails.downloads[1].name}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-24 -mb-16 pb-4 max-w-xl mx-auto">
        <BigRedCTA handleClick={() => setOpen(true)} cta={offerDetails.cta} />
      </section>
      <section>
        <BasicModal
          open={open}
          setOpen={setOpen}
          setError={setError}
          title={offerDetails.title}
          cta={offerDetails.cta}
          image={offerDetails.image}
          slug={offerDetails.slug}
          type={offerDetails.type}
        />
      </section>
    </article>
  );
};

export default DoubleDownload;
