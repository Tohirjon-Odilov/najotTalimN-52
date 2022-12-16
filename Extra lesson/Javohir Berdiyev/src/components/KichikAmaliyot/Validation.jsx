import React from "react";

function Validation({ valueLength }) {
  let string = "Text to short";
  let style = "alert alert-danger";
  if (valueLength > 5) {
    string = "Text long enough";
    style = "alert alert-info";
  }

  return <div className={style}>{string}</div>;
}

export default Validation;
