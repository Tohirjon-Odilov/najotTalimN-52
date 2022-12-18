import React, { useContext } from "react";
import { test } from "../../App";

function Paging({ curr, total, setCurr }) {
  const str = useContext(test);

  let btnText = curr === total ? "Prev" : "Next";
  const handleClick = () => {
    let newspages;
    if (curr === total) {
      newspages = curr - 1;
    } else {
      newspages = curr + 1;
    }
    setCurr(newspages);
    console.log(str);
  };
  return (
    <div>
      <button onClick={handleClick} className="btn btn-success">
        {btnText}
      </button>
    </div>
  );
}

export default Paging;
