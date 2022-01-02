import Image from "next/image";
import Link from "next/link";
import MainLayout from "../layouts/MainLayout";

const AboutPage = () => {
  return (
    <MainLayout page="About">
      <section className="max-w-7xl mx-auto py-12 lg:py-16 pl-4 pr-8 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          About the Bulletproof Blog
        </h1>

        <section className="pt-16">
          <div className="text-base max-w-prose mx-auto lg:max-w-none">
            <h2 className="text-base text-sky-600 font-semibold tracking-wide uppercase">
              Our Mission
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-1">
              What is Bulletproof Code?
            </p>
          </div>
          <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
            <p className="text-lg text-gray-500 mb-4">
              Bulletproof Code is a passion project dedicated to taking anyone
              with any level of technical knowledge and giving them the skills,
              mentality, and knowledge necessary to begin a career as a software
              developer!
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
            <div className="relative z-10">
              <div className="prose prose-sky text-gray-500 mx-auto lg:max-w-none">
                <p>
                  Our goal is to cultivate an engaging and fun front-end
                  learning community and pave a path for 1000+ students of code
                  to land their first job. To do this, we focus on:
                </p>
                <ul role="list">
                  <li>Creating world-class learning materials.</li>
                  <li>
                    Listening to what is working with our students and others.
                  </li>
                  <li>
                    Giving away lots of great accessible learning sources and
                    guides.
                  </li>
                </ul>
                <p>
                  These pillars came about because when I was (desperately)
                  trying to learn to program, I needed a guide or mentor that
                  embodied these core characteristics. I wanted one place where
                  there were others like me trying to land a job in tech that
                  didn't cost a dime, and the resources were value-packed and
                  actionable.
                </p>
                <h3>I'm here to help</h3>
                <p>
                  You are in the right place. I have been a developer for many
                  years and love giving my experience and knowledge to humans
                  like yourself.
                </p>
                <p>
                  At this point, over 100+ of my students in the past three
                  years learned to code and have gotten their first job! I live
                  and breathe for the moments when a pupil of mine has
                  completely transformed their life and went from unhappy,
                  broke, or lost to excited, wealthy, and on a great path!
                </p>
                <p>
                  If you are reading this, I am so glad you have found
                  Bulletproof Code. We are 100% focused on your success and
                  future! Sometimes it feels like I want my students to succeed
                  more than they do! 🥸
                </p>
              </div>
              <div className="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
                <div className="rounded-md shadow">
                  <Link href="/">
                    <a className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700">
                      Let's get started
                    </a>
                  </Link>
                </div>
                <div className="rounded-md shadow ml-4">
                  <Link href="/blog">
                    <a className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-sky-600 bg-white hover:bg-gray-50">
                      Read the blog
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
              <svg
                className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
                />
              </svg>
              <blockquote className="relative bg-white rounded-lg shadow-lg">
                <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                  <img
                    src="/static/images/BP_Logo-Large.png"
                    alt="Workcation"
                    className="h-8"
                  />
                  <div className="relative text-lg text-gray-700 font-medium mt-8">
                    <svg
                      className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative">
                      Some say seeing is believing, and I have seen people from
                      all walks of life with no experience and all sorts of
                      obstacles thrive in computer programming and launch a
                      rewarding career in technology!
                    </p>
                  </div>
                </div>
                <cite className="relative flex items-center sm:items-start bg-sky-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
                  <div className="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2 ">
                    <div className="w-12 h-12 sm:w-20 sm:h-20 relative">
                      <Image
                        className="rounded-full bg-sky-300"
                        layout="fill"
                        src="/avatar.jpg"
                        alt="William Wilder Profile"
                      />
                    </div>
                  </div>
                  <span className="relative ml-4 text-sky-300 font-semibold leading-6 sm:ml-24 sm:pl-1">
                    <p className="text-white font-semibold sm:inline mr-1">
                      William Wilder
                    </p>{" "}
                    <p className="sm:inline">Creator of Bulletproof Code</p>
                  </span>
                </cite>
              </blockquote>
            </div>
          </div>
        </section>
      </section>
    </MainLayout>
  );
};

export default AboutPage;
