import React from "react";
import SelectStyled from "../shared/SelectStyled";
import InputStyled from "../shared/InputStyled";
import ButtonStyled from "../shared/ButtonStyled";
import { categories } from "../../schemas/product.schema";
import { pascalCase } from "../../utils/functions/general";
import styles from "./table.module.css";

const selectOptions = categories.map((category) => ({
  label: pascalCase(category),
  value: category,
}));

const FilterNav = ({ setFilterSettings }) => {
  const onChangeCategory = (e) => {
    setFilterSettings((prev) => ({ ...prev, category: e.target.value }));
  };

  const onChangeDate = (e) => {
    setFilterSettings((prev) => ({ ...prev, date: e.target.value }));
  };

  const onClearHandler = () => {
    setFilterSettings(() => ({
      date: "",
      category: "",
    }));
  };

  return (
    <div className={styles.filterNavContainer}>
      <div className={styles.filterNavInputContainer}>
        <SelectStyled
          label={"Category"}
          options={selectOptions}
          onChange={onChangeCategory}
        />
        <InputStyled label={"Date"} type={"date"} onChange={onChangeDate} />
      </div>
      <ButtonStyled
        style={{ border: "1px solid black" }}
        title={"Clear Filter"}
        size="sm"
        onClick={onClearHandler}
      />
    </div>
  );
};

export default FilterNav;
