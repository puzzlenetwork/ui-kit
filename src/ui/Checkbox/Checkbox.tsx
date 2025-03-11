import React from "react";

import CheckedCheckbox from "@/icons/checked.svg?react";
import NoCheckedCheckbox from "@/icons/noChecked.svg?react";

import { CheckboxProps } from "@/ui/Checkbox/types";

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  return checked ? (
    <CheckedCheckbox style={{ cursor: "pointer" }} onClick={() => onChange(false)} />
  ) : (
    <NoCheckedCheckbox style={{ cursor: "pointer" }} onClick={() => onChange(true)} />
  );
};
export default Checkbox;
