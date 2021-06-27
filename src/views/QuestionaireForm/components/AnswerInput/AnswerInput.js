import React from 'react';
import Input from "../../../../components/Input/Input";
import styles from './AnswerInput.module.css';

const AnswerInput = () => {
    return (
        <Input
        variant="answer"
        additionalStyles={styles["answer"]}
      />
    );
};


export default AnswerInput;