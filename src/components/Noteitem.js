import React from "react";

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{note.tag}</h6>
          <h6 className="card-text">{note.description}</h6>
          <i className="fa-regular fa-pen-to-square"></i>
          <i className="fa-regular fa-trash-can mx-3"></i>
        </div>
      </div>
    </div>
  );
};
//video61
export default Noteitem;
