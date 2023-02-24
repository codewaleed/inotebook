import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  let note = [
    {
      _id: "63e9c4de46713b62aee9243c7",
      user: "63c00cefba76affa0eb35450",
      title: "myTitle",
      description: "dani wani shani",
      tag: "general",
      __v: 0,
    },
    {
      _id: "63eb90647e53925545655e298f5",
      user: "63c00cefba76affa0eb35450",
      title: "23myTitle",
      description: "Done dani wani shani",
      tag: "general",
      __v: 0,
    },
    {
      _id: "63eb90647e5392435655e298f5",
      user: "63c00cefba76affa0eb35450",
      title: "43myTitle",
      description: "Done dani wani shani",
      tag: "general",
      __v: 0,
    },
    {
      _id: "63eb90647e539235655e298f5",
      user: "63c00cefba76affa0eb35450",
      title: "13myTitle",
      description: "Done dani wani shani",
      tag: "general",
      __v: 0,
    },
    {
      _id: "63eb90647e539225655e298f5",
      user: "63c00cefba76affa0eb35450",
      title: "23myTitle",
      description: "Done dani wani shani",
      tag: "general",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(note);

  //Add a note
  const addNote = (title, description, tag) => {
    note = {
      _id: "63e9c4de46713b62aee9243c7",
      user: "63c00cefba76affa0eb35450",
      title: title,
      description: description,
      tag: tag,
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Delete a note
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
    console.log("note has been deleted" + id);
  };

  //Edit a note
  const editNote = () => {};

  // const s1 = {
  //   name: "harry",
  //   class: "5b",
  // };
  // const [state, setState] = useState(s1);
  // const update = () => {
  //   setTimeout(() => {
  //     setState({
  //       name: "Waleed",
  //       class: "6c",
  //     });
  //   }, 1000);
  // };

  return (
    <noteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};
export default NoteState;
