import { DefaultTheme } from "styled-components";

export const common = {};

export const lightTheme: DefaultTheme = {
  ...common,
  color: {
    bgColor: "#fff",
    textColor: "#000",
    shadowColor: "rgba(0, 0, 0, 0.5)",
  },
  name: "light" as const,
};
export const darkTheme: DefaultTheme = {
  ...common,
  color: {
    bgColor: "#252525",
    textColor: "#fff",
    shadowColor: "#000",
  },
  name: "dark" as const,
};
