import React, { useState } from 'react';
import { Header } from './Header';

export const CollapsableNavbar = () => {
  const [expand, setExpand] = useState(false);

  return (
    <>
      <button
        className='button-secondary nav-toggle'
        onClick={() => setExpand(!expand)}
      >
        {expand ? 'close' : 'Nav Links'}
      </button>
      {expand && <Header />}
    </>
  );
};
