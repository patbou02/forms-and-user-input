import { useState } from 'react';

const useBasicFormInput = (validateValue) => {
  const [fieldValue, setFieldValue] = useState('');
  const [fieldIsTouched, setFieldIsTouched] = useState(false);

  const fieldIsValid = validateValue(fieldValue);
  const fieldHasError = !fieldIsValid && fieldIsTouched;

  const changeHandler = e => setFieldValue(e.target.value);
  const blurHandler = e => setFieldIsTouched(true);

  const reset = () => {
    setFieldValue('');
    setFieldIsTouched(false);
  };

  return {
    value: fieldValue,
    isValid: fieldIsValid,
    fieldHasError,
    changeHandler,
    blurHandler,
    reset
  };
};

export default useBasicFormInput;