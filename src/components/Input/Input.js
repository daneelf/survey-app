import React from "react";
import styles from "./Input.module.css";
import cs from "classnames";

const Input = ({ fullWidth , placeholder, additionalStyles }) => {
    const inputStyles = cs({
        [styles['full-width']]: fullWidth,
        [additionalStyles]: Boolean(additionalStyles),
    })
  return <input className={inputStyles} placeholder={placeholder} />;
};

Input.propTypes = {};

export default Input;
