import React from "react";
import { CreateQuestion, HomeNav, userProfileImage } from "../../components/config";
import "../main.css";

const Dashboard = () => {
  return (
    <>
      <HomeNav status={true} isAuth={true} />
      <section className="dotBack flex flex-col items-center justify-center w-full xl:flex-row xl:justify-around xl:items-start">
        <section className="w-[90%] bg-black border border-cyan-400 rounded-2xl p-4 my-6 xl:w-[40%]">
          <div className="flex flex-col gap-4 items-center">
            <img
              src={userProfileImage}
              alt=" user profile icon"
              width={80}
              height={80}
              className="rounded-full border border-yellow-300"
            />
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-xl font-bold">سینا زمانی</h1>
              <p className="text-lg">
                تاریخ پیوستن به سوالیتو :{" "}
                <span className="text-blue-400">1401/07/21</span>
              </p>
              <p className="text-lg">
                تعداد بازدید کنندگان :{" "}
                <span className="text-blue-400">742</span>
              </p>
              <p className="text-lg">
                آخرین سوال پرسیده شده :{" "}
                <span className="text-blue-400">دو روز پیش</span>
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center my-4">
            <h1 className="text-lg font-bold border-b border-cyan-400">
              نشان های دریافت شده
            </h1>
            <div className="flex flex-col gap-10 mt-6">
              <div className="flex flex-col items-center gap-2">
                <svg
                  className="w-[70px] h-16 text-orange-300 dark:text-orange-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 22 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 16.5A2.493 2.493 0 0 1 6.51 18H6.5a2.468 2.468 0 0 1-2.4-3.154 2.98 2.98 0 0 1-.85-5.274 2.468 2.468 0 0 1 .921-3.182 2.477 2.477 0 0 1 1.875-3.344 2.5 2.5 0 0 1 3.41-1.856A2.5 2.5 0 0 1 11 3.5m0 13v-13m0 13a2.492 2.492 0 0 0 4.49 1.5h.01a2.467 2.467 0 0 0 2.403-3.154 2.98 2.98 0 0 0 .847-5.274 2.468 2.468 0 0 0-.921-3.182 2.479 2.479 0 0 0-1.875-3.344A2.5 2.5 0 0 0 13.5 1 2.5 2.5 0 0 0 11 3.5m-8 5a2.5 2.5 0 0 1 3.48-2.3m-.28 8.551a3 3 0 0 1-2.953-5.185M19 8.5a2.5 2.5 0 0 0-3.481-2.3m.28 8.551a3 3 0 0 0 2.954-5.185"
                  />
                </svg>
                <span className="text-lg text-orange-300 font-bold">
                  مغز بزرگ
                </span>
                <span className="text-md">کسی که درباره خیلی چیزا میدونه</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <svg
                  className="w-[70px] h-16 text-red-300 dark:text-red-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 16c-3.047 0-5.5-2.735-5.5-5a.5.5 0 0 1 1 0 11.7 11.7 0 0 0 4.5.583c2.548 0 4.221-.371 4.5-.65a.515.515 0 0 1 .026-.106.457.457 0 0 1 .481-.372.531.531 0 0 1 .493.545c0 2.265-2.453 5-5.5 5Z" />
                </svg>
                <span className="text-lg text-red-300 font-bold">
                  آدم خوش اخلاق
                </span>
                <span className="text-md">
                  از تعریف بقیه افراد خیلی اخلاق خوبی داره
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <svg
                  className="w-[70px] h-16 text-emerald-400 dark:text-emerald-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 19 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 3 6 2V1m5 2 1-1V1M9 7v11M9 7a5 5 0 0 1 5 5M9 7a5 5 0 0 0-5 5m5-5a4.959 4.959 0 0 1 2.973 1H12V6a3 3 0 0 0-6 0v2h.027A4.959 4.959 0 0 1 9 7Zm-5 5H1m3 0v2a5 5 0 0 0 10 0v-2m3 0h-3m-9.975 4H2a1 1 0 0 0-1 1v2m13-3h2.025a1 1 0 0 1 1 1v2M13 9h2.025a1 1 0 0 0 1-1V6m-11 3H3a1 1 0 0 1-1-1V6"
                  />
                </svg>
                <span className="text-lg text-emerald-400 font-bold">
                  باگ هانتر{" "}
                </span>
                <span className="text-md text-center">
                  کسی که باگ های زیادی رو پیدا کرده و حلشون کرده
                </span>
              </div>
            </div>
          </div>
        </section>

        <CreateQuestion />
      </section>
    </>
  );
};

export default Dashboard;
