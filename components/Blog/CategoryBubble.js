const CategoryBubble = ({ category }) => {
  return (
    <div
      className={`bg-${category.color}-200 rounded-3xl py-2 px-4 font-bold text-xs inline-block mt-4 mr-2`}
    >
      {category.name}
    </div>
  );
};

export default CategoryBubble;
