import React, { useState } from "react";

function FormValidation() {
  const [value, setValue] = useState("");
  const [styled, setStyled] = useState({});
  const [passStyled, setPassStyled] = useState({});

  let style = {};
  const queryHandler = (e) => {
    e.preventDefault();
    style = {
      border: "2px solid red",
      login: "kiritilmagan!",
      password: "kiritilmagan!",
    };
    if (value === "") {
      setStyled(style);
      setPassStyled(style);
    }
    value.text
      ? setPassStyled({ border: "2px solid red", password: "kiritilmagan!" })
      : setStyled({ border: "2px solid red", login: "kiritilmagan!" });
  };

  const getValueHandler = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;

    setValue({ [inputName]: inputValue });
    let a = { [inputName]: inputValue };
    let loginValueType = Object.keys(a)[0] === "text";
    if (a[inputName] === "") {
      style = {
        border: "2px solid red",
      };
      if (loginValueType) {
        style = { ...style, login: "kiritilmagan!" };
        setStyled(style);
      } else {
        style = { ...style, password: "kiritilmagan!" };
        setPassStyled(style);
      }
    } else {
      if (loginValueType) {
        style = {
          border: "2px solid green",
        };
        setStyled(style);
      } else {
        style = {
          border: "2px solid green",
        };
        setPassStyled(style);
      }
    }
  };
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Login {styled.login}
          </label>
          <input
            style={styled}
            onChange={getValueHandler}
            name="text"
            type="text"
            className="form-control"
            id="exampleInputText1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password {passStyled.password}
          </label>
          <input
            style={passStyled}
            onChange={getValueHandler}
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button
          type="submit"
          onClick={queryHandler}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default FormValidation;
