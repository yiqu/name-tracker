// eslint-disable-next-line no-unused-vars
import styles from './Age.module.scss';
import Input from '../input/Input';


const Age = (props) => {

  const id = 'userAge';
  const name = 'Age';
  const type = 'number';


  const onAgeChangeHandler = (age) => {
    const ageResult = age ?? -1;
    props.inputChange({
      [id]: ageResult
    });
  };

  return (
    <Input inputId={ id } inputName={ name } inputType={ type } inputValue={ props.ageValue }
      onInputChange={ onAgeChangeHandler }>
    </Input>
  );
};


export default Age;