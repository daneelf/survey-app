import React from "react";
import styles from "./AlertIcon.module.css";

const AlertIcon = () => (
  <div className={styles["alert-icon"]}>
    <div className={styles.circle}>
      <div className={styles.square} />
    </div>
  </div>
);

AlertIcon.propTypes = {};

export default AlertIcon;
