import React, { useState } from "react";
import styles from "./QuestionaireForm.module.css";
import QuestionInput from "./components/QuestionInput/QuestionInput";
import Answer from "./components/AnswerInput/AnswerInput";

import NewAnswerInput from "./components/NewAnswerInput/NewAnswerInput";
const QuestionaireForm = ({ id }) => {
  const [answers, setAnswers] = useState([]);
  const handleAddNewAnswer = (e) => {
    if (e.keyCode === 13) {
      console.log("llalal");
      setAnswers([...answers, e.target.value]);
    }
  };

  return (
    <form className={styles.card}>
      <QuestionInput id={id} />
      {answers.map((answer, i) => <Answer key={i} id={i} value={answer} />)}
      <NewAnswerInput onKeyDown={(e) => handleAddNewAnswer(e)} />
    </form>
  );
};

export default QuestionaireForm;
