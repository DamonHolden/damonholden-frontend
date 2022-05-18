import { useContext, useState } from 'react';
import { DarkThemeContext } from './DarkThemeContext';
import axios from 'axios';

const DatabaseTester = () => {
  const { darkTheme } = useContext(DarkThemeContext);
  const [response, setResponse] = useState(
    'No response from backend this time'
  );
  const cardStyles = {
    backgroundColor: darkTheme ? 'rgb(48, 48, 48)' : '',
    color: darkTheme ? 'white' : '',
  };

  axios
    .get('https://damonholden-backend.herokuapp.com/endpoint')
    .then((response) => {
      setResponse(response.data);
    });

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
      <div className='card'>
        <h2>{response}</h2>
        {response === 'Hello from the Backend!!!' ? (
          <p>provided by express</p>
        ) : null}
      </div>
    </>
  );
};

export default DatabaseTester;
