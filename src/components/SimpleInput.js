import { useRef } from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();

  const formSubmitHandler = e => {
    e.preventDefault();
    const enteredValue = nameInputRef.current.value;
    console.log('entered value with ref', enteredValue);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameInputRef}
          type='text'
          id='name'
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
