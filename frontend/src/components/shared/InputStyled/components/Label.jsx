import React from "react";
import { trim } from "../../../../utils/functions/general";
import styles from "./componets.module.css";

const Label = ({ label, id, labelClassName = "", error }) => {
  return (
    <label
      htmlFor={id}
      className={trim(`
        ${styles.label}
        ${error ? styles.error : ""}
        ${labelClassName}`)}
    >
      {label}
    </label>
  );
};

export default Label;
