import React from "react";
import styles from "./QuestionaireForm.module.css";
import QuestionInput from "./components/QuestionInput/QuestionInput"
import Answer from "./components/AnswerInput/AnswerInput";

import NewAnswerInput from "./components/NewAnswerInput/NewAnswerInput"
const QuestionaireForm = ({ id, children, answers }) => {
  return (
    <form className={styles.card}>
      <QuestionInput id={id}/>
      {answers}
      <Answer />
      <NewAnswerInput  />
    </form>
  );
};

export default QuestionaireForm;
