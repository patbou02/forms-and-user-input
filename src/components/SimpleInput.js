import { useState } from 'react';

import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(value => value.trim() !== '');

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredEmailIsValid = (enteredEmail.trim() !== '' && enteredEmail.includes('@'));
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  // if we had more fields, we'd have additional variables such as enteredAgeIsValid.

  let formIsValid = false;

  /* if there were more fields we'd have more states as in #1 above, and then we'd do:
    if (enteredNameIsValid && enteredAgeIsValid) {...} else {...} where we'd
    set formIsValid to TRUE if all the dependencies are true otherwise we'd set it to FALSE.
  */
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const enteredEmailChangeHandler = e => setEnteredEmail(e.target.value);
  const emailInputBlurHandler = () => setEnteredEmailTouched(true);

  const formSubmitHandler = e => {
    e.preventDefault();

    setEnteredEmailTouched(true);

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    resetNameInput();
    
    setEnteredEmail('');
    setEnteredEmailTouched(false);
  };

  const nameInputClasses = `form-control ${nameInputHasError && 'invalid'}`;
  const emailInputClasses = `form-control ${emailInputIsInvalid && 'invalid'}`;

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          type='text'
          id='name'
          value={enteredName}
        />
        {nameInputHasError && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input
          onChange={enteredEmailChangeHandler}
          onBlur={emailInputBlurHandler}
          type='text'
          id='email'
          value={enteredEmail}
        />
        {emailInputIsInvalid && <p className='error-text'>Email must contain an @ symbol.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
