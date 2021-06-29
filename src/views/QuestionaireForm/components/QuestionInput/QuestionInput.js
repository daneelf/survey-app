import React from "react";
import Input from "../../../../components/Input/Input";
import styles from "./QuestionInput.module.css";
import { FaTrash, FaChevronDown, FaChevronUp } from "react-icons/fa";
const UP = -1;
const DOWN = 1;
const QuestionInput = ({ value,formId, onChange,removeQuestion,reorderQuestion }) => {
  return (
    <div className={styles["question"]}>
      <span>Q{formId + 1}</span>
      <Input
      value={value}
        onChange={onChange}
        variant="question"
        additionalStyles={styles["question-input"]}
        placeholder={"Enter your question"}
        fullWidth
      />
      <div className={styles["question-actions"]}>
      <span className={styles.icon}>
        <FaChevronDown onClick={() => reorderQuestion(formId, DOWN)}/>
      </span>
      <span className={styles.icon}>
        <FaChevronUp onClick={() => reorderQuestion(formId, UP)}/>
      </span>

      <span className={styles.icon}>
        <FaTrash onClick={removeQuestion}/>
      </span>
      </div>

    </div>
  );
};

QuestionInput.propTypes = {};

export default QuestionInput;
