import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";

export const Notes = (props) => {
  const context = useContext(noteContext);
  const { notes, addNote } = context;
  return (
    <div className="row my-3">
      <h3>All Notes</h3>
      {notes.map((note) => {
        return <Noteitem key={note._id} note={note} />;
      })}
    </div>
  );
};
