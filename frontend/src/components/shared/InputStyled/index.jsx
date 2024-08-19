import { forwardRef } from "react";
import Error from "./components/Error";
import { trim } from "../../../utils/functions/general";
import Label from "./components/Label";
import Input from "./components/Input";

const InputStyled = forwardRef(
  (
    {
      contianerClassName = "",
      id,
      label,
      labelClassName = "",
      error,
      border,
      className = "",
      errorClassName = "",
      elemType = "input",
      ...attributes
    },
    ref
  ) => (
    <div
      style={{ display: "flex", flexDirection: "column", width: "100%" }}
      className={trim(`${contianerClassName}`)}
    >
      {label && (
        <Label
          id={id}
          label={label}
          labelClassName={labelClassName || ""}
          error={error}
        />
      )}

      <Input
        ref={ref}
        border={border}
        className={className}
        elemType={elemType}
        error={error}
        id={id}
        {...attributes}
      />

      {error && <Error error={error} errorClassName={errorClassName} />}
    </div>
  )
);

InputStyled.displayName = "InputStyled";

export default InputStyled;
