import styles from "./App.module.css";
import Button from "./components/Button/Button";
import QuestionaireForm from "./views/QuestionaireForm/QuestionaireForm";
import { useState } from "react";
import { useQuestionsData } from "./context/LocalContext";

function App() {
  const [questionaires, setQuestionaire] = useState(0);
  const [questionsData, setQuestionsData] = useQuestionsData();

  const addQuestion = () => {
    setQuestionaire(questionaires + 1);
  };
  return (
    <div className={styles.App}>
      {[...Array(questionaires)].map((_, i) => {
        return <QuestionaireForm key={i} id={i} />;
      })}
      <Button onClick={addQuestion} />
    </div>
  );
}

export default App;
