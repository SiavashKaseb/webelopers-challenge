import React, { useEffect } from "react";
import {
  DialogBox,
  HomeNav,
  QuestionCard,
  SignInBox,
} from "../../components/config";
import "../main.css";
import { fakeQuestions } from "../../services/fakeData";
const Questions = () => {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("my_modal_3").showModal();
    }, 200);
  }, []);

  return (
    <>
      <HomeNav status={true} />
      <section className="dotBack">
        {/* dialog */}
        <DialogBox />
        <div className="w-full h-full flex justify-center">
          <div className="w-[95%] py-5 h-full flex flex-col xl:flex-row">
            <div className="flex justify-between">
              <div className="flex flex-col gap-16 xl:w-[60%]">
                {fakeQuestions.map((question) => (
                  <QuestionCard data={question} />
                ))}

                <div className="xl:hidden border-red-600 border bg-black rounded-3xl">
                  <SignInBox />
                </div>
              </div>
              <div className="w-[30%] p-2 hidden xl:inline xl:fixed left-10 border-red-600 border bg-black rounded-3xl">
                <SignInBox />
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Questions;
