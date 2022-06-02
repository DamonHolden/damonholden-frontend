import { useRef, useState } from 'react';
import { Card } from './Card';
import axios from 'axios';
import { animated, useSpring } from 'react-spring';

export const DatabaseTester = () => {
  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const searchName = useRef();

  const [response, setResponse] = useState(
    'No response from backend this time'
  );
  const [hasSearched, setHasSearched] = useState(false);

  return (
    <animated.div className='page' style={springProps}>
      <h1>Database Tester</h1>
      <Card>
        <input ref={searchName} type='text' />
        <button
          className='button-primary'
          onClick={() => {
            setHasSearched(true);
            axios
              .get(`http://localhost:3001/pokemon/${searchName.current.value}`)
              .then((response) => {
                setResponse(response.data);
              })
              .catch((error) => {
                console.log(error);
                setHasSearched(false);
              });
          }}
        >
          Search
        </button>
      </Card>
      {/* <Card>
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
      </Card> */}
      {hasSearched && (
        <Card>
          <h2>Name: {response.name}</h2>
          <h2>Type: {response.type}</h2>
          <h2>pokedex number: {response.pokedex_number}</h2>
          {response ? <p>provided by express</p> : null}
        </Card>
      )}
    </animated.div>
  );
};
