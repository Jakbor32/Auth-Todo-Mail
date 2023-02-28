import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <Login />
      <SignUp />
    </>
  );
}

export default App;
