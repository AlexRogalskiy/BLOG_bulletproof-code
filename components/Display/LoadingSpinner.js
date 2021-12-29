import { useEffect } from "react";

const LoadingSpinner = () => {
  let content = "";

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      content = `<>
		<div className="fixed top-0 left-0 w-full h-full bg-gray-900 opacity-70" />
		<div className="fixed top-1/2 left-1/2 z-50">
		  <div className="loading-ripple">
		    <div></div>
		    <div></div>
		  </div>
		</div>
	      </>`;
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  return content;
};

export default LoadingSpinner;
