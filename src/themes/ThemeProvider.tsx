import React from "react";

import { ThemeProvider } from "@emotion/react";

import darkTheme from "@/themes/darkTheme";
import lightTheme from "@/themes/lightTheme";

export enum THEME_TYPE {
  LIGHT_THEME = "lightTheme",
  DARK_THEME = "darkTheme",
}

interface IProps {
  children: React.ReactNode;
  themeType?: THEME_TYPE.DARK_THEME | THEME_TYPE.LIGHT_THEME;
}

export const themes = {
  darkTheme,
  lightTheme,
};

const ThemeWrapper: React.FC<IProps> = ({ children, themeType = THEME_TYPE.LIGHT_THEME }) => {
  return <ThemeProvider theme={themes[themeType]}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
