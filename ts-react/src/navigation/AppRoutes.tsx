import { Route, Routes } from "react-router-dom";
import { SignUp } from "../pages/SignUp";
import { SignUpSuccess } from "../pages/SignUpSuccess";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/success" element={<SignUpSuccess />} />
    </Routes>
  );
};
