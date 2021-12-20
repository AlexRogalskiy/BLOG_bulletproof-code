import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { v4 } from "uuid";

const MobileHeader = ({ myBestFreeContent, moreResources }) => {
  return (
    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <Image
                  width={24}
                  height={24}
                  src="/static/images/BP_Logo-Large.png"
                  alt="Bulletproof Code Logo"
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lightBlue-500">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid grid-cols-1 gap-7">
                {myBestFreeContent.map((item) => (
                  <Link key={v4()} href={item.href}>
                    <a className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-lightBlue-500 text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">
                        {item.name}
                      </div>
                    </a>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          <div className="py-6 px-5">
            <div className="grid grid-cols-2 gap-4">
              <Link href="TSK">
                <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Pricingtsk
                </a>
              </Link>
              <Link href="TSK">
                <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Docstsk
                </a>
              </Link>

              <Link href="TSK">
                <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Enterprisetsk
                </a>
              </Link>
              {moreResources.map((resource) => (
                <Link key={v4()} href={resource.href}>
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                    {resource.name}
                  </a>
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Link href="TSK">
                <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-lightBlue-600 hover:bg-lightBlue-700">
                  Sign up
                </a>
              </Link>
              <p className="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?{" "}
                <Link href="TSK">
                  <a className="text-lightBlue-600 hover:text-lightBlue-500">
                    Sign in
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
};

export default MobileHeader;
