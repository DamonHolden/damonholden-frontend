import { useContext } from 'react';
import { DarkThemeContext } from './DarkThemeContext';

const DatabaseTester = () => {
  const { darkTheme } = useContext(DarkThemeContext);
  const cardStyles = {
    backgroundColor: darkTheme ? 'rgb(48, 48, 48)' : '',
    color: darkTheme ? 'white' : '',
  };
  return (
    <>
      <h1>Database Tester</h1>
      <div className='card' style={cardStyles}>
        <h2>Wow, such empty</h2>
        <p>
          This section of the site is a placeholder for an eventual way to
          facilitate backend database communication.
        </p>
        <p>
          Currently, there is no database set-up at all, but eventually, this
          section of the site will allow users to produce API requests to a
          backend.
        </p>
      </div>
    </>
  );
};

export default DatabaseTester;
