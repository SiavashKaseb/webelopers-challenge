import React, { useState } from "react";
import "../../main.css";
import { HomeNav, PagesLinkHelper } from "../../../components/config";
import { useFormik } from "formik";
import { signUpValidate } from "../../../schema/indexSchema";
import { useMutation } from "react-query";
import { signUpHandler, signUpVerifyCodeHandler } from "../../../services/api";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const SignUp = () => {
  const [otp, setOtp] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const { isLoading, mutate } = useMutation({
    mutationKey: ["sign-up-req"],
    mutationFn: async (data) => {
      const { username, email, password } = data;
      await signUpHandler(username, email, password)
        .then((res) => {
          console.log(res);
          if (res.status == 201) setPageNum(2);
        })
        .catch((err) => console.log(err));
    },
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confrimPassword: "",
    },
    validationSchema: signUpValidate,
    onSubmit: async (data, actions) => {
      // await mutate(data);
      toast("کاربر عزیز در حال حاضر امکان ثبت نام وجود ندارد", {
        icon: "⚠️",
      });
      // actions.resetForm();
    },
  });

  const handlePaste = (event) => {
    const data = event.clipboardData.getData("text");
    // console.log("12");
    // console.log(data);
  };

  const handCodeSubmit = useMutation({
    mutationKey: ["send-verify-code"],
    mutationFn: async () => {
      await signUpVerifyCodeHandler(otp)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
  });

  const hanldeChangeOtp = (change) => {
    setOtp(change);
    console.log(otp.length);
    if (otp.length == 3) {
      handCodeSubmit.mutate();
    }
  };
  return (
    <>
      <HomeNav />
      {pageNum == 1 ? (
        <section className="backSec py-7 px-6 flex flex-col justify-start min-h-screen md:items-center ">
          <div className="bg-black pt-5 pb-7 flex flex-col items-center border border-pinkColor rounded-lg md:w-[50%]">
            <h1 className="text-2xl text-pinkColor mt-1">سوالیتو</h1>
            <h1 className="text-xl my-3">ثبت نام</h1>
            <p className="text-lg mb-2 border-b border-pinkColor">
              کاربر عزیز به سوالیتو خوش آمدید
            </p>
            <form
              onSubmit={formik.handleSubmit}
              className="w-[90%] flex flex-col justify-center items-center"
            >
              <div className="flex flex-col justify-center gap-4 w-full my-5">
                <div className="w-full">
                  <input
                    type="text"
                    name="username"
                    className="p-2 w-full rounded-md border bg-[#3B3B3B] border-black focus:outline-none focus:border-pinkColor"
                    placeholder="نام کاربری"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.username && formik.touched.username && (
                    <span className="text-xs text-red-400">
                      {formik.errors.username}
                    </span>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="email"
                    name="email"
                    className="p-2 w-full rounded-md border bg-[#3B3B3B] border-black focus:outline-none focus:border-pinkColor"
                    placeholder="ایمیل"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <span className="text-xs text-red-400">
                      {formik.errors.email}
                    </span>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="password"
                    name="password"
                    className="p-2 w-full rounded-md border bg-[#3B3B3B] border-black focus:outline-none focus:border-pinkColor"
                    placeholder="رمز عبور"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.password && formik.touched.password && (
                    <span className="text-xs text-red-400">
                      {formik.errors.password}
                    </span>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="password"
                    name="confrimPassword"
                    className="p-2 w-full rounded-md border bg-[#3B3B3B] border-black focus:outline-none focus:border-pinkColor"
                    placeholder="تکرار رمز عبور"
                    value={formik.values.confrimPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.confrimPassword &&
                    formik.touched.confrimPassword && (
                      <span className="text-xs text-red-400">
                        {formik.errors.confrimPassword}
                      </span>
                    )}
                </div>
              </div>
              <button
                type="submit"
                className={`bg-pinkColor p-2 w-[50%] rounded-md ${
                  isLoading ? "cursor-not-allowed opacity-60" : ""
                }`}
                // onClick={() => setPageNum(2)}
                disabled={isLoading}
              >
                ثبت نام
              </button>
              <PagesLinkHelper
                linkPathOne={"/forgot-password"}
                nameLinkOne={"فراموشی رمز عبور"}
                linkPathTwo={"/signin"}
                nameLinkTwo={"ورود به حساب کاربری"}
              />
            </form>
          </div>
          <Toaster /> 
        </section>
      ) : (
        <section className="backSec py-7 px-6 flex flex-col justify-start min-h-screen md:items-center ">
          <div className="bg-black pt-5 pb-7 flex flex-col gap-7 items-center border border-pinkColor rounded-lg md:w-[50%]">
            <h1 className="text-2xl text-center">
              لطفا کد فرستاده شده به ایمیل خود را وارد کنید
            </h1>
            <div style={{ direction: "ltr" }}>
              <OtpInput
                inputStyle={{
                  border: "1px solid #8130f2",
                  width: "70px",
                  height: "80px",
                  borderRadius: "10px",
                  outline: "none",
                }}
                value={otp}
                onChange={hanldeChangeOtp}
                numInputs={4}
                onPaste={handlePaste}
                shouldAutoFocus={true}
                renderSeparator={<span className="mr-2"> </span>}
                renderInput={(props) => <input {...props} />}
              />
            </div>
            <button className="w-[50%] text-center text-xl bg-pinkColor p-2 rounded-md">
              تایید کد
            </button>
            <p className="text-xs text-center text-red-400 p-3">
              ما فقط بخاطر راحت بودن خیال کاربرامون همه افراد رو اعتبارسنجی
              میکنیم :)
            </p>
            <div className="w-full flex gap-5 justify-center items-center">
              <Link
                to={"/signin"}
                className="text-red-400 transition-colors hover:text-pinkColor"
              >
                ورود
              </Link>
              <Link
                to={"/signup"}
                onClick={() => setPageNum(1)}
                className="text-red-400 transition-colors hover:text-pinkColor"
              >
                ثبت نام
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SignUp;
