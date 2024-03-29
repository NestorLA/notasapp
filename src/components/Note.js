import React, { useEffect, useState } from "react";
import NoteForm from "./NoteForm";
import { toast } from "react-toastify";

import { db } from "../firebase";

const Note = () => {
  const [notes, setNotes] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const addOrEditNote = async (noteObject) => {
    if (currentId === "") {
      await db.collection("notes").doc().set(noteObject);
      toast("Nota creada!", {
        type: "default",
        autoClose: 2500,
        position: "top-center",
      });
    } else {
      await db.collection("notes").doc(currentId).update(noteObject);
      toast("Nota actualizada!", {
        type: "success",
        autoClose: 2500,
        position: "top-center",
      });
      setCurrentId("");
    }
  };

  const deleteNote = async (id) => {
    if (window.confirm("¿Estás seguro de querer eliminar esta nota?")) {
      await db.collection("notes").doc(id).delete();
      toast("Nota eliminada!", {
        type: "error",
        autoClose: 2500,
        position: "top-center",
      });
    }
  };

  const getNotes = async () => {
    db.collection("notes").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setNotes(docs);
    });
  };

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="col-lg-4 p-2">
        <NoteForm {...{ addOrEditNote, currentId, notes }} />
      </div>

      {notes.length !== 0 ? (
        <div className="col-lg-8 p-2">
          {notes.map((note) => (
            <div className="card mb-1" key={note.id}>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5>{note.title}</h5>
                  <div>
                    <i
                      className="material-icons text-info mr-2 cursor-pointer"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Editar nota"
                      onClick={() => setCurrentId(note.id)}
                    >
                      create
                    </i>
                    <i
                      className="material-icons text-danger cursor-pointer"
                      data-toggle="tooltip" data-placement="top" title="Borrar nota"
                      onClick={() => deleteNote(note.id)}
                    >
                      close
                    </i>
                  </div>
                </div>

                <p>{note.note}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h4 className="font-weight-bold p-2 ">
          No hay notas. Puedes agregar una!
        </h4>
      )}
    </>
  );
};

export default Note;
