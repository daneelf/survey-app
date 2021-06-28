import React, { useState, useCallback } from "react";
import styles from "./QuestionaireForm.module.css";
import QuestionInput from "./components/QuestionInput/QuestionInput";
import Answer from "./components/AnswerInput/AnswerInput";
import NewAnswerInput from "./components/NewAnswerInput/NewAnswerInput";
import { useQuestionsData } from "../../context/LocalContext";

const QuestionaireForm = ({ formId ,removeQuestion}) => {
  const [questionsData, setQuestionsData] = useQuestionsData();
  const [answers, setAnswers] = useState([]);

  const handleAddNewAnswer = useCallback(
    (value) => {
      const questions = [...questionsData];
      setAnswers([...answers, value]);
      questions[formId].answers.push(value);
      setQuestionsData(questions);
    },
    [answers, formId, questionsData, setQuestionsData]
  );

  const onBlur = useCallback(
    (e) => {
      if (!answers.includes(e.target.value) && e.target.value.length > 0) {
        handleAddNewAnswer(e.target.value);
      }
    },
    [answers, handleAddNewAnswer]
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
    const answersData = [...answers];
    questions[formId].answers[i] = e.target.value;
    answersData[i] = e.target.value;
    setAnswers([answersData]);
    setQuestionsData(questions);
  };



  const handleRemoveAnswer = () => {};

  return (
    <form className={styles.card}>
      <QuestionInput
        formId={formId}
        onChange={(e) => handleAddQuestionTitle(e)}
        removeQuestion={() => removeQuestion()}
      />
      {answers.map((answer, i) => (
        <Answer
          answerId={i}
          key={i}
          value={answer}
          onChange={(e) => handleUpdateAnswer(e, i)}
        />
      ))}
      <NewAnswerInput
        onBlur={(e) => onBlur(e)}
        onKeyDown={(e) => onKeyDown(e)}
      />
    </form>
  );
};

export default QuestionaireForm;
