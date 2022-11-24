import { useState } from 'react';

import useBasicFormInput from '../hooks/use-basic-form-input';

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => (value.trim() !== '' && value.toLowerCase().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/));

const BasicForm = (props) => {
  // first name
  const {
    value: firstName,
    isValid: firstNameIsValid,
    fieldHasError: firstNameHasError,
    changeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler,
    reset: resetFirstName
  } = useBasicFormInput(isNotEmpty);

  // last name
  const {
    value: lastName,
    isValid: lastNameIsValid,
    fieldHasError: lastNameHasError,
    changeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler,
    reset: resetLastName
  } = useBasicFormInput(isNotEmpty);

  // email
  const {
    value: email,
    isValid: emailIsValid,
    fieldHasError: emailHasError,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: resetEmail
  } = useBasicFormInput(isEmail);

  let formIsValid = false;

  formIsValid = (firstNameIsValid && lastNameIsValid && emailIsValid);

  const formSubmitHandler = e => {
    e.preventDefault();

    if (!formIsValid) return;

    console.log('Submitted', firstName, lastName, email);

    resetFirstName();
    resetLastName();
    resetEmail();
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
