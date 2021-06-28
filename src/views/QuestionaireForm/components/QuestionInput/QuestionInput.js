import React from "react";
import Input from "../../../../components/Input/Input";
import styles from "./QuestionInput.module.css";

const QuestionInput = ({ formId,onChange}) => {
  return (
    <div className={styles["question"]}>
      <span>Q{formId + 1}</span>
      <Input
        onChange={onChange}
        variant="question"
        additionalStyles={styles["question-input"]}
        placeholder={"Enter your question"}
        fullWidth
      />
    </div>
  );
};

QuestionInput.propTypes = {};

export default QuestionInput;
