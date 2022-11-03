/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "./../Themer/Themer";
import styles from "./Inner.module.scss";

function Inner({ maxWidth, bgColor }) {
  let [length, setLength] = useState(0);

  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles[theme]}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quisquam
      ducimus, quae repellendus soluta culpa fuga aut officiis consequuntur quod
      ea nostrum id! Nisi eveniet accusantium consectetur. Totam, cum odit quia
      eveniet nobis soluta cupiditate asperiores est distinctio perferendis
      quibusdam repellendus inventore, harum, excepturi incidunt provident animi
      magni recusandae doloribus!
    </div>
  );
}

Inner.propTypes = {
  maxWidth: PropTypes.number,
  bgColor: PropTypes.string,
  type: PropTypes.node,
  element: PropTypes.string,
};

export default Inner;
