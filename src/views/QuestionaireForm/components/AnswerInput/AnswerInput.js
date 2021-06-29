import React from "react";
import Input from "../../../../components/Input/Input";
import styles from "./AnswerInput.module.css";
import { FaTrash, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { UP, DOWN } from "../../../../constants";
import { useQuestionsData } from "../../../../context/LocalContext";
import cs from "classnames";

const AnswerInput = ({
  formId,
  answerId,
  value,
  onChange,
  removeAnswer,
  reorderAnswer,
}) => {
  const [questionsData] = useQuestionsData();
  const id = (answerId + 1).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const disabledUpIcon = cs({
    [styles["icon-disabled"]]: answerId === 0,
  });
  const disableDownIcon = cs({
    [styles["icon-disabled"]]:
    answerId === questionsData[formId].answers.length - 1,
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
          <FaChevronDown
            className={disableDownIcon}
            onClick={() =>
              reorderAnswer([...questionsData[formId].answers], answerId, DOWN)
            }
          />
        </span>
        <span className={styles.icon}>
          <FaChevronUp
            className={disabledUpIcon}
            onClick={() =>
              reorderAnswer([...questionsData[formId].answers], answerId, UP)
            }
          />
        </span>

        <span className={styles.icon}>
          <FaTrash onClick={removeAnswer} />
        </span>
      </div>
    </div>
  );
};

export default AnswerInput;
