import React from "react";
import styles from "./button.module.css";

const Button = ({ customStyles, onClickFn, disabled, label = "label" }) => (
  <button
    className={styles.button}
    styles={customStyles}
    onClick={onClickFn}
    disabled={disabled}
  >
    {label}
  </button>
);

export default Button;
