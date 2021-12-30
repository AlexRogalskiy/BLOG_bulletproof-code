import { MailIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { postData } from "../../utils/http.helpers";
import BigRedCTA from "./BigRedCTA";

const InlineForm = ({
  headline,
  description,
  image,
  cta,
  btnText,
  isPriority,
  slug,
}) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const res = await postData("/api/users/subscribe", { email: email });

    console.log("res:", res);

    if (res.ok) router.push(`/thank-you/${slug}`);
    //     if (res.ok) setSuccess(true);
  };

  if (success) return "";

  return (
    <article className="w-full h-full my-12 lg:p-4 bg-white shadow-md flex flex-col md:flex-row-reverse justify-between">
      {/* Left Side - Text and Form */}
      <section className="w-full md:w-7/12 order-2 px-4">
        <h3 className="form-headline">{headline}</h3>
        <p className="text-light text-gray-700 leading-relaxed py-2">
          {description}
        </p>
        <p className="text-light text-gray-700 leading-relaxed py-2">{cta}</p>

        <form onSubmit={handleFormSubmit}>
          {/* Email Input */}
          <div className="my-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
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
                className="focus:ring-sky-500 focus:border-sky-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3"
                placeholder="you@example.com"
                required
              />
            </div>
            <BigRedCTA cta={btnText} type="submit" />
          </div>
        </form>
      </section>

      {/* Right Side - Image */}
      <section className="w-full aspect-w-2 aspect-h-3 md:aspect-h-1 md:my-auto rounded-lg md:mx-4  bg-gray-100 overflow-hidden max-h-32 md:w-4/12 order-1">
        <Image
          src={image}
          alt={" Book Cover"}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority={isPriority}
        />
      </section>
    </article>
  );
};

export default InlineForm;
