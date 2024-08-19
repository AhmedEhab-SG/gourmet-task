import { forwardRef } from "react";
import { trim } from "../../../../utils/functions/general";
import styles from "./componets.module.css";

const Input = forwardRef(
  ({ border, className, elemType, error, id, ...attributes }, ref) => {
    return elemType === "input" ? (
      <input
        ref={ref}
        id={id}
        className={trim(`
          ${styles.input}
          ${error ? styles.error : ""}   
          ${className}`)}
        {...attributes}
      />
    ) : (
      <textarea
        ref={ref}
        id={id}
        className={trim(`
          ${styles.textarea}
          ${error ? styles.error : ""}   
          ${className}`)}
        {...attributes}
      />
    );
  }
);

export default Input;
