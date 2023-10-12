import React from "react";
import { userProfileImage } from "../config";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const QuestionCr = () => {
  const codeString = `import React from 'react'
  
  const changecar = () => {
    return (
      <div>
        <h1>bmw or benz ?</h1>
      </div>
    )
  }
  
  export default changeecar`;

  return (
    <section className="w-[90%] bg-black border border-green-400 rounded-2xl p-4 my-6">
      <div className="flex gap-4 items-center">
        <img
          src={userProfileImage}
          alt=" user profile icon"
          width={80}
          height={80}
          className="rounded-full border border-green-400"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">علی بابکیان</h1>
          <p className="text-sm">
            تاریخ ایجاد سوال : <span className="text-blue-400">1402/02/02</span>
          </p>
          <p className="text-sm">
            تعداد بازدید کنندگان : <span className="text-blue-400">100</span>
          </p>
          <p className="text-sm">
            آخرین تغییر : <span className="text-blue-400">چهار روز پیش</span>
          </p>
        </div>
      </div>
      <div>
        <h1 className="mt-5 font-medium text-center text-xl border-b-pinkColor border-b ">
          من توی ریکت جی اس یه مشکلی دارم
        </h1>
        <p className="text-justify my-4">
          {" "}
          دوستان من توی کد ریکت خودم یه مشکلی دارم که هرجوری فکر میکنم نمیدونم
          چجوری باید حلش کنم و باعث باگ توی برنامه من شده <br /> خوشحال میشم که
          راهنماییم کنید قبلا درست کار میکرد ولی الان نه دیگه کار نمیکنه
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

export default QuestionCr;
