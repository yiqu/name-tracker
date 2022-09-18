import styles from './Input.module.scss';

const Input = (props) => {

  const inputId = props.inputId;
  const inputName = props.inputName;
  const inputType = props.inputType;
  const inputValue = props.inputValue;

  const changeHandler = (e) => {
    props.onInputChange(e.target?.value);
  };

  return (
    <div className={ `form-group ${styles.input}` }>
      <label htmlFor="userAge"> {inputName} </label>
      <input type={ inputType } className="form-control" id={ inputId } onChange={ changeHandler } value={ inputValue }/>
    </div>
  );
};

export default Input;