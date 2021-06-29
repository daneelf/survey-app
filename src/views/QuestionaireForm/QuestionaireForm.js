import React, { useCallback, useState } from "react";
import styles from "./QuestionaireForm.module.css";
import QuestionInput from "./components/QuestionInput/QuestionInput";
import Answer from "./components/AnswerInput/AnswerInput";
import NewAnswerInput from "./components/NewAnswerInput/NewAnswerInput";
import { useQuestionsData } from "../../context/LocalContext";

const QuestionaireForm = ({ formId, removeQuestion,reorderQuestion }) => {
  const [questionsData, setQuestionsData] = useQuestionsData();
  const [value,setValue] = useState("");

  const handleAddNewAnswer = useCallback(
    (value) => {
      const questions = [...questionsData];
      questions[formId].answers.push(value);
      setQuestionsData(questions);
      setValue("")
    },
    [formId, questionsData, setQuestionsData]
  );

  const onBlur = useCallback(
    (e) => {
      const answers =  questionsData[formId].answers;
      if (!answers.includes(e.target.value) && e.target.value.length > 0) {
        handleAddNewAnswer(e.target.value);
      }
    },
    [formId, handleAddNewAnswer, questionsData]
  );

  const onKeyDown = (e) => {
    if (e.keyCode === 13 && e.target.value.length > 0) {
      handleAddNewAnswer(e.target.value);
    }
  };

  const handleAddQuestionTitle = (e) => {
    const questions = [...questionsData];
    questions[formId].prompt = e.target.value;
    setQuestionsData(questions);
  };

  const handleUpdateAnswer = (e, i) => {
    const questions = [...questionsData];
    questions[formId].answers[i] = e.target.value;
    setQuestionsData(questions);
  };

  const handleRemoveAnswer = (i) => {
    const questions = [...questionsData];
    questions[formId].answers.splice(i, 1);
    setQuestionsData(questions);
  };
  

  return (
    <form className={styles.card}>
      <QuestionInput
        formId={formId}
        onChange={(e) => handleAddQuestionTitle(e)}
        removeQuestion={() => removeQuestion()}
        reorderQuestion={reorderQuestion}
        value={questionsData?.[formId]?.prompt}
      />
      {questionsData[formId].answers?.map((answer, i) => (
        <Answer
          answerId={i}
          key={i}
          value={answer}
          onChange={(e) => handleUpdateAnswer(e, i)}
          removeAnswer={() => handleRemoveAnswer(i)}
        />
      ))}

      <NewAnswerInput
        onChange={(e) => setValue(e.target.value)}
        value={value}
        onBlur={(e) => onBlur(e)}
        onKeyDown={(e) => onKeyDown(e)}
      />
    </form>
  );
};

export default QuestionaireForm;
