import React from "react";
import Input from "../../../../components/Input/Input";
import styles from "./QuestionInput.module.css";
import { FaTrash, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useQuestionsData } from "../../../../context/LocalContext";
import { UP, DOWN } from "../../../../constants";
import cs from "classnames";

const QuestionInput = ({
  value,
  formId,
  onChange,
  removeQuestion,
  reorderQuestion,
}) => {
  const [questionsData] = useQuestionsData();
  const disabledUpIcon = cs({
    [styles["icon-disabled"]]: formId === 0,
  });
  const disableDownIcon = cs({
    [styles["icon-disabled"]]: formId === questionsData.length - 1,
  });

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
          <FaChevronDown
            className={disableDownIcon}
            onClick={() => reorderQuestion([...questionsData], formId, DOWN)}
          />
        </span>
        <span className={styles.icon}>
          <FaChevronUp
            className={disabledUpIcon}
            onClick={() => reorderQuestion([...questionsData], formId, UP)}
          />
        </span>

        <span className={styles.icon}>
          <FaTrash onClick={removeQuestion} />
        </span>
      </div>
    </div>
  );
};

QuestionInput.propTypes = {};

export default QuestionInput;
