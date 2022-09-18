// eslint-disable-next-line no-unused-vars
import styles from './Name.module.scss';
import Input from '../input/Input';

const Name = (props) => {

  const id = 'userName';
  const name = 'Name';
  const type = 'text';


  const nameChangeHandler = (name) => {
    const nameResult = name ?? '';
    props.inputChange({
      [id]: nameResult
    });
  };

  return (
    <Input inputId={ id } inputName={ name } inputType={ type } inputValue={ props.nameValue }
      onInputChange={ nameChangeHandler }>
    </Input>
    
  );
};


export default Name;