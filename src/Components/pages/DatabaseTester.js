import { useRef, useState } from 'react';
import { Card } from '../Card';
import axios from 'axios';
import { PageWrapper } from '../PageWrapper';
import { SearchBar } from '../SearchBar';

export const DatabaseTester = () => {
  const [dBResponse, setDBResponse] = useState('');

  const searchName = useRef();

  const searchForPokemon = () => {
    if (searchName.current.value === '') setDBResponse('');
    else {
      axios
        .get(
          `https://damonholden-backend.herokuapp.com/pokemon/${searchName.current.value.toLowerCase()}`
        )
        .then((response) => {
          if (response.data === null) setDBResponse('');
          else setDBResponse(response.data);
        });
    }
  };

  return (
    <PageWrapper>
      <h1>pokemon search</h1>
      <Card contentDirection={`column`}>
        <SearchBar
          componentRef={searchName}
          searchFunction={searchForPokemon}
        />
      </Card>
      {dBResponse && (
        <Card contentDirection={`column`}>
          <div className='content-row'>
            <img
              style={{ width: '300px' }}
              src={
                dBResponse.name
                  ? require(`../../images/pokemon/${dBResponse.name}.png`)
                  : null
              }
              alt='pokemon'
            />
            <div className='content-column'>
              <div className='key-value'>
                <h3>Name:</h3>
                <h4>{dBResponse.name}</h4>
              </div>
              <div className='key-value'>
                <h3>Type:</h3>
                <h4>{dBResponse.type}</h4>
              </div>
              <div className='key-value'>
                <h3>Pokedex Number:</h3>
                <h4>{dBResponse.pokedex_number}</h4>
              </div>
            </div>
          </div>
        </Card>
      )}
    </PageWrapper>
  );
};
