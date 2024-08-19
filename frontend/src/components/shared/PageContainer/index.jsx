import { trim } from "../../../utils/functions/general";
import styles from "./pageContainer.module.css";
const PageContainer = ({ children, className = "", ...attributes }) => {
  return (
    <main
      className={trim(`
        ${styles.page}
        ${className}`)}
      {...attributes}
    >
      {children}
    </main>
  );
};

export default PageContainer;
