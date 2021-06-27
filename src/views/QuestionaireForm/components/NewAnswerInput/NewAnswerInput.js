import React from "react";
import Input from "../../../../components/Input/Input";
import styles from "./NewAnswerInput.module.css";

const NewAnswerInput = ({ id, placeholder }) => {
  return (
    <Input
      variant="question"
      additionalStyles={styles["new-answer"]}
      placeholder={"Type a new answer"}
    />
  );
};

NewAnswerInput.propTypes = {};

export default NewAnswerInput;
