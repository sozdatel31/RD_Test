import { useEffect, useState } from 'react';

export const useValidation = (value, validations) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  const [minLengthError, setMinLengthError] = useState(false);
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const pattern = /^[\s]+$/;

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case 'isEmpty':
          !pattern.test(value) && value.trim() ? setIsEmpty(false) : setIsEmpty(true);
          break;
        case 'isEmail':
          return String(value).toLowerCase().match(regex)
            ? setEmailError(false)
            : setEmailError(true);
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || emailError || minLengthError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, emailError, minLengthError]);

  return {
    isEmpty,
    minLengthError,
    emailError,
    inputValid,
  };
};

export const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [onSubmit, setOnSubmit] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onClick = () => {
    setOnSubmit(true);
  };

  const clear = () => {
    setValue(initialValue);
  };

  return {
    value,
    onChange,
    onClick,
    clear,
    onSubmit,
    ...valid,
  };
};
