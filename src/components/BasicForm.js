import { useState } from 'react';

const BasicForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [firstNameIsTouched, setFirstNameIsTouched] = useState(false);

  const firstNameIsValid = firstName.trim() !== '';
  const firstNameHasError = !firstNameIsValid && firstNameIsTouched;

  const firstNameChangeHandler = e => setFirstName(e.target.value);
  const firstNameBlurHandler = e => setFirstNameIsTouched(true);

  let formIsValid = false;

  if (firstNameIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = e => {
    e.preventDefault();
    console.log('inside form submit handler');

    if (!firstNameIsValid) {
      console.log('some field is invalid. stop submitting form');
      return;
    }

    setFirstName('');
    setFirstNameIsTouched(false);
  };

  const firstNameClasses = `form-control ${firstNameHasError && 'invalid'}`;

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
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
