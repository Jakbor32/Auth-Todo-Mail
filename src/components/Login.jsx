import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Button from "./Button";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/contactform",
      },
    });
  };

  return <Button onClick={handleLogin} text={"Login In"} />;
};
export default Login;
