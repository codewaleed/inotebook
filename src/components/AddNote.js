import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

function AddNote() {
  const context = useContext(noteContext);
  const { addNote } = context;
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  };

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "default",
  });
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form>
        <div className="form-group container">
          <label htmlFor="exampleInputEmail1">Title</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter Title"
            onChange={onChange}
            name="title"
            id="title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Descriptiom</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Description"
            onChange={onChange}
            name="description"
            id="description"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary my-2"
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddNote;
