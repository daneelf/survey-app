import React from "react";
import Input from "../../../../components/Input/Input";
import styles from "./NewAnswerInput.module.css";

const NewAnswerInput = ({ value, onKeyDown,onBlur ,onFocus, onChange}) => {
  return (
    <Input
      variant="question"
      value={value}
      additionalStyles={styles["new-answer"]}
      placeholder={"Type a new answer"}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange}
    />
  );
};

export default NewAnswerInput;
