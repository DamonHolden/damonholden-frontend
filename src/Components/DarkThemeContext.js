import { createContext, useState } from 'react';

export const DarkThemeContext = createContext();

export const DarkThemeContextProvider = (props) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const contextValue = {
    darkTheme,
    setDarkTheme,
  };
  return (
    <DarkThemeContext.Provider value={contextValue}>
      {props.children}
    </DarkThemeContext.Provider>
  );
};
