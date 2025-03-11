import styled from "@emotion/styled";

import { TTextAlign, TTextSize, TTextType } from "./types.ts";

export const Text = styled.p<{
  type?: TTextType;
  weight?: 400 | 500;
  size?: TTextSize;
  fitContent?: boolean;
  nowrap?: boolean;
  crossed?: boolean;
  ellipsis?: number;
  textAlign?: TTextAlign;
}>`
  margin: 0;
  width: ${({ fitContent }) => (fitContent ? "fit-content" : "100%")};
  font-weight: ${({ weight = 400 }) => weight};
  white-space: ${({ nowrap }) => (nowrap ? "nowrap" : "unset")};
  text-decoration: ${({ crossed }) => (crossed ? "line-through" : "unset")};
  text-align: ${({ textAlign = "default" }) => textAlign};

  ${({ type, theme }) => {
    const colorMap = {
      primary: theme.colors?.primary800,
      secondary: theme.colors?.primary650,
      blue500: theme.colors?.blue500,
      light: theme.colors?.white,
      error: theme.colors?.error500,
      success: theme.colors?.success,
      purple300: theme.colors?.primary300,
      default: theme.colors?.primary800,
    };
    return `color: ${colorMap[type || "default"]};`;
  }}

  ${({ ellipsis }) =>
    ellipsis &&
    `
      max-width: ${ellipsis}px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}

    ${({ size }) => {
    const sizeMap = {
      small: "font-size: 12px; line-height: 16px;",
      medium: "font-size: 14px; line-height: 20px;",
      big: "font-size: 20px; line-height: 24px;",
      large: "font-size: 32px; line-height: 40px;",
      default: "font-size: 16px; line-height: 24px;",
    };
    return sizeMap[size || "default"];
  }}
`;
