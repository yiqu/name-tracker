import { useRef } from 'react';
import styles from './Input.module.scss';

const Input = (props) => {

  const inputRef = useRef(undefined);

  const inputId = props.inputId;
  const inputName = props.inputName;
  const inputType = props.inputType;
  const inputValue = props.inputValue;

  const changeHandler = (e) => {
    props.onInputChange(e.target?.value);
  };

  return (
    <div className={ `form-group ${styles.input}` }>
      <label htmlFor="userAge"> {inputName} </label> {inputRef.current?.value ? `(${inputRef.current?.value})` : ''}
      <input type={ inputType } className="form-control" id={ inputId }
        onChange={ changeHandler } value={ inputValue } ref={ inputRef }/>
    </div>
  );
};

export default Input;