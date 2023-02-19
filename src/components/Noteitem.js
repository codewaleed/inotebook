import React from "react";

const Noteitem = (props) => {
  const { note } = props;
  return <div key="no">{note.title}</div>;
};
//video61
export default Noteitem;
