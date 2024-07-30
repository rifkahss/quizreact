import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Quiz from "./components/Quiz";

const App = () => {
  const [username, setUsername] = useState(localStorage.getItem("username"));

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={username ? <Quiz /> : <Login onLogin={setUsername} />}
        />
      </Routes>{" "}
    </Router>
  );
};

export default App;
