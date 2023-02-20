import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  let host = "http://localhost:5000";
  let note = [];
  const [notes, setNotes] = useState(note);

  //Get all notes
  const getNotes = async () => {
    const url = `${host}/api/notes/fetchallnotes`;

    const response = await fetch(url, {
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
  const addNote = async (title, description, tag, id) => {
    async function postData(
      url = `${host}/api/notes/addnote/${id}`,
      data = {}
    ) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjMDBjZWZiYTc2YWZmYTBlYjM1NDUwIn0sImlhdCI6MTY3MzUzMDYwN30.o_Lpa65VgmiXwsjK9l755CoLf9EHYhLh540sUUXOOns",
        },

        body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
      });
      const json = response.json(); // parses JSON response into native JavaScript objects
    }

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
  const editNote = (id, title, description, tag) => {
    //api call
    async function postData(
      url = `${host}/api/notes/updatenote/${id}`,
      data = {}
    ) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjMDBjZWZiYTc2YWZmYTBlYjM1NDUwIn0sImlhdCI6MTY3MzUzMDYwN30.o_Lpa65VgmiXwsjK9l755CoLf9EHYhLh540sUUXOOns",
        },

        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      const json = response.json(); // parses JSON response into native JavaScript objects
    }

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
