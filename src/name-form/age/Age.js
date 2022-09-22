// eslint-disable-next-line no-unused-vars
import styles from './Age.module.scss';
import Input from '../input/Input';
import { useEffect, useRef } from 'react';


const Age = (props) => {

  const ageRef = useRef();
  const id = 'userAge';
  const name = 'Age';
  const type = 'number';

  useEffect(() => {
    if ((+props.ageValue) < 1) {
      ageRef.current.activateFocus();
    }
  }, [props.ageValue, props.submitDateChange]);

  const onAgeChangeHandler = (age) => {
    const ageResult = age ?? -1;
    props.inputChange({
      [id]: ageResult
    });
  };


  return (
    <Input inputId={ id } inputName={ name } inputType={ type } inputValue={ props.ageValue }
      onInputChange={ onAgeChangeHandler } ref={ ageRef }>
    </Input>
  );
};


export default Age;