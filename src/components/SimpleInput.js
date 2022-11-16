import { useState, useRef } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const nameInputRef = useRef();

  const enteredNameChangeHandler = e => setEnteredName(e.target.value);

  const formSubmitHandler = e => {
    e.preventDefault();
    const enteredValue = nameInputRef.current.value;

    if (enteredValue.trim() === '') {
      return;
    }

    console.log('entered value with ref', enteredValue);

    setEnteredName('')
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input
          onChange={enteredNameChangeHandler}
          ref={nameInputRef}
          type='text'
          id='name'
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
