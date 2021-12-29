const BigRedCTA = ({ cta, handleClick, type = "button" }) => {
  return (
    <button
      onClick={handleClick && handleClick}
      type={type}
      className="bg-red-700 rounded w-full py-4 px-4 lg:px-8 text-white font-bold text-xl lg:text-2xl uppercase hover:bg-red-800 focus:bg-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
    >
      {cta}
    </button>
  );
};

export default BigRedCTA;
