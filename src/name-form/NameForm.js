import styles from './NameForm.module.scss';
import Name from './name/Name';
import Age from './age/Age';
import Submit from './submit/Submit';
import Alert from './alert-message/Alert';
import { useState } from 'react';

const NameForm = (props) => {

  const [userInfo, setUserInfo] = useState({
    userName: 'Kevin',
    userAge: 20,
    hasError: false,
    errorMsg: '',
    submitDisabled: false
  });

  const actionHandler = (btnId) => {
    if (btnId === 'submit') {
      if (userInfo.userAge > 0 && userInfo.userName.trim() !== '') {
        setUserInfo((prevState) => {
          return {
            ...prevState,
            hasError: false,
            errorMsg: undefined
          };
        });
        props.onNameSubmit({
          userName: userInfo.userName,
          userAge: userInfo.userAge,
        });
      } else {
        setUserInfo((prevState) => {
          return {
            ...prevState,
            hasError: true,
            errorMsg: 'Check your inputs!'
          };
        });
      }
    } else if (btnId === 'reset') {
      setUserInfo((prevState) => {
        return {
          userName: '',
          userAge: ''
        };
      });
    }
  };

  const inputChangeHandler = (input) => {
    setUserInfo((prevState) => {
      const state = {
        ...prevState,
        ...input,
      };
      const disableBtn = state.userName && ((+state.userAge) > 0);
      return {
        ...state,
        submitDisabled: !disableBtn
      };
    });
  };


  return (
    <form className={ `${styles.main}` }>
      <Alert hasAlert={ userInfo.hasError } message={ userInfo.errorMsg }></Alert>
      <Name inputChange={ inputChangeHandler } nameValue={ userInfo.userName }></Name>
      <Age inputChange={ inputChangeHandler } ageValue={ userInfo.userAge }></Age>
      <Submit actionClick={ actionHandler } disabled={ false }></Submit>
      <div className={ `text-muted ${styles.help}` }>
        { JSON.stringify(userInfo) }
      </div>
    </form>
  );
};

export default NameForm;