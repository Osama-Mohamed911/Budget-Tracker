import React from "react";

const BackDrop = (props) => {
  return <div className="backdrop" onClick={props.onCancel}></div>;
};

export default BackDrop;
