/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import styles from './Input.module.scss';
import { debounceTime, map, BehaviorSubject, switchMap, of, delay, skip } from 'rxjs';

const Input = (props) => {

  const inputRef = useRef(undefined);
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const inputId = props.inputId;
  const inputName = props.inputName;
  const inputType = props.inputType;
  const inputValue = props.inputValue;
  const inputValue$ = new BehaviorSubject(props.inputValue);
  const inputPropRef = useRef(inputValue$);

  useEffect(() => {
    inputPropRef.current.next(inputValue);
  }, [inputPropRef, inputValue]);

  const changeHandler = (e) => {
    props.onInputChange(e.target?.value);
  };

  useEffect(() => {
    const input$ = inputPropRef.current.pipe(
      debounceTime(700),
      // act as a HTTP call going out on every check
      switchMap((res) => {
        setIsLoading((prev) => {
          return true;
        });
        console.log("HTTP call for: " + res);
        return of('').pipe(
          delay(1000),
          map((r) => {
            return (((res + '').trim() !== '') && ((+res) !== 0)) && res+'' !== 'kevin';
          }),
          map((valid) => {
            setIsLoading((prev) => {
              return false;
            });
            setIsValid(valid);
          })
        );
      }),
      // map((res) => {
      //   if ((((res + '').trim() !== '') && ((+res) !== 0)) && res+'' !== 'kevin') {
      //     setIsValid(true);
      //   } else {
      //     setIsValid(false);
      //   }
      // })
    );
    const sub = input$.subscribe();
    return (() => {
      setIsValid(true);
      setIsLoading((prev) => {
        return false;
      });
      sub.unsubscribe();
    });
  }, [inputValue]);

  return (
    <div className={ `form-group ${styles.input}` }>
      <label htmlFor="userAge"> {inputName} </label> {inputRef.current?.value ? `(${inputRef.current?.value})` : ''} 
      { isValid ? '':' (invalid)' } { isLoading ? " validating... " : ""}
      <input type={ inputType } className="form-control" id={ inputId }
        onChange={ changeHandler } value={ inputValue } ref={ inputRef }/>
    </div>
  );
};

export const getNewBSubject = (value) => {
  return new BehaviorSubject(value.inputValue);
};

export default Input;