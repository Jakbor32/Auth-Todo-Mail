import Login from "./components/Login";
import SignUp from "./components/SignUp";

import CallbackPage from "./pages/CallbackPage";
import { useAuth0 } from "@auth0/auth0-react";
import ContactForm from "./components/ContactForm";
import { Route, Routes } from "react-router-dom";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="flex flex-col justify-center h-screen items-center gap-3">
                <Login />
                <SignUp />
              </div>
            </>
          }
        />
        {isAuthenticated && (
          <>
            <Route path="/contactform" element={<ContactForm />} />
            <Route path="*" element={<CallbackPage />} />
          </>
        )}
        {!isAuthenticated && (
          <>
            <Route path="*" element={<CallbackPage />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
