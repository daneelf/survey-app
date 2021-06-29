import React from "react";
import Input from "../../../../components/Input/Input";
import styles from "./AnswerInput.module.css";
import { FaTrash, FaChevronDown, FaChevronUp } from "react-icons/fa";

const AnswerInput = ({ answerId, value, onChange, removeAnswer }) => {
  const id = (answerId + 1).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  return (
    <div className={styles["answer"]}>
      <span className={styles["answer-id"]}>{id}</span>
      <Input
        fullWidth
        variant="answer"
        additionalStyles={styles["answer-input"]}
        onChange={onChange}
        value={value}
      />
      <div className={styles["answer-actions"]}>
        <span className={styles.icon}>
          <FaChevronDown />
        </span>
        <span className={styles.icon}>
          <FaChevronUp />
        </span>

        <span className={styles.icon}>
          <FaTrash onClick={removeAnswer} />
        </span>
      </div>
    </div>
  );
};

export default AnswerInput;
