import React, { useState, useCallback } from "react";
import styles from "./QuestionaireForm.module.css";
import QuestionInput from "./components/QuestionInput/QuestionInput";
import Answer from "./components/AnswerInput/AnswerInput";
import NewAnswerInput from "./components/NewAnswerInput/NewAnswerInput";
import { useQuestionsData } from "../../context/LocalContext";

const QuestionaireForm = ({ formId }) => {
  const [questionsData, setQuestionsData] = useQuestionsData();
  const [answers, setAnswers] = useState([]);

  const handleAddNewAnswer = useCallback(
    (value) => {
      const questions = [...questionsData];
      setAnswers([...answers, value]);
      questions[formId].answers.push(value);
      setQuestionsData(questions);
      console.log(
        "questionsData[formId].answers",
        questionsData[formId].answers
      );
    },
    [answers, formId, questionsData, setQuestionsData]
  );

  const onBlur = useCallback(
    (e) => {
      if (!answers.includes(e.target.value)) {
        handleAddNewAnswer(e.target.value);
      }
    },
    [answers, handleAddNewAnswer]
  );

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleAddNewAnswer(e.target.value);
    }
  };

  const handleAddQuestion = (e) => {
    const questions = [...questionsData];
    questions[formId].prompt = e.target.value;
    setQuestionsData(questions);
  };

  const handleUpdateAnswer = (e,i) => {
    const questions = [...questionsData];
    const answersData = [...answers]
    questions[formId].answers[i] = e.target.value;
    answersData[i] = e.target.value;
    setAnswers([answersData]);
    setQuestionsData(questions);
  }

  return (
    <form className={styles.card}>
      <QuestionInput formId={formId} onChange={(e) => handleAddQuestion(e)} />
      {answers.map((answer, i) => (
        <Answer
          key={i}
          value={answer}
          onChange={(e) => handleUpdateAnswer(e,i)}
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
