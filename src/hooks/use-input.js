import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false
};

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return {
      value: action.value,
      isTouched: state.isTouched
    };
  }
  if (action.type === 'BLUR') {
    return {
      isTouched: true,
      value: state.value
    };
  }
  if (action.type === 'RESET') {
    return {
      value: '',
      isTouched: false
    };
  }
  return initialInputState;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

  // const [enteredValue, setEnteredValue] = useState('');
  // const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(inputState.value);//enteredValue.trim() !== '';
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = e => {
    dispatch({
      type: 'INPUT',
      value: e.target.value
    });
    // setEnteredValue(e.target.value);
  };
  const inputBlurHandler = e => {
    dispatch({
      type: 'BLUR'
    });
    // setIsTouched(true);
  };

  const reset = () => {
    dispatch({
      type: 'RESET'
    });
    // setEnteredValue('');
    // setIsTouched(false);
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;