import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Button from "./Button";

const SignUp = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",
      },
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };

  return <Button onClick={handleSignUp} text={"Sign Up"} />;
};
export default SignUp;
