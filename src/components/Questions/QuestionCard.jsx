import React from "react";
import { Link } from "react-router-dom";

const QuestionCard = ({ data }) => {
  const { title, body, author, stats, visitsNumber, comments } = data;

  return (
    <Link
      to={"/questions/asd"}
      className={` w-full bg-black border ${
        stats == "yl"
          ? "border-yellow-400"
          : stats == "pi"
          ? "border-pinkColor"
          : stats == "gr"
          ? "border-green-400"
          : ""
      } py-2 px-2 rounded-l-3xl`}
    >
      <div className="flex flex-col gap-2">
        <h1 className="font-bold mt-2">{title}</h1>
        <p className="beya text-sm font-light">{body}</p>
        <div className="flex justify-center gap-5 my-4">
          <span className="flex items-center gap-1 ml-3 text-teal-300">
            <svg
              className="w-[22px] h-[22px] text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.109 17H1v-2a4 4 0 0 1 4-4h.87M10 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm7.95 2.55a2 2 0 0 1 0 2.829l-6.364 6.364-3.536.707.707-3.536 6.364-6.364a2 2 0 0 1 2.829 0Z"
              />
            </svg>
            {author}
          </span>
          <span>
            تعداد بازدید: <span className="text-teal-300">{visitsNumber}</span>
          </span>
          <span>
            کامنت ها: <span className="text-teal-300">{comments}</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default QuestionCard;
