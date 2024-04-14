import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const { token } = useParams();
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/reset-password/" + token, {
        password,
      })
      .then((response) => {
        if (response.data.status) {
          console.log(response.data);
          navigate("/login");
        }
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="  flex  w-full h-screen items-center justify-center bg-gray-100">
      <form
        method="post"
        className=" flex flex-col h-96 w-80 bg-white justify-center mx-auto rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-2xl font-semibold underline mb-10">
          Reset Passoword
        </h2>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your new password"
          className="border-none text-gray-700 focus:outline-double p-2 block text-sm  mx-8 mt-4 mb-4 pl-4 leading-tight"
        />
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-400 p-2 mx-10  my-4 rounded-md text-white leading-5 font-semibold"
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
