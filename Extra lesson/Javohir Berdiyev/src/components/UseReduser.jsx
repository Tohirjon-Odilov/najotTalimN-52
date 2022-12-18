import React, { useReducer } from "react";

function UseReduser() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "decrement":
        return state - 1;
      case "increment":
        return state + 1;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div className="d-flex align-items-center justify-content-center">
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="btn btn-success mx-3"
      >
        Dec -
      </button>
      <div className="btn mx-3">{count}</div>
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="btn btn-danger mx-3"
      >
        Inc +
      </button>
    </div>
  );
}

export default UseReduser;
