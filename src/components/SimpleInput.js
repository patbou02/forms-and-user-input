import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  // if we had more fields, we'd have additional variables such as enteredAgeIsValid.
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;

  /* if there were more fields we'd have more states as in #1 above, and then we'd do:
    if (enteredNameIsValid && enteredAgeIsValid) {...} else {...} where we'd
    set formIsValid to TRUE if all the dependencies are true otherwise we'd set it to FALSE.
  */
  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const enteredNameChangeHandler = e => {
    setEnteredName(e.target.value);
  };

  const nameInputBlurHandler = e => {
    setEnteredNameTouched(true);
  };

  const formSubmitHandler = e => {
    e.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    setEnteredName('');
    setEnteredNameTouched(false);
  };

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
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
