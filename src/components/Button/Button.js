import React from 'react';
import styles from './Button.module.css'; 

const Button = ({onClick,disabled}) => {
    return (
        <button onClick={onClick} className={styles.btn} disabled={disabled}>
            Add new question
        </button>
    );
};

export default Button;