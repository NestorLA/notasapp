import React from "react";
import "./App.css";

// router
import { BrowserRouter as Router} from "react-router-dom";

// components
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Inicio />
    </Router>
  );
}

export default App;
