import { useState } from 'react';

const GradeInput = (props) => {
  const [val, setVal] = useState('');

  return (
    <label>
      {props.label}
      <br />
      <input
        className='grade-input'
        value={val}
        onChange={(e) => {
          if (
            !isNaN(Number(e.currentTarget.value)) &&
            e.currentTarget.value.length <= 2
          )
            setVal(e.currentTarget.value);
        }}
        type='number'
        id={props.id}
        name={props.id}
      />
      <br />
    </label>
  );
};

export default GradeInput;
