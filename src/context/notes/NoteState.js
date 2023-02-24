import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const noteInitial = [];
  const [notes, setNotes] = useState(noteInitial);

  //get all notes
  const getNotes = async (title, description, tag) => {
    //api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjMDBjZWZiYTc2YWZmYTBlYjM1NDUwIn0sImlhdCI6MTY3MzUzMDYwN30.o_Lpa65VgmiXwsjK9l755CoLf9EHYhLh540sUUXOOns",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  //Add a note
  const addNote = async (title, description, tag) => {
    //api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjMDBjZWZiYTc2YWZmYTBlYjM1NDUwIn0sImlhdCI6MTY3MzUzMDYwN30.o_Lpa65VgmiXwsjK9l755CoLf9EHYhLh540sUUXOOns",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    // note = {
    //   _id: "63e9c4de46713b62aee9243c7",
    //   user: "63c00cefba76affa0eb35450",
    //   title: title,
    //   description: description,
    //   tag: tag,
    //   __v: 0,
    // };
    setNotes(notes.concat(notes));
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
  const editNote = async (id, title, description, tag) => {
    //api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjMDBjZWZiYTc2YWZmYTBlYjM1NDUwIn0sImlhdCI6MTY3MzUzMDYwN30.o_Lpa65VgmiXwsjK9l755CoLf9EHYhLh540sUUXOOns",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    //logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

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
