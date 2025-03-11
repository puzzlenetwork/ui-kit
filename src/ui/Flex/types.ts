export interface IFlexProps {
  justifyContent?: "start" | "flex-end" | "space-around" | "space-between" | "center";
  alignItems?:
    | "start"
    | "end"
    | "center"
    | "inherit"
    | "unset"
    | "flex-end"
    | "flex-start"
    | "baseline";
  crossAxisSize?: "min" | "max";
  mainAxisSize?: "fit-content" | "stretch";
}
