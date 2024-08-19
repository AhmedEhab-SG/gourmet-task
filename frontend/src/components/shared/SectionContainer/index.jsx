import React, { forwardRef } from "react";
import styles from "./sectionContainer.module.css";
import { trim } from "../../../utils/functions/general";

// ref forwarding in case i add scroll into view or other functionality

const SectionContainer = forwardRef(
  ({ children, className = "", ...attributes }, ref) => {
    return (
      <section
        ref={ref}
        className={trim(`
          ${styles.section}
          containerPadding
          ${className}`)}
        {...attributes}
      >
        {children}
      </section>
    );
  }
);

export default SectionContainer;
