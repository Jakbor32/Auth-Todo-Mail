import React from "react";
import Button from "./Button";
import Logout from "./Logout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();
  const redirectPage = (page) => {
    navigate(`/${page}`);
  };
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <nav className="bg-transparent md:bg-slate-800">
      <div className="flex items-center justify-between py-3 px-4">
        <div></div>
        <div>
          <button
            className="md:hidden text-white focus:outline-none z-50 relative group"
            onClick={toggleMenu}
          >
            <div className="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-black ring-0 ring-gray-900 hover:ring-5 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
              <div
                className={`flex flex-col justify-between w-[25px] h-[25px] transform transition-all duration-300 ${
                  showMenu ? "-rotate-[45deg]" : ""
                } origin-center`}
              >
                <div
                  className={`bg-white h-[1px] w-1/2 rounded transform transition-all duration-300 ${
                    showMenu ? "-rotate-90 h-[1px] -translate-y-[2px]" : ""
                  }  origin-right delay-75 `}
                ></div>
                <div className="bg-white h-[1px] rounded"></div>
                <div
                  className={`bg-white h-[1px] w-1/2 rounded self-end transform transition-all duration-300 ${
                    showMenu ? "-rotate-90 h-[1px] translate-y-[2px]" : ""
                  } origin-left delay-75 `}
                ></div>
              </div>
            </div>
          </button>
        </div>
        <div className={`md:flex items-center hidden`}>
          <div className="flex flex-col sm:flex-row  items-center justify-center gap-2 sm:gap-4 py-3 sm:py-0">
            <Button
              onClick={() => redirectPage("contactform")}
              text="Contact Form"
              className="block sm:inline-block text-white hover:text-gray-200"
            />
            <Button
              onClick={() => redirectPage("todolist")}
              text="Todo list"
              className="block sm:inline-block text-white hover:text-gray-200"
            />
            <Button
              onClick={() => redirectPage("profile")}
              text="Profile"
              className="block sm:inline-block text-white hover:text-gray-200"
            />
            <Button
              onClick={() => redirectPage("callback")}
              text="Wrong url"
              className="text-white hover:text-gray-200 my-4"
            />
            <Logout />
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-60 z-2"></div>
      )}
      <div
        className={`fixed top-0 right-0 bottom-0 z-20 transform transition-transform duration-700 ease-out ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-screen p-20 h-full">
          <div className="flex flex-col items-center justify-center gap-8 h-full">
            <Button
              onClick={() => redirectPage("contactform")}
              text="Contact form"
              className="text-white hover:text-gray-200 my-4"
            />
            <Button
              onClick={() => redirectPage("todolist")}
              text="Todo list"
              className="text-white hover:text-gray-200 my-4"
            />
            <Button
              onClick={() => redirectPage("profile")}
              text="Profile"
              className="text-white hover:text-gray-200 my-4"
            />
            <Button
              onClick={() => redirectPage("callback")}
              text="Wrong url"
              className="text-white hover:text-gray-200 my-4"
            />
            <Logout />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
