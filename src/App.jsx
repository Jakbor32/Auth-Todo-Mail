import Home from "./pages/Home";
import CallbackPage from "./pages/CallbackPage";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import ContactFormPage from "./pages/ContactFormPage";
import TodoListPage from "./pages/TodolistPage";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        {isAuthenticated && (
          <>
            <Route path="/todolist" element={<TodoListPage />} />
            <Route path="/contactform" element={<ContactFormPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/callback" element={<CallbackPage />} />
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
