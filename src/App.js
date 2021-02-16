import React from "react";
import "./App.css";

// components
import Note from "./components/Note";

function App() {



  return (
    <div className="container p-4">
      <div className="row">
        <Note />
      </div>
    </div>
  );
}

export default App;
