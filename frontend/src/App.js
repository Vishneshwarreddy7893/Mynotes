import React, { useState } from "react";
import Homepage from "./components/Homepage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const [page, setPage] = useState("landing"); // landing | login | register | home
  const [user, setUser] = useState(null);

  if (page === "landing") {
    return (
      <LandingPage
        onLoginClick={() => setPage("login")}
        onRegisterClick={() => setPage("register")}
      />
    );
  }

  if (page === "login") {
    return (
      <LoginPage
        onLogin={(user) => {
          setUser(user);
          setPage("home");
        }}
        onBack={() => setPage("landing")}
      />
    );
  }

  if (page === "register") {
    return (
      <RegisterPage
        onRegister={() => setPage("login")}
        onBack={() => setPage("landing")}
      />
    );
  }

  if (page === "home" && user) {
    return (
      <div>
        <button
          className="bg-red-500 text-white px-4 py-2 m-2 rounded"
          onClick={() => {
            setUser(null);
            localStorage.removeItem("token");
            setPage("landing");
          }}
        >
          Logout
        </button>
        <Homepage />
      </div>
    );
  }

  return null;
}

export default App;
