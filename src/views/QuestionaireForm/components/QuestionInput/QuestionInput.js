import React from "react";
import Input from "../../../../components/Input/Input";
import styles from './QuestionInput.module.css';

const QuestionInput = ({id,placeholder}) => {
  return (
    <div className={styles["question"]}>
      <span>Q{id + 1}</span>
      <Input
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
