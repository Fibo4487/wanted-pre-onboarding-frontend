import React from "react";
import HomeLayout from "../components/home/HomeLayout";
import LoginForm from "../components/home/LoginForm";
import { ToastContainer } from "react-toastify";

const Home = () => {
  return (
    <HomeLayout>
      <LoginForm />
      <ToastContainer />
    </HomeLayout>
  );
};

export default Home;
