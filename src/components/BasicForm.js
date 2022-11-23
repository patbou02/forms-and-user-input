import { useState } from 'react';

const BasicForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [firstNameIsTouched, setFirstNameIsTouched] = useState(false);
  const firstNameIsValid = firstName.trim() !== '';
  const firstNameHasError = !firstNameIsValid && firstNameIsTouched;

  const firstNameChangeHandler = e => setFirstName(e.target.value);
  const firstNameBlurHandler = e => setFirstNameIsTouched(true);

  const [lastName, setLastName] = useState('');
  const [lastNameIsTouched, setLastNameIsTouched] = useState(false);
  const lastNameIsValid = lastName.trim() !== '';
  const lastNameHasError = !lastNameIsValid && lastNameIsTouched;

  const lastNameChangeHandler = e => setLastName(e.target.value);
  const lastNameBlurHandler = e => setLastNameIsTouched(true);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = e => {
    e.preventDefault();
    console.log('inside form submit handler');

    if (!firstNameIsValid || !lastNameIsValid) {
      console.log('some field is invalid. stop submitting form');
      return;
    }

    setFirstName('');
    setFirstNameIsTouched(false);
    setLastName('');
    setLastNameIsTouched(false);
  };

  const firstNameClasses = `form-control ${firstNameHasError && 'invalid'}`;
  const lastNameClasses = `form-control ${lastNameHasError && 'invalid'}`;

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
          />
          {lastNameHasError && <p className='error-text'>Please enter a valid value.</p>}
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
