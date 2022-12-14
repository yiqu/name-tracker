// eslint-disable-next-line no-unused-vars
import styles from './Name.module.scss';
import Input from '../input/Input';
import { useEffect, useRef } from 'react';

const Name = (props) => {

  const nameRef = useRef();
  const id = 'userName';
  const name = 'Name';
  const type = 'text';

  useEffect(() => {
    if ((''+props.nameValue).trim() === '') {
      nameRef.current.activateFocus();
    }
  }, [props.nameValue, props.submitDateChange]);


  const nameChangeHandler = (name) => {
    const nameResult = name ?? '';
    props.inputChange({
      [id]: nameResult
    });
  };

  return (
    <Input inputId={ id } inputName={ name } inputType={ type } inputValue={ props.nameValue }
      onInputChange={ nameChangeHandler } ref={ nameRef }>
    </Input>
    
  );
};


export default Name;