import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { MailIcon } from "@heroicons/react/outline";
import { postData } from "../../utils/http.helpers";

const BrandPanel = ({ type, slug, cta }) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const res = await postData("/api/users/subscribe", { email, type });

    console.log("res:", res);

    if (res.ok) router.push(`/thank-you/${slug}`);
    //     if (res.ok) setSuccess(true);
  };

  if (success) return "Success!";

  return (
    <div className="max-w-7xl mx-auto py-16 sm:px-6 lg:px-8">
      <div className="bg-sky-600 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
        <div className="pt-10 pb-12 px-6 sm:pt-16 xl:px-16 lg:py-16 lg:pr-0 xl:py-20">
          <div className="lg:self-center">
            <h2 className="text-2xl font-extrabold text-white xl:text-4xl">
              <span className="block text-gray-100 text-xl xl:text-3xl mb-2">
                Ready to dive in?
              </span>
              <span className="block">
                Download Your Bulletproof Front-End Guide.
              </span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-sky-200">
              This comprehensive {type} is all you need to succeed in your goal
              of landing your first developer position.
            </p>

            <form className="mt-8" onSubmit={handleFormSubmit}>
              <div className="my-2">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <div className="mt-1 mb-4 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MailIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="focus:ring-sky-500 focus:border-sky-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3 "
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className=" bg-gray-800 border border-transparent rounded-md shadow px-5 py-3 inline-flex w-full justify-center items-center text-base font-medium text-gray-100 hover:bg-gray-700 focus:bg-gray-700 transition-colors"
              >
                {cta}
              </button>
            </form>
          </div>
        </div>
        <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
          <Image
            className="transform translate-x-6 translate-y-6 rounded-md sm:translate-x-16 lg:translate-y-20"
            src="/static/images/bp-front-end/BP_FE_3D.png"
            alt="TSK"
            layout="fill"
            objectFit="cover"
            objectPosition="left top"
          />
        </div>
      </div>
    </div>
  );
};

export default BrandPanel;
