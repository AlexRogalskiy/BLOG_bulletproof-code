import { useEffect } from "react";

const TwoColCTA = ({ src, setShowModal }) => {
  useEffect(() => {
    function keyListener(e) {
      if (e.keyCode === 27) {
        setShowModal(false);
      }
    }

    document.addEventListener("keydown", keyListener);

    return () => document.removeEventListener("keydown", keyListener);
  });

  return (
    <div
      className="z-30 fixed top-0 left-0 min-h-screen w-screen overflow-hidden"
      role="form"
      aria-modal="true"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-80" />
      {/* TSK: Make this tabable and accessible!!! */}
      <div
        onClick={() => setShowModal(false)}
        onKeyDown={(e) => e.key === "Enter" && setShowModal(false)}
        tabIndex={0}
        title="close modal"
        className="absolute top-0 right-4 z-50 text-gray-300 text-2xl p-4 cursor-pointer"
      >
        &times;
      </div>
      <iframe
        src={src}
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
      />
    </div>
  );
};

export default TwoColCTA;
