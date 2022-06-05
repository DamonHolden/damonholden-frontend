import { useState } from 'react';
import { Card } from '../Card';
import { PageWrapper } from '../PageWrapper';

export const ArrayConverter = () => {
  const [convertedArray, setConvertedArray] = useState();

  const makeArray = () => {
    const text = document.getElementById('list').value;
    let betterText = '';
    const wordArray = text.split(/\n/g);
    if (document.getElementById('sort').checked) wordArray.sort();
    wordArray.forEach((element) => {
      if (element !== '') {
        betterText += "'" + element + "',\n";
      }
    });
    setConvertedArray(betterText.slice(0, -2));
  };
  return (
    <PageWrapper>
      <h1>array converter</h1>
      <Card contentDirection={`column`}>
        <textarea id='list'></textarea>
        <label>
          sort?
          <input id='sort' type='checkbox' />
        </label>
        <label>
          account for empty lines?
          <input id='empty-lines' type='checkbox' />
        </label>
        <button className='calculate-button' onClick={makeArray}>
          Convert to valid array
        </button>

        <textarea defaultValue={convertedArray}></textarea>
      </Card>
    </PageWrapper>
  );
};
