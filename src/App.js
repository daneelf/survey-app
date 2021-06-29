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

  const UP = -1;
  const DOWN = 1;

  const handleReorderQuestions = (index, direction) => {
    console.log("lalala");
    console.log(direction);
    const items = [...questionsData];
    const position = index;
    console.log(position);
    if (position < 0) {
      throw new Error("Given item not found.");
    } else if (
      (direction === UP && position === 0) ||
      (direction === DOWN && position === items.length - 1)
    ) {
      return;
    }

    const item = { ...items[position] };
    const newItems = items.filter(
      (i, index) => items[index].prompt !== items[position].prompt
    );

    newItems.splice(position + direction, 0, item);
    setQuestionsData(newItems);
  };

  return (
    <div className={styles.list}>
      {questionsData.length === 0 && 
        <div className={styles['empty-list']}>Click the button to add a new question.</div>
      }
      {questionsData?.map((_, i) => {
        return (
          <QuestionaireForm
            key={i}
            formId={i}
            removeQuestion={() => handleRemoveQuestionForm(i)}
            reorderQuestion={handleReorderQuestions}
          />
        );
      })}
      <Button onClick={addQuestion} />
    </div>
  );
}

export default App;
