import React from "react";
import { HomeNav, PagesLinkHelper } from "../../../components/config";
import "../../main.css";
import { useFormik } from "formik";
import { signInValidate } from "../../../schema/indexSchema";
import { useMutation } from "react-query";
import toast, { Toaster } from "react-hot-toast";

const SignIn = () => {
  const { mutate } = useMutation({
    mutationKey: ["sign-in-handler"],
    mutationFn: async (data) => {
      const { username, password } = data;
    },
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: signInValidate,
    onSubmit: async (data, actions) => {
      await mutate(data);
      toast("کاربر عزیز در حال حاضر امکان ورود به اکانت وجود ندارد", {
        icon : "⚠️"
      })
      // await actions.resetForm();
    },
  });
  return (
    <>
      <HomeNav />
      <section className="backSec py-7 px-6 flex flex-col justify-start min-h-screen md:items-center ">
        <div className="bg-black pt-5 pb-7 flex flex-col items-center border border-pinkColor rounded-lg md:w-[50%]">
          <h1 className="text-2xl text-pinkColor mt-1">سوالیتو</h1>
          <h1 className="text-xl my-3">ورود</h1>
          <p className="text-lg mb-2 border-b border-pinkColor">
            کاربر عزیز خوش آمدید
          </p>
          <form
            onSubmit={formik.handleSubmit}
            className="w-[90%] flex flex-col justify-center items-center"
          >
            <div className="flex flex-col justify-center gap-4 w-full my-5 z-20">
              <div className="w-full">
                <input
                  type="text"
                  name="username"
                  className="p-2 w-full rounded-md border bg-[#3B3B3B] border-black focus:outline-none focus:border-pinkColor"
                  placeholder="ایمیل یا نام کاربری..."
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
            </div>
            <button
              type="submit"
              className="bg-pinkColor p-2 w-[50%] rounded-md"
            >
              ورود
            </button>
            <PagesLinkHelper
              linkPathOne={"/forgot-password"}
              nameLinkOne={"فراموشی رمز عبور"}
              linkPathTwo={"/signup"}
              nameLinkTwo={"ساخت حساب کاربری"}
            />
          </form>
        </div>
        <Toaster />
      </section>
    </>
  );
};

export default SignIn;
