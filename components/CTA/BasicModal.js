import { Fragment, useState } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { ExclamationCircleIcon, MailIcon } from "@heroicons/react/solid";
import { classNames } from "../../utils/css.helpers";
import { postData } from "../../utils/http.helpers";
import Image from "next/image";
import BigRedCTA from "./BigRedCTA";

const product = {
  name: "Women's Basic Tee",
  price: "$32",
  rating: 3.9,
  reviewCount: 512,
  href: "#",
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
  imageAlt: "Back of women's Basic Tee in black.",
  colors: [
    { name: "Black", bgColor: "bg-gray-900", selectedColor: "ring-gray-900" },
    {
      name: "Heather Grey",
      bgColor: "bg-gray-400",
      selectedColor: "ring-gray-400",
    },
  ],
  sizes: [
    { name: "XXS", inStock: true },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "XXL", inStock: false },
  ],
};

// TSK: Add Loading & error handling
// TSK: Abstract this file and rename!
const BasicModal = ({ open, setOpen, title, cta, image }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await postData("/api/users/subscribe", { email: email });

    setLoading(false);
    setError(res.error);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setOpen}
      >
        <div
          className="flex min-h-screen text-center md:block md:px-2 lg:px-4"
          style={{ fontSize: 0 }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden md:inline-block md:align-middle md:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            enterTo="opacity-100 translate-y-0 md:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 md:scale-100"
            leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
          >
            <div className="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
              <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <button
                  type="button"
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:items-center lg:gap-x-8">
                  <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                    <Image
                      src={image}
                      alt={title + " Book Cover"}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                  <div className="sm:col-span-8 lg:col-span-7">
                    <h2 className="text-xl md:text-3xl font-medium text-gray-900 sm:pr-12">
                      Where Should I Send Your Free Guide?
                    </h2>

                    <section aria-labelledby="options-heading" className="mt-8">
                      <h3 id="options-heading" className="sr-only">
                        Opt-In Form
                      </h3>

                      <form onSubmit={handleFormSubmit}>
                        {/* Email Input */}
                        <div className="mt-8 mb-4">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email
                          </label>
                          <div className="mt-1 relative rounded-md shadow-sm">
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
                              autoFocus={open}
                            />
                          </div>
                        </div>

                        <BigRedCTA cta={cta} type="submit" />
                      </form>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default BasicModal;

// TSK: Add a progress bar and start it at 50% => Let them know they "Are Almost There!"
// TSK: Have a checkbox to download the eBook and the free checklists
// TSK: It should autofocus into the input box
// TSK: A/B Test with and without a name property
