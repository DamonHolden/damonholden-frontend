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

  const searchForPokemon = () => {
    axios
      .get(
        `https://damonholden-backend-2.herokuapp.com/pokemon/${searchName.current.value}`
      )
      .then((response) => {
        if (response.data === null) return;
        else setResponse(response.data);
      });
  };

  return (
    <animated.div className='page' style={springProps}>
      <h1>pokemon Search</h1>
      <Card>
        <div>
          <input
            ref={searchName}
            type='text'
            onKeyDown={(e) => {
              if (e.key === 'Enter') searchForPokemon();
            }}
          />
          <button className='button-primary' onClick={() => searchForPokemon()}>
            Search
          </button>
        </div>
      </Card>
      <Card>
        <div
          className='grade-form-area'
          style={{
            alignItems: 'center',
          }}
        >
          <img
            style={{ width: '200px' }}
            src={
              response.name
                ? require(`../images/pokemon/${response.name}.png`)
                : null
            }
            alt='pokemon'
          />
          <div>
            <h2>Name: {response.name}</h2>
            <h2>Type: {response.type}</h2>
            <h2>pokedex number: {response.pokedex_number}</h2>
          </div>
        </div>
      </Card>
    </animated.div>
  );
};
