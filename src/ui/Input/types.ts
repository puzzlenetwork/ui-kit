import React, { ChangeEvent, JSX } from "react";

export interface InputProps
  extends Omit<
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "onChange" | "prefix"
  > {
  icon?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  suffix?: JSX.Element;
  prefix?: JSX.Element;
  suffixCondition?: boolean;
  error?: boolean;
  errorText?: string;
  description?: string;
}
