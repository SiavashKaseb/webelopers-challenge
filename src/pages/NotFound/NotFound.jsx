import React from "react";
import { HomeNav } from "../../components/config";
import "../main.css";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <>
      <HomeNav />
      <section className="dotBack h-[100vh] flex items-center justify-center">
        <div className="bg-black w-[30%] h-[30%] p-3 flex justify-around items-center flex-col">
          <h1 className="text-2xl">صفحه مورد نظر پیدا نشد</h1>
          <h2 className="text-pinkColor text-xl">404</h2>
          <Link
            to={"/"}
            className="text-white bg-pinkColor p-2 text-lg rounded-lg"
          >
            بازگشت به خانه
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
