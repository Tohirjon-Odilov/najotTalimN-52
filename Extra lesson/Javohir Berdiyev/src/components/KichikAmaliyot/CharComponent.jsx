import React from "react";

function CharComponent({ value, ...props }) {
  let style = "p-3 bg-info m-2";
  return (
    <div onClick={props.clicked} className={style}>
      {value}
    </div>
  );
}

export default CharComponent;
