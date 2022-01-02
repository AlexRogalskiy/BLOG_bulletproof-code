import { useState, useEffect } from "react";
import {
  shuffleArray,
  sortAlphabetically,
  sortByNumber,
} from "../utils/sorting.helpers";
import FlashcardData from "../data/terminology.db.json";
import { v4 } from "uuid";
import MobileListCategories from "../components/Display/MobileListCategories";
import ListCategoriesBar from "../components/Display/ListCategoriesBar";
import Flashcard from "../components/Display/Flashcard";
import MainLayout from "../layouts/MainLayout";
import { useRouter } from "next/router";

const sortOptions = [
  { value: "category", name: "Category" },
  { value: "alphabetical", name: "Alphabetical" },
  { value: "difficulty", name: "Difficutly" },
  { value: "random", name: "Random" },
];
// const filters = [
//   {
//     id: "category",
//     name: "Category",
//     options: [
//       { value: "computer-science", label: "Computer Science" },
//       { value: "general-programming", label: "General Programming" },
//       { value: "front-end", label: "Front-End" },
//       { value: "back-end", label: "Back-End" },
//       { value: "design", label: "Design" },
//       { value: "marketing", label: "Marketing" },
//       { value: "meta", label: "Meta" },
//     ],
//   },
//   {
//     id: "difficulty",
//     name: "Difficulty",
//     options: [
//       { value: 1, label: "Easy", isChecked: true },
//       { value: 2, label: "Novice", isChecked: true },
//       { value: 3, label: "Intermediate", isChecked: true },
//       { value: 4, label: "Advanced", isChecked: true },
//       { value: 5, label: "Expert", isChecked: true },
//     ],
//   },
// ];

const Flashcards = ({ flashcards }) => {
  const router = useRouter();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filteredCards, setFilteredCards] = useState(flashcards);
  const [sortBy, setSortBy] = useState("category");

  useEffect(() => {
    let sortedCards;

    if (sortBy === "category") {
      sortedCards = sortAlphabetically(filteredCards, "category");
    }
    if (sortBy === "alphabetical") {
      sortedCards = sortAlphabetically(filteredCards, "concept");
    }
    if (sortBy === "difficulty") {
      sortedCards = sortByNumber(filteredCards, "difficulty");
    }
    if (sortBy === "random") {
      sortedCards = shuffleArray(filteredCards);
    }

    setFilteredCards(sortedCards);
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          sortBy,
        },
      },
      undefined,
      { shallow: true }
    );
  }, [sortBy]);

  return (
    <MainLayout page="Coding Flashcards">
      {/* Mobile Filters */}
      <MobileListCategories
        open={mobileFiltersOpen}
        setOpen={setMobileFiltersOpen}
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
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* Concept Card Grid */}
        <section aria-labelledby="flashcards-heading" className="mt-8">
          <h2 id="flashcards-heading" className="sr-only">
            Flashcards
          </h2>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
            {filteredCards?.map((flashcard) => (
              <Flashcard key={v4()} flashcard={flashcard} sortBy={sortBy} />
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
// TSK: Make the Randomize a seperate button
// TSK: Make it sortable by difficulty-easy and difficulty-hardest
// TSK: Create Filter Methods
