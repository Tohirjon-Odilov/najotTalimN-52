import React, { useReducer } from "react";

function UseReduser() {
  const initialState = {
    num: 0,
    str: "salom",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "decrement":
        return { ...state, num: state.num + 1 };
      case "increment":
        return { ...state, str: (state.str = "SALOM") };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="d-flex align-items-center justify-content-center">
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="btn btn-success mx-3"
      >
        Dec -
      </button>
      <div className="btn mx-3">
        {state.num}
        {state.str}
      </div>
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
