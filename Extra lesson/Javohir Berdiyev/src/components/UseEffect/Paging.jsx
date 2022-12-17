import React from "react";

function Paging({ curr, total, setCurr }) {
  let btnText = curr === total ? "Prev" : "Next";

  const handleClick = () => {
    let newspages;
    if (curr === total) {
      newspages = curr - 1;
    } else {
      newspages = curr + 1;
    }
    setCurr(newspages);
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
