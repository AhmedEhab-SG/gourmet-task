import { trim } from "../../utils/functions/general";
import styles from "./header.module.css";
import en from "../../locale/en.json";

const { logo } = en.header;

const Logo = ({ className = "" }) => {
  return (
    <h1
      className={trim(`
        ${styles.logo} 
        ${className}`)}
    >
      {logo}
    </h1>
  );
};

export default Logo;
