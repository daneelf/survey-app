import React from "react";
import styles from "./Input.module.css";
import cs from "classnames";

const Input = ({
  type,
  fullWidth,
  placeholder,
  additionalStyles,
  onChange,
  onKeyDown,
  onBlur,
  onFocus,
  value,
}) => {
  const inputStyles = cs({
    [styles["full-width"]]: fullWidth,
    [additionalStyles]: Boolean(additionalStyles),
  });
  return (
    <input
      type={type || "text"}
      className={inputStyles}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      onFocus={onFocus}
      defalutValue={defalutValue}
      value={value}
    />
  );
};

export default Input;
