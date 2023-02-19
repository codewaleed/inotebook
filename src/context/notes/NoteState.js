import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const note = [
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
    <noteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};
export default NoteState;
