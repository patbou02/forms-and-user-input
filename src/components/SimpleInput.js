import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameChangeHandler = e => {
    setEnteredName(e.target.value);

    if (e.target.value.trim() !== '') {
      setEnteredNameIsValid(true);
    }
  };

  const nameInputBlurHandler = e => {
    setEnteredNameTouched(true);

    // if (enteredName.trim() === '') {
    //   setEnteredNameIsValid(false);
    // } else {
    //   setEnteredNameIsValid(true);
    // }
    setEnteredNameIsValid(enteredName.trim() !== '');
  };

  const formSubmitHandler = e => {
    e.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    setEnteredName('');
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = `form-control ${nameInputIsInvalid && 'invalid'}`;

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          onChange={enteredNameChangeHandler}
          onBlur={nameInputBlurHandler}
          type='text'
          id='name'
          value={enteredName}
        />
        {nameInputIsInvalid && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
