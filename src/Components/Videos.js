import Video from './Video';
import { useContext } from 'react';
import { DarkThemeContext } from './DarkThemeContext';

const Videos = () => {
  const { darkTheme } = useContext(DarkThemeContext);
  const cardStyles = {
    backgroundColor: darkTheme ? 'rgb(48, 48, 48)' : '',
    color: darkTheme ? 'white' : '',
  };

  return (
    <>
      <h1>behold, the perfect duck</h1>
      <div className='card' style={cardStyles}>
        <div className='videos'>
          <Video videoId='BepD5Kkl8Tg' />
        </div>
      </div>
    </>
  );
};

export default Videos;
