import React, {useState} from "react";

export const LocalContext = React.createContext({});

export const useQuestionsData = () => {
  const context = React.useContext(LocalContext);
  if (!context) {
    throw new Error(
      `useQuestionsData must be used within a LocalContextProvider`
    );
  }
  return context;
};

export const LocalContextProvider = (props) => {
  const [questionsData, setQuestionsData] = useState([]);
  const value = React.useMemo(() => [questionsData, setQuestionsData], [
    questionsData,
  ]);
  return <LocalContext.Provider value={value} {...props} />;
};

