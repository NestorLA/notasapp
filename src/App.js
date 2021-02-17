import React from "react";
import "./App.css";

// components
import Note from "./components/Note";

// Toastify
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App() {



  return (
    <div className="container p-4">
      <div className="row">
        <Note />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
