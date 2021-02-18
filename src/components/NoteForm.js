import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { toast } from "react-toastify";

const NoteForm = (props) => {
  const initialStateValues = {
    title: "",
    note: "",
  };

  const [values, setValues] = useState(initialStateValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.note === "") {
      toast("Nota invalida! Agrega texto por favor!", {
        type: "warning",
        autoClose: 2000,
        position: "top-center",
      });
    } else {
      props.addOrEditNote(values);
      setValues({ ...initialStateValues });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const getNoteById = async (id) => {
    const doc = await db.collection("notes").doc(id).get();
    setValues({ ...doc.data() });
  };

  useEffect(() => {
    if (props.currentId === "") {
      setValues({ ...initialStateValues });
    } else {
      getNoteById(props.currentId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currentId]);

  return (
    <form className="card card-body" onSubmit={handleSubmit}>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">insert_comment</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Titulo"
          name="title"
          onChange={handleInputChange}
          value={values.title}
        />
      </div>
      <div className="form-group">
        <textarea
          name="note"
          rows="10"
          className="form-control"
          placeholder="Escribe tu nota!"
          onChange={handleInputChange}
          value={values.note}
        ></textarea>
      </div>
      <button className="btn btn-primary btn-block">
        {props.currentId === "" ? "Guardar" : "Actualizar"}
      </button>
    </form>
  );
};

export default NoteForm;
