import React from "react";
import SignUp from "../components/SignUp";
import Login from "../components/Login";

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center h-screen items-center gap-3 bg-gray-700">
        <Login />
        <SignUp />

        <p className="fixed bottom-5 text-white">Jakub Borowy 13811</p>
      </div>
    </>
  );
};

export default Home;
