import React, { useState } from "react";
import CharComponent from "./CharComponent";
import FormValidation from "./FormValidation";

function KichikAmaliyot() {
  const [elInputValue, setElInputValue] = useState("");

  const formHandle = (e) => {
    e.preventDefault();
  };

  const getValueHandle = (e) => {
    const value = e.target.value;
    setElInputValue(value);
  };

  const deleteCharHandler = (index) => {
    let text = elInputValue.split("");
    text.splice(index, 1);
    let updateText = text.join("");
    console.log(updateText);
    setElInputValue(updateText);
  };

  const charlist = elInputValue.split("").map((data, index) => {
    return (
      <CharComponent
        value={data}
        clicked={() => deleteCharHandler(index)}
        key={index}
      />
    );
  });
  return (
    <div>
      <form className="form-floating">
        <input
          value={elInputValue}
          onChange={getValueHandle}
          type='{"text"}'
          className="form-control"
          placeholder="Leave a text here"
          id="floatingTextarea"
        />
        <label htmlFor="floatingTextarea">Nimadir yozing:</label>
        <button
          className="visually-hidden"
          type="submit"
          onClick={formHandle}
        ></button>
      </form>
      <p className="pt-3">{elInputValue}</p>
      <FormValidation valueLength={elInputValue.length} />
      <div className="d-flex flex-row justify-content-center">{charlist}</div>
    </div>
  );
}

export default KichikAmaliyot;
