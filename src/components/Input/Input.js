import React from "react";
import styles from "./Input.module.css";
import cs from "classnames";

const Input = ({ fullWidth , placeholder, additionalStyles,onKeyDown,value }) => {
    const inputStyles = cs({
        [styles['full-width']]: fullWidth,
        [additionalStyles]: Boolean(additionalStyles),
    })
  return <input className={inputStyles} placeholder={placeholder} onKeyDown={onKeyDown} value={value}/>;
};

Input.propTypes = {};

export default Input;
