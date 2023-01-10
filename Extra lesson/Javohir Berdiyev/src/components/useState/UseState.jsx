import React, { useState } from "react";

function UseState() {
  const [stringState, setStringState] = useState({ isBoll: true });
  const [numberState, setNumberState] = useState(0);
  const changeString = () => {
    setStringState({ isBoll: !stringState.isBoll });
  };
  return (
    <>
      <button className="btn btn-success" onClick={changeString}>
        Click
      </button>
      <button
        className="btn btn-success mx-2"
        onClick={setNumberState.bind(this, numberState + 1)}
      >
        {numberState}
      </button>
      <h1>Hello {stringState.isBoll ? "Winter" : "Spring"}.</h1>
    </>
  );
}

export default UseState;
