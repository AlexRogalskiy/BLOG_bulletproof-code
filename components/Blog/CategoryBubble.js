import { classNames } from "../../utils/css.helpers";

const CategoryBubble = ({ category }) => {
  return (
    <div
      className={classNames(
        category?.color ? `bg-${category.color}-200` : "bg-red-200",
        "rounded-3xl py-2 px-4 font-bold text-xs inline-block mt-4 mr-2"
      )}
    >
      {category.name}
    </div>
  );
};

export default CategoryBubble;
