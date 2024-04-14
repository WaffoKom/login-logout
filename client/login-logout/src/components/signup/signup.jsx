import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/signup", {
        username,
        email,
        password,
      })
      .then((response) => {
        if (response.data.status) {
          navigate("/login");
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
        className=" flex flex-col h-96 w-80 bg-white  justify-center mx-auto rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-2xl font-semibold underline mb-4">
          Sign Up
        </h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your username"
          autoComplete="off"
          className="border-none text-gray-700 focus:outline-double p-2 block text-sm mx-8 mt-4 mb-0 pl-4 leading-tight"
        />
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
          className="border-none text-gray-700 focus:outline-double p-2 block text-sm  mx-8 mt-2 mb-4 pl-4 leading-tight"
        />
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-400 p-2 mx-10  my-4 rounded-md text-white "
        >
          Sign Up
        </button>
        <p className="text-center ">
          Have an account ?
          <Link to="/login" className="text-md underline text-red-600">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
