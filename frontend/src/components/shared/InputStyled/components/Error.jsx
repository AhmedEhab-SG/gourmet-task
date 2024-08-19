import { trim } from "../../../../utils/functions/general";
import styles from "./componets.module.css";

const Error = ({ error, errorClassName = "" }) => {
  return (
    <p
      className={trim(`
        ${styles.error} 
        ${styles.errorText}
        ${errorClassName}`)}
    >
      {error}
    </p>
  );
};

export default Error;
