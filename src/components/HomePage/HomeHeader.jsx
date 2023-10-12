import React from "react";
import { HomeNav } from "../config";
import "./HomeHeader.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Shape from "./Shape";

const HomeHeader = () => {
  return (
    <header className="ghop h-[100vh] ">
      <HomeNav status={true} />
      <div className="flex justify-center">
        <div className=" h-full flex flex-col justify-start items-center">
          <div className="xl:w-[100%] h-72">
            <Shape /> 
          </div>
          <div className="flex flex-col gap-4 items-center bg-black p-2 rounded-md w-[80%]">
            <motion.h1
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="font-bold text-2xl"
            >
              با خیال راحت <span className="text-pinkColor">سوالتو</span> بپرس
            </motion.h1>
            <motion.h2
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="font-bold text-2xl"
            >
              بچه ها سریع <span className="text-pinkColor">جوابتو</span> میدن
            </motion.h2>
            <motion.p
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-center"
            >
              سوالیتو اولین وبسایت پرسیدن هر نوع سوالی در زمینه تکنولوژی
            </motion.p>
          </div>
          <Link className="mt-8 text-white w-32 text-center rounded-[40px] font-bold p-2 bg-pinkColor">
            شروع کن
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
