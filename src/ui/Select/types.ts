import { HTMLAttributes } from "react";

export interface IOption {
  key: string;
  title: string;
}

export interface SelectProps extends Omit<HTMLAttributes<HTMLDivElement>, "onSelect"> {
  options: IOption[];
  selected?: IOption;
  onSelect: (key: IOption) => void;
}
