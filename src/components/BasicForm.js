import { useState } from 'react';

import useBasicFormInput from '../hooks/use-basic-form-input';

const BasicForm = (props) => {
  // first name
  const {
    value: firstName,
    isValid: firstNameIsValid,
    fieldHasError: firstNameHasError,
    changeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler,
    reset: resetFirstName
  } = useBasicFormInput(value => value.trim() !== '');
  //const [firstName, setFirstName] = useState('');
  //const [firstNameIsTouched, setFirstNameIsTouched] = useState(false);
  //const firstNameIsValid = firstName.trim() !== '';
  //const firstNameHasError = !firstNameIsValid && firstNameIsTouched;

  //const firstNameChangeHandler = e => setFirstName(e.target.value);
  //const firstNameBlurHandler = e => setFirstNameIsTouched(true);

  // last name
  const {
    value: lastName,
    isValid: lastNameIsValid,
    fieldHasError: lastNameHasError,
    changeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler,
    reset: resetLastName
  } = useBasicFormInput(value => value.trim() !== '');
  //const [lastName, setLastName] = useState('');
  //const [lastNameIsTouched, setLastNameIsTouched] = useState(false);
  //const lastNameIsValid = lastName.trim() !== '';
  //const lastNameHasError = !lastNameIsValid && lastNameIsTouched;

  //const lastNameChangeHandler = e => setLastName(e.target.value);
  //const lastNameBlurHandler = e => setLastNameIsTouched(true);

  // email
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const [email, setEmail] = useState('');
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const emailIsValid = email.trim() !== '' && email.toLowerCase().match(emailRegex);
  const emailHasError = !emailIsValid && emailIsTouched;

  const emailChangeHandler = e => setEmail(e.target.value);
  const emailBlurHandler = e => setEmailIsTouched(true);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = e => {
    e.preventDefault();
    console.log('inside form submit handler');

    if (!firstNameIsValid || !lastNameIsValid || !emailIsValid) {
      console.log('some field is invalid. stop submitting form');
      return;
    }

    resetFirstName();
    resetLastName();
    //setFirstName('');
    //setFirstNameIsTouched(false);
    //setLastName('');
    //setLastNameIsTouched(false);
    setEmail('');
    setEmailIsTouched(false);
  };

  const firstNameClasses = `form-control ${firstNameHasError && 'invalid'}`;
  const lastNameClasses = `form-control ${lastNameHasError && 'invalid'}`;
  const emailClasses = `form-control ${emailHasError && 'invalid'}`;

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstName}
          />
          {firstNameHasError && <p className='error-text'>Please enter a valid value.</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastName}
          />
          {lastNameHasError && <p className='error-text'>Please enter a valid value.</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
        {emailHasError && <p className='error-text'>Please enter a valid email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
