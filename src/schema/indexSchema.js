import * as yup from "yup";

const passwordRules = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

export const signInValidate = yup.object().shape({
  username: yup
    .string()
    .min(3, "حداقل تعداد نام کاربری یا ایمیل 3 کاراکتر است")
    .required("نام کاربری یا ایمیل الزامی است"),
  // .max(50, "حداکثر تعداد نام کاربری 50 کاراکتر است"),
  password: yup
    .string()
    .min(8, "پسوورد باید حداقل 8 کاراکتر باشد")
    .required("پسوورد الزامی است"),
});

export const sendAboutUsRequset = yup.object().shape({
  username: yup
    .string()
    .min(3, "حداقل تعداد نام کاربری 3 کاراکتر است")
    .required("نام کاربری الزامی است"),
  email: yup
    .string()
    .email("لطفا ایمیل معتبر وارد کنید")
    .required("ایمیل الزامی است"),
  subject: yup
    .string()
    .min(3, "حداقل تعداد موضوع 3 کاراکتر است")
    .required("موضوع الزامی است"),
  body: yup
    .string()
    .min(3, "حداقل تعداد توضیحات 3 کاراکتر است")
    .required("توضیحات الزامی است"),
});

export const signUpValidate = yup.object().shape({
  username: yup
    .string()
    .min(3, "حداقل تعداد نام کاربری 3 کاراکتر است")
    .max(50, "حداکثر تعداد نام کاربری 50 کاراکتر است")
    .required("نام کاربری الزامی است"),
  email: yup
    .string()
    .email("لطفا ایمیل معتبر وارد کنید")
    .required("ایمیل الزامی است"),
  password: yup
    .string()
    .matches(passwordRules, {
      message: "پسوورد باید دارای حداقل 8 کاراکتر و یک حرف بزرگ و یک عدد باشد",
    })
    .min(8, "پسوورد باید حداقل 8 کاراکتر باشد")
    .required("پسوورد الزامی است"),
  confrimPassword: yup
    .string()
    .oneOf([yup.ref("password")], "پسوورد ها یکی نیستند")
    .required("تکرار پسوورد الزامی است"),
});

export const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email("لطفا ایمیل معتبر وارد کنید")
    .required("ایمیل الزامی است"),
});

export const createQuestionSchema = yup.object().shape({
  subject: yup
    .string()
    .min(3, "موضوع باید حداقل 3 کاراکتر باشد")
    .required("موضوع الزامی است"),
  // .max(50, "حداکثر تعداد نام کاربری 50 کاراکتر است"),
  body: yup
    .string()
    .min(8, "توضیحات باید حداقل 3 کاراکتر باشد")
    .required("توضیحات الزامی است"),

  code: yup.string().min(3, "کد باید حداقل 3 کاراکتر باشد"),
});
