import { useState, useEffect } from "react";
import FlashcardData from "../data/terminology.db.json";
import { shuffleArray, sortAlphabetically } from "../utils/sorting.helpers";

const Flashcards = ({ flashcards }) => {
  console.log("flashcards:", flashcards);

  const [sortBy, setSortBy] = useState("category");
  const [filter, setFilter] = useState();

  // Categories: Computer Science, General Programming, Front-End, Back-End,
  // Design, Marketing, Languages + Libraries + Frameworks, Meta

  return (
    <section>
      <h1 className="text-3xl">Coding Concept Flashcards!</h1>
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
