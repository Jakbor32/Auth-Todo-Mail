import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Button from "./Button";
import Login from "./Login";
import Logout from "./Logout";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();

  const navigate = useNavigate();
  const redirectPage = (page) => {
    navigate(`/${page}`);
  };

  return (
    <div>
      {!isAuthenticated && (
        <>
          <SignUp />
          <Login />
        </>
      )}
      {isAuthenticated && (
        <>
          <div className="flex flex-col sm:flex-row  items-center justify-center gap-2 bg-slate-800 py-3">
            <Button
              onClick={() => redirectPage("contactform")}
              text="Contact Form"
            />
            <Button
              onClick={function () {
                redirectPage("todolist");
              }}
              text="Todo list"
            />
            <Logout />
          </div>
        </>
      )}
    </div>
  );
};
export default Navbar;
