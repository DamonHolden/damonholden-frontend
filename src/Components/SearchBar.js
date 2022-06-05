import React from 'react';

export const SearchBar = (props) => {
  return (
    <div className='searchbar'>
      <input
        className='search-input'
        ref={props.componentRef}
        type='text'
        onKeyDown={(e) => {
          if (e.key === 'Enter') props.searchFunction();
        }}
      />
      <button
        className='search-button-primary'
        onClick={() => props.searchFunction()}
      >
        Search
      </button>
    </div>
  );
};
