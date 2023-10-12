import React from "react";
import HashLoader from "react-spinners/HashLoader";
const Loader = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <HashLoader
        color={"#8130f2"}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
