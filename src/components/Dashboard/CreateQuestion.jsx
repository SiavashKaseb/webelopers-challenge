import { useFormik } from "formik";
import React from "react";
import { useMutation } from "react-query";
import { createQuestionSchema } from "../../schema/indexSchema";
import toast, { Toaster } from 'react-hot-toast';

const CreateQuestion = () => {
  const { mutate } = useMutation({
    mutationKey: ["create-question-handler"],
    mutationFn: async (data) => {
      const { subject, body, code } = data;
    },
  });
  const formik = useFormik({
    initialValues: { subject: "", body: "", code: "" },
    validationSchema: createQuestionSchema,
    onSubmit: async (data, actions) => {
      await mutate(data);
      toast.success("ارسال شد")
      await actions.resetForm();
    },
  });
  return (
    <section className="w-[90%] xl:w-[50%] flex flex-col items-center bg-black border border-red-400 rounded-2xl p-4 my-5">
      <h1 className="text-xl font-bold text-center">ساخت سوال جدید</h1>
      <p className="text-center">
        اگه سوالی ذهنت رو مشغول کرده همین الان بپرس تا سریع به حوابش برسی
      </p>
      <form
        className="w-full flex flex-col items-center justify-center"
        onSubmit={formik.handleSubmit}
      >
        <div className="w-full">
          <textarea
            name="subject"
            id=""
            className="w-full bg-[#3b3b3b] my-3 p-1 focus:outline-none focus:outline-pinkColor"
            placeholder="موضوع سوال..."
            value={formik.values.subject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.errors.subject && formik.touched.subject && (
            <span className="text-xs text-red-400">
              {formik.errors.subject}
            </span>
          )}
        </div>
        <div className="w-full">
          <textarea
            name="body"
            id=""
            className="w-full h-80 bg-[#3b3b3b] my-3 p-1 focus:outline-none focus:outline-pinkColor"
            placeholder="توضیحاتت..."
            value={formik.values.body}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.errors.body && formik.touched.body && (
            <span className="text-xs text-red-400">{formik.errors.body}</span>
          )}
        </div>
        <div className="w-full">
          <textarea
            name="code"
            id=""
            className="w-full h-60 bg-[#3b3b3b] my-3 p-1 focus:outline-none focus:outline-pinkColor"
            placeholder="اگر قراره کد براش بنویسی اینجا بنویس کدت رو..."
            value={formik.values.code}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.errors.code && formik.touched.code && (
            <span className="text-xs text-red-400">{formik.errors.code}</span>
          )}
        </div>
        <button
          type="submit"
          className="bg-pinkColor w-[40%] rounded-lg p-1 text-lg font-bold"
        >
          ارسال
        </button>
      </form>
      <Toaster /> 
    </section>
  );
};

export default CreateQuestion;
