import React, { useContext } from "react";

import { useLocalStorage } from "lib/hooks/useLocalStorage";

import { IContext, IThemeProvider } from "./interface";

import { THEME_DARK } from "./constants";

const inintialState = { theme: "", change: () => {} };

export const ThemeContext = React.createContext<IContext>(inintialState);

export const ThemeProvider = ({ children, ...props }: IThemeProvider) => {
  const [theme, setTheme] = useLocalStorage<string>("appTheme", THEME_DARK);

  const change = (name: string) => {
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
