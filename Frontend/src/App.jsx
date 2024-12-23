// import React from "react";
import Left from "./Home/Left/Left";
import Right from "./Home/Right/Right";
import Logout from "./Home/Left1/Logout";
import Signup from "./Components/Signup";
import { useAuth } from "./context/AuthProvider";
import Login from "./Components/Login";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log("getting from app.jsx" + authUser);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <div className="flex h-screen">
                <Logout />
                <Left />
                <Right />
              </div>
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/login" /> : <Signup />}
        />
      </Routes>
    </>
    // <Signup />

    // <Login/>
  );
}

export default App;
