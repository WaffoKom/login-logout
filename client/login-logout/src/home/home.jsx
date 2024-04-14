import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
axios.defaults.withCredentials = true;

const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    axios
      .get("http ://localhost:3000/auth/logout")
      .then((response) => {
        if (response.data.status) {
          navigate("/home");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      Home
      <button>
        <Link to="/dashboard">Dashboard</Link>
      </button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
export default Home;
