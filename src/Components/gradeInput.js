import { useState } from 'react';

const GradeInput = (props) => {
  const [val, setVal] = useState();

  return (
    <label>
      {props.label}
      <br />
      <input
        className='grade-input'
        value={val}
        pattern='[0-9]*'
        onChange={(e) =>
          setVal((v) => (e.target.validity.valid ? e.target.value : v))
        }
        type='text'
        id={props.id}
        name={props.id}
        maxLength={2}
      />
      <br />
    </label>
  );
};

export default GradeInput;
