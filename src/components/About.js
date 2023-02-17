import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";

export const About = () => {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
  }, [a]);

  return (
    <div>
      <h1>
        Hello my name is {a.state.name} and i raed in class {a.state.class}
      </h1>
    </div>
  );
};
//video 58 completed-context hook
