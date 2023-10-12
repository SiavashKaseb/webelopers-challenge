import React from "react";
import "../../main.css";
import { HomeNav, PagesLinkHelper } from "../../../components/config";
import { useFormik } from "formik";
import { forgotPasswordSchema } from "../../../schema/indexSchema";
import { useMutation } from "react-query";

const ForgotPassword = () => {
  const { mutate } = useMutation({
    mutationKey: ["forgot-password-handler"],
    mutationFn: async (data) => {
      const { email } = data;
    },
  });

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: forgotPasswordSchema,
    onSubmit: async (data, actions) => {
      await mutate(data);
      await actions.resetForm();
    },
  });
  return (
    <>
      <HomeNav />
      <section className="backSec py-7 px-6 flex flex-col justify-start min-h-screen md:items-center ">
        <div className="bg-black pt-5 pb-7 flex flex-col items-center border border-pinkColor rounded-lg md:w-[50%]">
          <h1 className="text-2xl text-pinkColor mt-1">سوالیتو</h1>
          <h1 className="text-xl my-3">فراموشی رمز عبور</h1>
          <p className="text-lg text-center mb-2 border-b border-pinkColor">
            کاربر عزیز لطفا ایمیل خود را برای بازیابی رمز عبور خود وارد کنید
          </p>
          <form
            onSubmit={formik.handleSubmit}
            className="w-[90%] flex flex-col justify-center items-center"
          >
            <div className="flex flex-col justify-center gap-4 w-full my-5 z-20">
              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  className="p-2 w-full rounded-md border bg-[#3B3B3B] border-black focus:outline-none focus:border-pinkColor"
                  placeholder="ایمیل..."
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
            </div>

            <button
              type="submit"
              className="bg-pinkColor p-2 w-[50%] rounded-md"
            >
              تغییر رمز عبور
            </button>
            <PagesLinkHelper
              linkPathOne={"/signup"}
              nameLinkOne={"ساخت حساب کاربری"}
              linkPathTwo={"/signin"}
              nameLinkTwo={"ورود به حساب کاربری"}
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
