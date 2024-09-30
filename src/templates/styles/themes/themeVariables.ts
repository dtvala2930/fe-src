import {} from "../libs/theme";
import { antDarkColorsTheme, darkColorsTheme } from "./dark/darkTheme";
import { lightColorsTheme } from "./light/lightTheme";

export const themeObject = {
  light: lightColorsTheme,
  dark: darkColorsTheme,
};

export const antThemeObject = {
  light: {},
  dark: antDarkColorsTheme,
};
