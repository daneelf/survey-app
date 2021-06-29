import styles from "./App.module.css";
import Button from "./components/Button/Button";
import QuestionaireForm from "./views/QuestionaireForm/QuestionaireForm";
import { useState } from "react";
import { useQuestionsData } from "./context/LocalContext";

function App() {
  const [questionaireFormCount, setQuestionaireFormCount] = useState(0);
  const [questionsData, setQuestionsData] = useQuestionsData();

  const addQuestion = () => {
    setQuestionaireFormCount(questionaireFormCount + 1);
    setQuestionsData([...questionsData, { prompt: "", answers: [] }]);
  };

  const handleRemoveQuestionForm = (index) => {
    const newQuestions = [...questionsData];
    newQuestions.splice(index, 1);
    setQuestionsData(newQuestions);
  };

  return (
    <div className={styles.App}>
      {questionsData?.map((_, i) => {
        return (
          <QuestionaireForm
            key={i}
            formId={i}
            removeQuestion={() => handleRemoveQuestionForm(i)}
          />
        );
      })}
      <Button onClick={addQuestion} />
    </div>
  );
}

export default App;
