import React from "react";
import { queraImage, sscImage, cafebazaarImage } from "../config";
import "./Stats.css";
const Stats = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-8">
          حامیانی که به ما <span className="text-pinkColor">کمک</span> کردند
        </h1>
        <div className="flex flex-col justify-center items-center gap-6 xl:flex-row">
          <img width={120} src={sscImage} alt="ssc Logo" />
          <img width={170} src={queraImage} alt="quera Log" />
          <img width={170} src={cafebazaarImage} alt="cafebazaar Logo " />
        </div>
      </section>
    </>
  );
};

export default Stats;
