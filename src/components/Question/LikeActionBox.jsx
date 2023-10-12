import React, { useState } from "react";

const LikeActionBox = () => {
  const [likeStats, setLikeStats] = useState(false);
  const [likeNumber, setLikeNumber] = useState(117);
  const handleLike = () => {
    if (likeStats == false) {
      // setLikeNumber((prev) => prev - 1);
      return (
        <svg
          className="w-6 h-6 text-white dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.008 8.714c1-.097 1.96-.45 2.792-1.028a25.112 25.112 0 0 0 4.454-5.72 1.8 1.8 0 0 1 .654-.706 1.742 1.742 0 0 1 1.65-.098 1.82 1.82 0 0 1 .97 1.128c.075.248.097.51.065.767l-1.562 4.629M4.008 8.714H1v9.257c0 .273.106.535.294.728a.99.99 0 0 0 .709.301h1.002a.99.99 0 0 0 .71-.301c.187-.193.293-.455.293-.728V8.714Zm8.02-1.028h4.968c.322 0 .64.08.925.232.286.153.531.374.716.645a2.108 2.108 0 0 1 .242 1.883l-2.36 7.2c-.288.813-.48 1.354-1.884 1.354-2.59 0-5.39-1.06-7.504-1.66"
          />
        </svg>
      );
    } else if (likeStats == true) {
      // setLikeNumber((prev) => prev + 1);
      return (
        <svg
          className="w-6 h-6 text-white dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 18"
        >
          <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
        </svg>
      );
    }
  };

  const handleLikeNumber = () => {
    setLikeStats((prev) => !prev);
    if (likeStats == false) setLikeNumber((prev) => prev + 1);
    else if (likeStats == true) setLikeNumber((prev) => prev - 1);
  };
  return (
    <span
      className="flex items-center justify-center text-center gap-1 cursor-pointer"
      onClick={handleLikeNumber}
    >
      {handleLike()}
      <span className="pt-2">{likeNumber}</span>
    </span>
  );
};

export default LikeActionBox;
