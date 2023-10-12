import React from "react";
import "../main.css";
import { HomeNav } from "../../components/config";
import { useFormik } from "formik";
import { sendAboutUsRequset } from "../../schema/indexSchema";
import { useMutation } from "react-query";
import toast, { Toaster } from "react-hot-toast";

const ContactUs = () => {
  const { mutate } = useMutation({
    mutationKey: ["create-question-handler"],
    mutationFn: async (data) => {
      const { username, subject, body, email } = data;
    },
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      subject: "",
      body: "",
    },
    validationSchema: sendAboutUsRequset,
    onSubmit: async (data, actions) => {
      await mutate(data);
      toast(
        "کاربر عزیز در حال حاضر به دلیل مشکلات فنی امکان ارسال پیام وجود ندارد",
        {
          icon: "⚠️",
        }
      );
      // await actions.resetForm();
    },
  });
  return (
    <>
      <HomeNav status={true} />
      <section className="dotBack xl:h-[100vh] flex justify-center items-start ">
        <div className="bg-black mt-8 w-[90%] mb-20 xl:mb-0 xl:w-[60%] flex flex-col items-center">
          <h1 className="text-2xl font-bold">تماس با ما</h1>
          <p className="mt-3  mb-6 text-center">
            با تیم <span className="text-pinkColor">سوالیتو</span> در ارتباط
            باش؛ ما با افتحار آماده هر نوع انتقاد و پیشنهاد از سمت شما هستیم
          </p>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col items-center gap-3 w-[90%] "
          >
            <input
              type="text"
              name="username"
              className="w-full p-2 rounded-md border bg-[#3B3B3B] border-black focus:outline-none focus:border-pinkColor"
              placeholder="نام شما"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.username && formik.touched.username && (
              <span className="text-xs text-red-400">
                {formik.errors.username}
              </span>
            )}
            <input
              type="email"
              name="email"
              className="w-full p-2 rounded-md border bg-[#3B3B3B] border-black focus:outline-none focus:border-pinkColor"
              placeholder="ایمیل شما"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email && (
              <span className="text-xs text-red-400">
                {formik.errors.email}
              </span>
            )}
            <input
              type="text"
              name="subject"
              className="w-full p-2 rounded-md border bg-[#3B3B3B] border-black focus:outline-none focus:border-pinkColor"
              placeholder="موضوع"
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.subject && formik.touched.subject && (
              <span className="text-xs text-red-400">
                {formik.errors.subject}
              </span>
            )}
            <textarea
              name="body"
              id=""
              cols="30"
              rows="10"
              className="w-full rounded-md border bg-[#3B3B3B] border-black focus:outline-none focus:border-pinkColor"
              placeholder="توضیحات..."
              value={formik.values.body}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
            {formik.errors.body && formik.touched.body && (
              <span className="text-xs text-red-400">{formik.errors.body}</span>
            )}
            <button
              type="submit"
              className="bg-pinkColor p-2 w-[50%] rounded-md"
            >
              ارسال
            </button>
          </form>
          <p className="my-6 text-xs">ساخته شده با ❤️ توسط محمد مهدی کاسب </p>
        </div>
        <Toaster /> 
      </section>
    </>
  );
};

export default ContactUs;
