import React, { SyntheticEvent } from 'react';
import styles from './task2.module.css';
import { useInput } from '../../customHook/useValidation';
import { ErrorValidation } from './Error/Error';
import { error } from '../../constants/error';

function Task2() {

  const email = useInput('', { isEmpty: true, isEmail: true });
  const password = useInput('', { isEmpty: true, minLength: 8 });
  const checkValidate = useInput('', { onSubmit: false });

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    return email.inputValid && password.inputValid
      ? alert('вход успешно выполнен')
      : null;
  };

  return (

    <form onSubmit={handleSubmit} className={styles.LoginFormBlock}>
      <div className={styles.titleBox}>
        <h3>Вход</h3>
        <p>Для существующих пользователей</p>
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.inputBox}>
          <span>E-Mail:</span>
          <input
            className={styles.input}
            type='text'
            placeholder='Enter your e-Mail'
            value={email.value}
            onChange={email.onChange}
          />
          {checkValidate.onSubmit && email.isEmpty && (
            <ErrorValidation>{error.empty}</ErrorValidation>
          )}
          {checkValidate.onSubmit &&
          (email.isEmpty ||
            (email.emailError && (
              <ErrorValidation>{error.emailCorrectly}</ErrorValidation>
            )))}
        </div>
        <div className={styles.inputBox}>
          <span>Password:</span>
          <input
            className={styles.input}
            type='password'
            value={password.value}
            placeholder='Password'
            onChange={password.onChange}
          />
          {checkValidate.onSubmit && password.isEmpty && (
            <ErrorValidation>{error.empty}</ErrorValidation>
          )}
          {checkValidate.onSubmit &&
          (password.isEmpty ||
            (password.minLengthError && (
              <ErrorValidation>
                {error.longEight}
              </ErrorValidation>
            )))}
        </div>
      </div>
      <button className={styles.button} type='submit'
              onClick={() => checkValidate.onClick()}
      >Войти в систему
      </button>
    </form>

  );
}

export default Task2;
