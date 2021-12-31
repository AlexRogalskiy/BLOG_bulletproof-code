import { useState } from "react";
import { classNames } from "../../utils/css.helpers";

const Flashcard = ({ flashcard }) => {
  const [isFront, setIsFront] = useState(true);

  return (
    <button
      onClick={() => setIsFront(!isFront)}
      className={classNames(
        isFront ? "bg-white text-gray-900" : "bg-gray-900 text-white flipped",
        "group rounded-lg h-96 shadow-lg hover:shadow-2xl focus:shadow-2xl transition-all duration-700 flip"
      )}
    >
      <article className="flip-content">
        {/* FRONT */}
        {isFront && (
          <section className="flip-front">
            <h3 className="text-xl font-bold">{flashcard.concept}</h3>
          </section>
        )}

        {/* BACK */}
        {!isFront && (
          <section className="flip-back">
            <p className="mt-1 italic text-gray-50">{flashcard.description}</p>
          </section>
        )}
      </article>
    </button>
  );
};

export default Flashcard;
