import { Link } from "react-router-dom";
import styles from "./button-styles.module.css";
import { trim } from "../../../utils/functions/general";

const ButtonStyled = ({
  className = "",
  animatedBorderClassName = "",
  style,
  SvgIcon,
  elemType = "button",
  type = "button",
  target,
  size = "md",
  border,
  disabled,
  href,
  title,
  IconRight,
  children,
  success,
  warning,
  danger,
  bg,
  onClick,
  ...attributes
}) => {
  const classes = `
    ${styles.mainStyles}
    inline-flex
    z-0
    group
    ${success ? `${styles.success} ${border ? styles.successBorder : ""}` : ""}
    ${warning ? `${styles.warning} ${border ? styles.warningBorder : ""}` : ""}
    ${danger ? `${styles.danger} ${border ? styles.dangerBorder : ""}` : ""}
    ${disabled ? "cursor-not-allowed" : "cursor-pointer"}
    ${size === "xs" ? styles.xsStyles : ""}
    ${size === "sm" ? styles.smStyles : ""}
    ${size === "md" ? styles.mdStyles : ""}
    ${size === "lg" ? styles.lgStyles : ""}
    ${className}`;

  const onClickHandler = (e) => {
    if (onClick) onClick(e);
  };

  return elemType === "button" && !href ? (
    <button
      onClick={onClickHandler}
      type={type}
      disabled={disabled}
      className={trim(classes)}
      style={style}
      {...attributes}
    >
      {!IconRight && SvgIcon}
      {title}
      {children}
      {IconRight && SvgIcon}
    </button>
  ) : (
    <Link
      to={href || "/"}
      onClick={onClickHandler}
      target={target}
      className={trim(classes)}
      style={style}
      {...attributes}
    >
      {!IconRight && SvgIcon}
      {title}
      {children}
      {IconRight && SvgIcon}
    </Link>
  );
};

export default ButtonStyled;
