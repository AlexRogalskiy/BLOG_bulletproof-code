import { useState, useEffect } from "react";
import { shuffleArray, sortAlphabetically } from "../utils/sorting.helpers";
import FlashcardData from "../data/terminology.db.json";
import { v4 } from "uuid";
import MobileListCategories from "../components/Display/MobileListCategories";
import ListCategoriesBar from "../components/Display/ListCategoriesBar";
import Flashcard from "../components/Display/Flashcard";

const sortOptions = [
  { name: "Category", href: "?sort=category" },
  { name: "Alphabetical", href: "?sort=alphabetical" },
  { name: "Difficutly", href: "?sort=difficulty" },
];
const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "computer-science", label: "Computer Science" },
      { value: "general-programming", label: "General Programming" },
      { value: "front-end", label: "Front-End" },
      { value: "back-end", label: "Back-End" },
      { value: "design", label: "Design" },
      { value: "marketing", label: "Marketing" },
      // TSKSKKTKSKS CHNAGE THIS ONE
      {
        value: "languages-libraries-frameworks",
        label: "Lanaguages, Libraries & Frameworks",
      },
      { value: "meta", label: "Meta" },
    ],
  },
  {
    id: "difficulty",
    name: "Difficulty",
    options: [
      { value: 1, label: "Easy" },
      { value: 2, label: "Novice" },
      { value: 3, label: "Intermediate" },
      { value: 4, label: "Advanced" },
      { value: 5, label: "Expert" },
    ],
  },
];

const Flashcards = ({ flashcards }) => {
  console.log("flashcards:", flashcards);

  // SORT BY: Alphabetical, Category, Difficulty
  const [sortBy, setSortBy] = useState("category");
  const [filter, setFilter] = useState();

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <section>
      {/* Mobile Filters */}
      <MobileListCategories
        open={mobileFiltersOpen}
        setOpen={setMobileFiltersOpen}
        filters={filters}
      />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* Top Bar - Title & Description */}
        <div className="py-24 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            Coding Concept Flashcards
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-base text-gray-500">
            Thoughtfully designed concepts tsk for the workspace, home, and
            travel.
          </p>
        </div>

        {/* Filters */}
        <ListCategoriesBar
          setMobileFiltersOpen={setMobileFiltersOpen}
          sortOptions={sortOptions}
          filters={filters}
        />

        {/* Concept Card Grid */}
        <section aria-labelledby="flashcards-heading" className="mt-8">
          <h2 id="flashcards-heading" className="sr-only">
            Flashcards
          </h2>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
            {/* TSK: Make into a Flashcard */}
            {flashcards.map((flashcard) => (
              <Flashcard key={v4()} flashcard={flashcard} />
            ))}
          </div>
        </section>

        <section
          aria-labelledby="featured-heading"
          className="relative mt-16 rounded-lg overflow-hidden lg:h-96"
        >
          <div className="absolute inset-0">
            <img
              src="https://tailwindui.com/img/ecommerce-images/category-page-01-featured-collection.jpg"
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div aria-hidden="true" className="relative w-full h-96 lg:hidden" />
          <div aria-hidden="true" className="relative w-full h-32 lg:hidden" />
          <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-75 p-6 rounded-bl-lg rounded-br-lg backdrop-filter backdrop-blur sm:flex sm:items-center sm:justify-between lg:inset-y-0 lg:inset-x-auto lg:w-96 lg:rounded-tl-lg lg:rounded-br-none lg:flex-col lg:items-start">
            <div>
              <h2
                id="featured-heading"
                className="text-xl font-bold text-white"
              >
                Workspace Collection
              </h2>
              <p className="mt-1 text-sm text-gray-300">
                Upgrade your desk with objects that keep you organized and
                clear-minded.
              </p>
            </div>
            <a
              href="#"
              className="mt-6 flex-shrink-0 flex bg-white bg-opacity-0 py-3 px-4 border border-white border-opacity-25 rounded-md items-center justify-center text-base font-medium text-white hover:bg-opacity-10 sm:mt-0 sm:ml-8 lg:ml-0 lg:w-full"
            >
              View the collection
            </a>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Flashcards;

export async function getStaticProps() {
  const flashcardsByCategory = sortAlphabetically(FlashcardData, "category");

  return {
    props: {
      flashcards: flashcardsByCategory,
    },
  };
}

// TSK: Have option to go full screen and focus on one card at a time
// TSK: Have option to choose random cards or by category that filters out the resutls or alphabetical
