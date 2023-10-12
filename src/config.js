import { lazy } from "react";

const Home = lazy(() => import("./pages/Home/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs"));

// Create Accouts Page
const SignIn = lazy(() => import("./pages/accounts/signIn/SignIn"));
const SignUp = lazy(() => import("./pages/accounts/signUp/SignUp"));
const ForgotPassword = lazy(() =>
  import("./pages/accounts/forgotPassword/ForgotPassword")
);
// Question Page
const Questions = lazy(() => import("./pages/Questions/Questions"));
const QuestionDetail = lazy(() => import("./pages/Question/Question"));

// Dashboard page
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));

// NotFound Page
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

export {
  Home,
  SignIn,
  SignUp,
  ForgotPassword,
  AboutUs,
  ContactUs,
  Questions,
  QuestionDetail,
  Dashboard,
  NotFound,
};
