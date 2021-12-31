import { classNames } from "../../utils/css.helpers";

const bubbleColors = {
  new: "bg-red-100",
  eBook: "bg-green-100",
  hot: "bg-orange-100",
  series: "bg-blue-100",
};

const CategoryBubble = ({ category }) => {
  return (
    <div
      className={classNames(
        bubbleColors[category] || "bg-sky-100",
        `rounded-3xl py-2 px-4 font-bold text-xs inline-block mt-4 mr-2 text-gray-900`
      )}
    >
      {category}
    </div>
  );
};

export default CategoryBubble;
