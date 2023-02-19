import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";

export const Notes = (props) => {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <div className="container my-3">
      <h1>All Notes</h1>
      <div className="card">
        <div className="card-body">
          <p>
            {notes.map((note) => {
              return <Noteitem note={note} />;
            })}
          </p>
        </div>
      </div>
    </div>
  );
};
