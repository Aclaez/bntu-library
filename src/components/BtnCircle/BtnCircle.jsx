import React from "react";
import styles from "./BtnCircle.module.scss";

function BtnCircle({ children, props }) {
  return (
    <button className={styles.btn} {...props}>
      {children}
    </button>
  );
}

export default BtnCircle;
