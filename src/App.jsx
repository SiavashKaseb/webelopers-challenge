import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  AboutUs,
  ContactUs,
  Dashboard,
  ForgotPassword,
  Home,
  NotFound,
  QuestionDetail,
  Questions,
  SignIn,
  SignUp,
} from "./config";

const App = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/accounts/dashboard" element={<Dashboard />} />
      <Route path="/accounts/profile/create-question" element={<SignUp />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/questions/:question" element={<QuestionDetail />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="*" element={<NotFound /> } />
      <Route index path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
