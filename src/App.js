import React from "react";
import "./App.css";

// router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Inicio from "./components/Inicio";
import Note from "./components/Note";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div className="container p-4">
        <div className="row">
          <Note />
        </div>
        <ToastContainer />
        <Route path="/login" component={Login}></Route>
      </div>
    </Router>
  );
}

export default App;
