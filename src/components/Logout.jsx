import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Button from "./Button";

const Logout = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return <Button onClick={handleLogout} text={"Logout"} />;
};
export default Logout;
