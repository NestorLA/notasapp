import React, { useState } from "react";

const NoteForm = (props) => {
  const initialStateValues = {
    title: "",
    note: "",
  };

  const [values, setValues] = useState(initialStateValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addOrEditNote(values);
    setValues({ ...initialStateValues });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

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
      <button className="btn btn-primary btn-block">Guardar</button>
    </form>
  );
};

export default NoteForm;
