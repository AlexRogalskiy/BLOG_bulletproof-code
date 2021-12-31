import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { classNames } from "../../utils/css.helpers";
import { v4 } from "uuid";
import Link from "next/link";

const ListCategoriesBar = ({ filters, sortOptions, setMobileFiltersOpen }) => {
  return (
    <section
      aria-labelledby="filter-heading"
      className="border-t border-gray-200 pt-6"
    >
      <h2 id="filter-heading" className="sr-only">
        Coding flashcard filters
      </h2>

      <div className="flex items-center justify-between">
        <Menu as="div" className="relative z-10 inline-block text-left">
          <div>
            <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
              Sort
              <ChevronDownIcon
                className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-left absolute left-0 z-10 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {sortOptions.map((option) => (
                  <Menu.Item key={v4()}>
                    {({ active }) => (
                      <Link href={option.href}>
                        <a
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm font-medium text-gray-900"
                          )}
                        >
                          {option.name}
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <button
          type="button"
          className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
          onClick={() => setMobileFiltersOpen(true)}
        >
          Flashcard Filters
        </button>

        <Popover.Group className="hidden sm:flex sm:items-baseline sm:space-x-8">
          {filters.map((section, sectionIdx) => (
            <Popover
              as="div"
              key={v4()}
              id="menu"
              className="relative z-10 inline-block text-left"
            >
              <div>
                <Popover.Button className="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  <span>{section.name}</span>
                  {sectionIdx === 0 ? (
                    <span className="ml-1.5 rounded py-0.5 px-1.5 bg-gray-200 text-xs font-semibold text-gray-700 tabular-nums">
                      1
                    </span>
                  ) : null}
                  <ChevronDownIcon
                    className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Popover.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Popover.Panel className="origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <form className="space-y-4">
                    {section.options.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          id={`filter-${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          defaultValue={option.value}
                          defaultChecked={option.checked}
                          type="checkbox"
                          className="h-4 w-4 border-gray-300 rounded text-sky-600 focus:ring-sky-500"
                        />
                        <label
                          htmlFor={`filter-${section.id}-${optionIdx}`}
                          className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </form>
                </Popover.Panel>
              </Transition>
            </Popover>
          ))}
        </Popover.Group>
      </div>
    </section>
  );
};

export default ListCategoriesBar;
