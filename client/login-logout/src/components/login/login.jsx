import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/auth/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.status) {
          navigate("/home");
        }
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="signup-up-container  flex  w-full h-screen items-center justify-center bg-gray-100">
      <form
        method="post"
        className=" flex flex-col h-96 w-80 bg-white justify-center mx-auto rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-2xl font-semibold underline mb-10">
          Login
        </h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          autoComplete="off"
          className="border-none text-gray-700 focus:outline-double p-2 block text-sm mx-8 mt-4 mb-0 pl-4 leading-tight"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your password"
          className="border-none text-gray-700 focus:outline-double p-2 block text-sm  mx-8 mt-4 mb-4 pl-4 leading-tight"
        />
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-400 p-2 mx-10  my-4 rounded-md text-white "
        >
          Login
        </button>

        <Link
          to="/forgot-password"
          className="text-center text-md underline text-red-800  pt-0 "
        >
          Forgot Password ?
        </Link>
        <p className="text-center m-0 p-0">
          Don't have an Accounr ?
          <Link to="/signup" className="text-md underline text-red-600">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
