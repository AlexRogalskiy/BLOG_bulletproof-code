import { useState } from "react";
import { classNames } from "../../utils/css.helpers";

const Flashcard = ({ flashcard }) => {
  const { concept, description, acronym, category } = flashcard;

  const bubbleColors = {
    "Computer Science": "bg-red-100",
    "Front-End": "bg-green-100",
    "Back-End": "bg-gray-100",
    "General Programming": "bg-blue-100",
    Design: "bg-purple-100",
    Marketing: "bg-orange-100",
    Meta: "bg-pink-100",
  };

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
          <section className="flip-front flex-col">
            <h3 className="text-xl font-bold">{concept}</h3>
            {acronym && (
              <h4 className="text-gray-600 italic font-medium">({acronym})</h4>
            )}
            <div
              className={classNames(
                bubbleColors[category] || "bg-gray-100",
                `absolute top-0 left-0 py-1 px-4 m-3 rounded-full text-xs font-light`
              )}
            >
              {category}
            </div>
          </section>
        )}

        {/* BACK */}
        {!isFront && (
          <section className="flip-back">
            <p className="mt-1 italic text-gray-50">{description}</p>
          </section>
        )}
      </article>
    </button>
  );
};

export default Flashcard;
