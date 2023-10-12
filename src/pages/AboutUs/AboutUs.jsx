import React from "react";
import { HomeNav } from "../../components/config";
import Stats from "../../components/Stats/Stats";
import "../main.css";

const AboutUs = () => {
  return (
    <>
      <HomeNav status={true} />
      <section className="dotBack h-[100vh] flex justify-center items-start ">
        <div className="bg-black mt-8 w-[90%] flex flex-col items-center">
          <h1 className="text-2xl font-bold">درباره ما</h1>
          <p className="mt-3  mb-6 text-center">
            ما تیمی کوچیک اما پر از ایده های بزرگ هستیم که تصمیم گرفتیم به کمک
            هم <span className="text-pinkColor">سوالیتو</span> رو بسازیم و کمکی
            بزرگی به همه افراد در حوضه تکنولوژی کرده باشیم
          </p>
          <Stats />
          <p className="my-6 text-xs">ساخته شده با ❤️ توسط محمد مهدی کاسب </p>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
