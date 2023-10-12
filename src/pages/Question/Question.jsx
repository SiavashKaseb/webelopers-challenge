import React from "react";
import { HomeNav, QuestionCr, QuestionRs } from "../../components/config";
import toast, { Toaster } from "react-hot-toast";
import "../main.css";

const Question = () => {
  return (
    <>
      <HomeNav status={true} />
      <section className="dotBack flex flex-col items-center justify-center w-full">
        <QuestionCr />
        <section className="w-[90%] xl:w-[60%] flex flex-col items-center bg-black border border-red-400 rounded-2xl p-4 my-5">
          <h1 className="text-xl font-bold text-center">
            اگه جوابشو میدونی همین الان بنویس
          </h1>
          <textarea
            name=""
            id=""
            className="w-full h-40 bg-[#3b3b3b] my-4"
            placeholder="جواب به سوال..."
          ></textarea>
          <textarea
            name=""
            id=""
            className="w-full bg-[#3b3b3b] my-4 h-52"
            placeholder="اگر قراره کد براش بنویسی اینجا بنویس کدت رو..."
          ></textarea>
          <button
            onClick={() =>
              toast("کاربر عزیز در حال حاضر امکان ارسال پاسخ سوال وجود ندارد", {
                icon: "⚠️",
              })
            }
            className="bg-pinkColor w-[40%] rounded-lg p-1 text-lg font-bold"
          >
            ارسال
          </button>
        </section>

        <QuestionRs />
        <Toaster />
      </section>
    </>
  );
};

export default Question;
