import { createContext, useState } from 'react';

export const DarkThemeContext = createContext();

let localDarkTheme;

if (localStorage.getItem('darkTheme') === 'true') localDarkTheme = true;
else if (localStorage.getItem('darkTheme') === 'false') localDarkTheme = false;

export const DarkThemeContextProvider = (props) => {
  const [darkTheme, setDarkTheme] = useState(localDarkTheme);

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
