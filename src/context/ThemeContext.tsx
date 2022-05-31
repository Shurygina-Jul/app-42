import React, { useContext, useState } from "react";

import { IContext, IThemeProvider } from "./interface";

import { THEME_DARK } from "./constants";


const inintialState = { theme: THEME_DARK , change:()=>{}};

export const ThemeContext = React.createContext<IContext>(inintialState);

export const ThemeProvider = ({ children, ...props }:IThemeProvider) => {
  const [theme, setTheme] = useState<string>("");

  const change = (name:string) => {
    setTheme(name);
    
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        change,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
