import Image from "next/image";

const TwoColBackground = ({ offerDetails }) => {
  console.log("offerDetails:", offerDetails);

  return (
    <section className="absolute top-0 left-0 w-screen h-screen bg-sky-400">
      {/* Background */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-70"
        style={{
          backgroundImage: "url(/static/images/moroccan-flower-dark.png)",
        }}
      />

      {/* Main Content */}
      <article className="px-2 lg:px-0 max-w-6xl mx-auto min-h-screen">
        {/* Top - Logo */}
        <section className="relative w-56 h-56 mx-auto">
          <Image
            src="/static/images/BP_Logo-White.png"
            alt="Bulletproof Code Logo"
            layout="fill"
            priority
          />
        </section>

        {/* Body */}
        <section className="flex justify-between w-full h-full">
          {/* Left - Image */}
          <section className="relative w-full h-72 md:w-1/3 lg:h-80 lg:w-80 xl:h-[425px] xl:w-[425px]">
            <Image
              src="/static/images/bp-front-end/BP_FE_Cover.png"
              alt="Bulletproof Code Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </section>

          {/* Right - Content + CTA */}
          <section className="w-full md:w-7/12"></section>
        </section>
      </article>
    </section>
  );
};

export default TwoColBackground;
