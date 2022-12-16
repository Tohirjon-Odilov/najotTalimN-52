import React, { useState } from "react";
import Char from "./Char";
import Validation from "./Validation";

function Main() {
  const [value, setValue] = useState("");
  const handleValue = (e) => {
    let value = e.target.value;
    setValue(value);
  };
  const handleValueIndex = (index) => {
    let text = value.split("");
    text.splice(index, 1);
    let updateText = text.join("");
    setValue(updateText);
  };
  const charset = value.split("").map((char, index) => {
    return (
      <Char value={char} key={index} clicked={() => handleValueIndex(index)} />
    );
  });

  return (
    <div>
      <p>Nimadir kiriting:</p>
      <input
        type="text"
        value={value}
        onChange={handleValue}
        className="form-input"
      />
      <p className="mt-3">{value}</p>
      <Validation valueLength={value.length} />
      <div className="text-center">{charset}</div>
    </div>
  );
}

export default Main;
