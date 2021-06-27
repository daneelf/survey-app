import React from 'react';
import Input from "../../../../components/Input/Input";
import styles from './AnswerInput.module.css';

const AnswerInput = ({value}) => {
    return (
        <Input
        variant="answer"
        additionalStyles={styles["answer"]}
        value={value}
      />
    );
};


export default AnswerInput;