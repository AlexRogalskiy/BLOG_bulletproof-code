const BigRedCTA = ({ cta, handleClick, type = "button" }) => {
  return (
    <button
      onClick={handleClick && handleClick}
      type={type}
      className="bg-red-700 rounded w-full py-4 px-4 lg:px-6 text-white font-bold text-lg xl:text-xl uppercase hover:bg-red-800 focus:bg-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
    >
      {cta}
    </button>
  );
};

export default BigRedCTA;
