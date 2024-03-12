import  { createContext, useContext } from "react";
const DarkThemeContext = createContext();
const useTheme = () =>  useContext(DarkThemeContext)
export { DarkThemeContext, useTheme}