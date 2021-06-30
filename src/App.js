import styles from "./App.module.css";
import Button from "./components/Button/Button";
import QuestionaireForm from "./views/QuestionaireForm/QuestionaireForm";
import { useState, useEffect } from "react";
import { useQuestionsData } from "./context/LocalContext";
import { reorder } from "./helpers/reorder";
import {debounce} from "./helpers/debounce";
import axios from "axios";
const AUTOSAVE_INTERVAL = 1000;

function App() {
  const [questionaireFormCount, setQuestionaireFormCount] = useState(0);
  const [questionsData, setQuestionsData] = useQuestionsData();

  useEffect(() => {
    console.log("only once..?");
    if (questionsData.length <= 0) {
      axios
        .get("/api/questions")
        .then((response) => {
          console.log(response);
          setQuestionsData(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },[]);

  useEffect(() => {

    if (questionsData.length >= 0) {
      debounce(
        axios
          .post("/api/questionnaire", questionsData)
          .then(function (response) {
            console.log('post response',response);
          })
          .catch(function (error) {
            console.log(error);
          }),
        3000
      );
    }
  }, [debounce, questionsData]);

  const addQuestion = () => {
    setQuestionaireFormCount(questionaireFormCount + 1);
    setQuestionsData([...questionsData, { prompt: "", answers: [] }]);
  };

  const handleRemoveQuestionForm = (index) => {
    const newQuestions = [...questionsData];
    newQuestions.splice(index, 1);
    setQuestionsData(newQuestions);
  };

  const handleReorderQuestions = (items, index, direction) => {
    const newOrderedItems = reorder(items, index, direction);
    setQuestionsData(newOrderedItems);
  };

  return (
    <div className={styles.list}>
      {questionsData.length === 0 && (
        <div className={styles["empty-list"]}>
          Click the button to add a new question.
        </div>
      )}
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
