import CallbackPage from "./pages/CallbackPage";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./pages/Home";
import TodoList from "./components/TodoList";
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
              <Home />
            </>
          }
        />
        {isAuthenticated && (
          <>
            <Route path="/todolist" element={<TodoList />} />
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
