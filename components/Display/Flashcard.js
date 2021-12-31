import { useState } from "react";

const Flashcard = ({ flashcard }) => {
  const [isFront, setIsFront] = useState(true);

  return (
    <button
      onClick={() => setIsFront(!isFront)}
      className="group bg-green-200 rounded-lg h-96"
    >
      <article className="">
        {/* FRONT */}
        {isFront && (
          <section className="">
            <h3>{flashcard.concept}</h3>
          </section>
        )}

        {/* BACK */}
        {!isFront && (
          <section className="">
            <p className="mt-1 text-sm italic text-gray-500">
              {flashcard.description}
            </p>
          </section>
        )}
      </article>
    </button>
  );
};

export default Flashcard;
