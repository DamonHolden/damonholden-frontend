import { useState } from 'react';

const ArrayConverter = () => {
  const [convertedArray, setConvertedArray] = useState();
  return (
    <>
      <h1>array converter</h1>
      <div className='card'>
        <textarea id='list'></textarea>
        <button
          onClick={() => {
            const text = document.getElementById('list').value;
            let betterText = '';
            const wordArray = text.split(/\n/g);
            wordArray.forEach((element) => {
              betterText += '"' + element + '",\n';
            });
            console.log(betterText);
            setConvertedArray(betterText);
          }}
        >
          Convert to valid array
        </button>
        <textarea defaultValue={convertedArray}></textarea>
      </div>
    </>
  );
};

export default ArrayConverter;
