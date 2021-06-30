import styles from "./App.module.css";
import Button from "./components/Button/Button";
import QuestionaireForm from "./views/QuestionaireForm/QuestionaireForm";
import { useState, useEffect } from "react";
import { useQuestionsData } from "./context/LocalContext";
import { reorder } from "./helpers/reorder";
import { debounce } from "./helpers/debounce";
import axios from "axios";
import Alert from "./components/Alert/Alert";
import AlertIcon from "./components/Icons/AlertIcon/AlertIcon";

function App() {
  const [questionaireFormCount, setQuestionaireFormCount] = useState(0);
  const [questionsData, setQuestionsData] = useQuestionsData();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    if (questionsData.length <= 0) {
      axios
        .get("/api/questions")
        .then((response) => {
          setQuestionsData(response.data.data);
        })
        .catch((error) => {
          if (error.response?.data?.error) {
            setError(error.response.data.error);
          } else {
            setError(error.message);
          }
        });
    }
  }, []);

  useEffect(() => {
    if (questionsData.length >= 0) {
      debounce(
        axios
          .post("/api/questionnaire", questionsData)
          .then((response) => {
            setMessage(response.data.message);
          })
          .catch((error) => {
            if (error.response?.data?.error) {
              setError(error.response.data.error);
            } else {
              setError(error.message);
            }
          }),
        3000
      );
    }
  }, [questionsData]);

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
    <>
      {error && (
        <Alert>
          <AlertIcon />
          {error}
        </Alert>
      )}
      {questionsData.length === 10 && (
        <Alert>
          <AlertIcon />
          You cannot add more than 10 questions
        </Alert>
      )}
      <div className={styles.list}>
        {questionsData.length === 0 && (
          <div className={styles["empty-list"]}>
            Click the button to add a new question.
          </div>
        )}
        {questionsData.length > 0 &&
          questionsData?.map((_, i) => {
            return (
              <QuestionaireForm
                key={i}
                formId={i}
                removeQuestion={() => handleRemoveQuestionForm(i)}
                reorderQuestion={handleReorderQuestions}
              />
            );
          })}

        <Button disabled={questionsData.length === 10} onClick={addQuestion} />
      </div>
    </>
  );
}

export default App;
