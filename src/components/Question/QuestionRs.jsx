import React, { useState } from "react";
import { secendUserProfile } from "../config";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import LikeActionBox from "./LikeActionBox";

const QuestionRs = () => {
  const [likeStats, setLikeStats] = useState(false);
  const [likeNumber, setLikeNumber] = useState(42);
  const codeString = `import React from 'react'
  
  const Changecar = () => {
    return (
      <div>
        <h1>bmw or benz ?</h1>
      </div>
    )
  }
  
  export default Changecar`;
  const handleLike = () => {
    if (likeStats == false) {
      // setLikeNumber((prev) => prev - 1);
      return (
        <svg
          className="w-6 h-6 text-red-500 dark:text-red-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 21 19"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"
          />
        </svg>
      );
    } else if (likeStats == true) {
      // setLikeNumber((prev) => prev + 1);
      return (
        <svg
          className="w-6 h-6 text-red-500 dark:text-red-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
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
    <section className="w-[90%] bg-black border border-white rounded-tl-3xl p-4 my-6">
      <div className="flex gap-4 items-center">
        <img
          src={secendUserProfile}
          alt=" user profile icon"
          width={80}
          height={80}
          className="rounded-full border border-red-400 p-1"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">نیما روشن</h1>
          <div className="flex items-center gap-4">
            <span
              className="flex gap-1 cursor-pointer"
              onClick={handleLikeNumber}
            >
              {handleLike()}
              {likeNumber}
            </span>
            <LikeActionBox />
          </div>
        </div>
      </div>
      <div>
        <p className="text-justify my-4">
          {" "}
          دوست عزیز شما چند تا مشکل نگارشی داری فقط که اونارو مینویسم برات و
          ادیت بزن و اوکی میشن و باید به این توجه کنی که حرف اول اسم کامپوننت
          باید بزرگ باشه
          <div style={{ direction: "ltr" }} className="my-5">
            <SyntaxHighlighter language="javascript" style={atomOneDark}>
              {codeString}
            </SyntaxHighlighter>
          </div>
        </p>
      </div>
    </section>
  );
};

export default QuestionRs;
