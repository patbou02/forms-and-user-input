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

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => (value.trim() !== '' && value.includes('@')));

  // if we had more fields, we'd have additional variables such as enteredAgeIsValid.

  let formIsValid = false;

  /* if there were more fields we'd have more states as in #1 above, and then we'd do:
    if (enteredNameIsValid && enteredAgeIsValid) {...} else {...} where we'd
    set formIsValid to TRUE if all the dependencies are true otherwise we'd set it to FALSE.
  */
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = e => {
    e.preventDefault();

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = `form-control ${nameInputHasError && 'invalid'}`;
  const emailInputClasses = `form-control ${emailInputHasError && 'invalid'}`;

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
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          type='text'
          id='email'
          value={enteredEmail}
        />
        {emailInputHasError && <p className='error-text'>Email must contain an @ symbol.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
