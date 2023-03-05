import React from "react";
import Profile from "../components/Profile";
import Navbar from "../components/Navbar";
const ProfilePage = () => {
  return (
    <>
      <div className="flex flex-col h-screen bg-gray-700">
        <Navbar />
        <div className="flex justify-center items-center pb-40 h-screen">
          <Profile />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
