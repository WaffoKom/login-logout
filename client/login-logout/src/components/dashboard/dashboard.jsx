import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;
const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3001/auth/verify").then((response) => {
      if (response.data.status) {
        console.log(response.data);
      } else {
        navigate("/home");
      }
    });
  }, []);
  return (
    <>
      <p>hoo</p>
    </>
  );
};

export default Dashboard;
