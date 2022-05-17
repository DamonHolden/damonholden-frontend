import { createContext, useState } from 'react';

export const DarkThemeContext = createContext();

export const DarkThemeContextProvider = (props) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => setDarkTheme((prevTheme) => !prevTheme);
  const contextValue = {
    darkTheme,
    toggleTheme,
  };
  return (
    <DarkThemeContext.Provider value={contextValue}>
      {props.children}
    </DarkThemeContext.Provider>
  );
};
