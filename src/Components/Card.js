import { useContext } from 'react';
import { DarkThemeContext } from './DarkThemeContext';

export const Card = (props) => {
  const { darkTheme } = useContext(DarkThemeContext);
  const cardStyles = {
    backgroundColor: darkTheme ? 'rgb(48, 48, 48)' : '',
    color: darkTheme ? 'white' : '',
  };

  return (
    <div className='card' style={cardStyles}>
      {props.children}
    </div>
  );
};
