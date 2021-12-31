import { useState, useEffect } from "react";
import { shuffleArray, sortAlphabetically } from "../utils/sorting.helpers";
import FlashcardData from "../data/terminology.db.json";
import { v4 } from "uuid";
import MobileListCategories from "../components/Display/MobileListCategories";
import ListCategoriesBar from "../components/Display/ListCategoriesBar";
import Flashcard from "../components/Display/Flashcard";
import MainLayout from "../layouts/MainLayout";

const sortOptions = [
  { name: "Category", href: "?sort=category" },
  { name: "Alphabetical", href: "?sort=alphabetical" },
  { name: "Difficutly", href: "?sort=difficulty" },
  { name: "Random", href: "?sort=random" },
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
  // SORT BY: Alphabetical, Category, Difficulty
  const [sortBy, setSortBy] = useState("category");
  const [filter, setFilter] = useState();

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <MainLayout>
      {/* Mobile Filters */}
      <MobileListCategories
        open={mobileFiltersOpen}
        setOpen={setMobileFiltersOpen}
        filters={filters}
      />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* Top Bar - Title & Description */}
        <div className="py-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            Coding Concept Flashcards
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-base text-gray-500">
            Increase your nerd knowledge exponentially by memorizing these
            carefully curated concepts.
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
            {flashcards.map((flashcard) => (
              <Flashcard key={v4()} flashcard={flashcard} />
            ))}
          </div>
        </section>
      </section>
    </MainLayout>
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
// TSK: Add a "Flip All Cards" button
