import React, {useState} from "react";
import "./App.css";

// router
import { BrowserRouter as Router} from "react-router-dom";

// components
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import Spinner from './components/Spinner'


import "react-toastify/dist/ReactToastify.css";

function App() {

const [loading, setLoading] = useState(true)

  return (
    <Router>
      <Navbar />
      <Inicio />
    </Router>
  );
}

export default App;
