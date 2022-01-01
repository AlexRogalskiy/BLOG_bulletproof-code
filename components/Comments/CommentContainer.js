import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import { useComments } from "../../hooks/useComment";
import { getPostReactionCount } from "../../utils/mood.helpers";
import { classNames } from "../../utils/css.helpers";

const CommentContainer = () => {
  const { text, setText, mood, setMood, moods, comments, onSubmit, onDelete } =
    useComments();

  const { thumbsyCount, excitedCount, lovedCount } =
    getPostReactionCount(comments);

  return (
    <section className="mt-32">
      <hr className="my-12" />
      <h2 className="text-2xl font-semibold mb-4">
        How did you like this article?
      </h2>

      <div className="flex space-x-6 mb-12">
        {comments?.length > 10 &&
          moods.map((mood) => (
            <div className="flex items-center">
              <div
                className={classNames(
                  mood.bgColor,
                  "w-6 h-6 rounded-full flex items-center justify-center"
                )}
              >
                <mood.icon
                  className={classNames(
                    mood.iconColor,
                    "flex-shrink-0 h-4 w-4"
                  )}
                  aria-hidden="true"
                />
              </div>
              <span className="ml-2 block font-medium truncate text-gray-600">
                {mood.name === "Thumbsy" && thumbsyCount}
                {mood.name === "Excited" && excitedCount}
                {mood.name === "Loved" && lovedCount}
              </span>
            </div>
          ))}
      </div>

      <CommentForm
        onSubmit={onSubmit}
        text={text}
        setText={setText}
        mood={mood}
        setMood={setMood}
        moods={moods}
      />
      <CommentList comments={comments} onDelete={onDelete} />
    </section>
  );
};

export default CommentContainer;
