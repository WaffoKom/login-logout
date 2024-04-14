import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/signup/signup.jsx";
import Login from "./components/login/login.jsx";
import Home from "./home/home.jsx";
import ForgotPassword from "./forgotPassword/forgotpassword.jsx";
import ResetPassword from "./resetpassword/resetpassword.jsx";
import Dashboard from "./components/dashboard/dashboard.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route
            path="/reset-password/:token"
            element={<ResetPassword />}
          ></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
