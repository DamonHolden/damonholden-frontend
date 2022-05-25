import { useContext } from 'react';
import { DarkThemeContext } from './DarkThemeContext';
import codePicture from '../images/code.png';

export const CodeSnippetPicture = () => {
  const { darkTheme } = useContext(DarkThemeContext);
  const cardStyles = {
    backgroundColor: darkTheme ? 'rgb(48, 48, 48)' : '',
    color: darkTheme ? 'white' : '',
  };

  return (
    <div className='card' style={cardStyles}>
      <h2 className='code-title'>JavaScript logic</h2>
      <img className='code-image' alt='deployment diagram' src={codePicture} />
    </div>
  );
};
