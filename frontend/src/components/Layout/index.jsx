import { trim } from "../../utils/functions/general";
import styles from "./layout.module.css";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={trim(`
        ${styles.layout} 
        ${className}`)}
    >
      {children}
    </div>
  );
};

export default Layout;
