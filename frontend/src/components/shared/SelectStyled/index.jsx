import { forwardRef } from "react";
import styles from "./selectStyled.module.css";
import { trim } from "../../../utils/functions/general";

const SelectStyled = forwardRef(
  (
    {
      label,
      defaultValue,
      defaultText,
      disabled,
      options = [{ label: "", value: "" }],
      error,
      ...atribuites
    },
    ref
  ) => (
    <label className={styles.wrapper}>
      {label && (
        <h3
          className={trim(`
            ${styles.label} 
            ${error ? styles.error : ""}`)}
        >
          {label}
        </h3>
      )}
      <div className={styles.selectContainer}>
        <select
          ref={ref}
          className={trim(`
            ${styles.select}
            ${error ? styles.error : ""}`)}
          defaultValue={defaultValue}
          disabled={disabled}
          {...atribuites}
        >
          <option
            className={`${defaultText ? "" : "hidden"}`}
            value=""
            disabled
          >
            {defaultText}
          </option>

          {options.map(({ label, value }, i) => (
            <option key={i} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      {error && (
        <p className={`${styles.errorText} ${styles.error}`}>{error}</p>
      )}
    </label>
  )
);

export default SelectStyled;
