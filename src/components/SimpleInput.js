import { useState, useRef } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const nameInputRef = useRef();
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const enteredNameChangeHandler = e => setEnteredName(e.target.value);

  const formSubmitHandler = e => {
    e.preventDefault();
    const enteredValue = nameInputRef.current.value;

    if (enteredValue.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    console.log('entered value with ref', enteredValue);

    setEnteredName('');
  }

  const nameInputClasses = `form-control ${!enteredNameIsValid && 'invalid'}`;

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          onChange={enteredNameChangeHandler}
          ref={nameInputRef}
          type='text'
          id='name'
          value={enteredName}
        />
        {!enteredNameIsValid && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
