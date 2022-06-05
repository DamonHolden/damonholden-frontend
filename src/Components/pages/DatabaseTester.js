import { useRef, useState } from 'react';
import { Card } from '../Card';
import axios from 'axios';
import { PageWrapper } from '../PageWrapper';
import { SearchBar } from '../SearchBar';

export const DatabaseTester = () => {
  const [dBResponse, setDBResponse] = useState('');
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonType, setPokemonType] = useState('');
  const [pokemonNumber, setPokemonNumber] = useState('');

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
              onLoad={() => {
                setPokemonName(dBResponse.name);
                setPokemonType(dBResponse.type);
                setPokemonNumber(dBResponse.pokedex_number);
              }}
            />
            <div className='content-column'>
              <div className='key-value'>
                <h3>Name:</h3>
                <h4>{pokemonName}</h4>
              </div>
              <div className='key-value'>
                <h3>Type:</h3>
                <h4>{pokemonType}</h4>
              </div>
              <div className='key-value'>
                <h3>Pokedex Number:</h3>
                <h4>{pokemonNumber}</h4>
              </div>
            </div>
          </div>
        </Card>
      )}
    </PageWrapper>
  );
};
