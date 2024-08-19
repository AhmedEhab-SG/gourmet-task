import { trim } from "../../../utils/functions/general";
import styles from "./sectionHeader.module.css";

const SectionHeader = ({ title, className = "", ...attributes }) => {
  return (
    <h1
      className={trim(`
        ${styles.sectionHeader}
        ${className}`)}
      {...attributes}
    >
      {title}
    </h1>
  );
};

export default SectionHeader;
