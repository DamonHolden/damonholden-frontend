import { useState } from 'react';

const GradeInput = (props) => {
  const [val, setVal] = useState('');

  return (
    <label>
      {props.label}
      <br />
      <input
        id={props.id}
        className='grade-input'
        value={val}
        onChange={(e) => {
          if (e.currentTarget.value.length <= 2) setVal(e.currentTarget.value);
        }}
        onKeyDown={(e) => {
          if (['e', '-', '+', '.'].includes(e.key)) e.preventDefault();
        }}
        type='number'
      />
      <br />
    </label>
  );
};

export default GradeInput;
