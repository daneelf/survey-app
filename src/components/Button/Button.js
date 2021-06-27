import React from 'react';
import styles from './Button.module.css'; 

const Button = ({onClick}) => {
    return (
        <button onClick={onClick} className={styles.btn}>
            Add new question
        </button>
    );
};

export default Button;