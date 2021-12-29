const CategoryBubble = ({ category }) => {
  return (
    <div
      className={`rounded-3xl py-2 px-4 font-bold text-xs inline-block mt-4 mr-2 bg-sky-200`}
    >
      {category.name}
    </div>
  );
};

export default CategoryBubble;
