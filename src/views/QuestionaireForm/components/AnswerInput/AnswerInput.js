import React from 'react';
import Input from "../../../../components/Input/Input";
import styles from './AnswerInput.module.css';

const AnswerInput = ({value, onChange}) => {

    return (
        <Input
        variant="answer"
        additionalStyles={styles["answer"]}
        onChange={onChange}
        value={value}
      />
    );
};


export default AnswerInput;