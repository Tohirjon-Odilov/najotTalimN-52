import React from "react";

function Char(props) {
  let style = "p-3 bg-danger text-white m-1 d-inline";
  return (
    <div onClick={props.clicked} className={style}>
      {props.value}
    </div>
  );
}

export default Char;
