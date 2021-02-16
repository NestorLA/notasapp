import React from "react";
import NoteForm from "./NoteForm";

import { db } from "../firebase";

const Note = () => {
  const addOrEditNote = async (noteObject) => {
    await db.collection("notes").doc().set(noteObject);
    
  };

  return (
    <>
      <NoteForm addOrEditNote={addOrEditNote} />
    </>
  );
};

export default Note;
