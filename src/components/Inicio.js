import React from "react";
import Note from './Note'

// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Inicio = () => {
  return (
    <div className="container p-4">
      <div className="row">
        <Note />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Inicio;
