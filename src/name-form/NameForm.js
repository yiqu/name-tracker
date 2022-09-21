import styles from './NameForm.module.scss';
import Name from './name/Name';
import Age from './age/Age';
import Submit from './submit/Submit';
import Alert from './alert-message/Alert';
import React, { useEffect, useReducer, useState } from 'react';
import ReactDOM from 'react-dom';
import * as fromNameFormActions from './store/NameForm.actions';
import * as fromNameFormReducer from './store/NameForm.reducer';

const NameForm = (props) => {

  // Wait for DOM is painted to use portal
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);
  },[]);

  // Use Reducer way
  const [userFormState, dispatchFormStateAction] = useReducer(fromNameFormReducer.userFormReducer,
    fromNameFormReducer.userFormInitialState);


  const actionHandler = (btnId) => {
    dispatchFormStateAction({ type: fromNameFormActions.USER_FORM_ACTION, payload: btnId });
    if (btnId === 'submit') {
      props.onNameSubmit({
        userName: userFormState.userName,
        userAge: userFormState.userAge,
      });
    }
  };

  const inputChangeHandler = (input) => {
    dispatchFormStateAction({ type: fromNameFormActions.USER_FORM_CHANGE,
      payload: input});
  };

  // currying to get a variable from the function when clicking the Alert dom
  const alertClickHandler = (dateClicked) => (event) => {
    console.log("dismiss alert", dateClicked, event);
    dispatchFormStateAction({ type: fromNameFormActions.USER_FORM_ERROR_DISMISS, payload: dateClicked });
  };

  const loadingHandler = (load) => {
    console.log(load);
  };


  return (
    <form className={ `${styles.main}` }>
      { userFormState.hasError && <Alert message={ userFormState.errorMsg } onClick={ alertClickHandler(new Date().getTime()) }></Alert> }

      <React.Fragment>
        { domReady && ReactDOM.createPortal((
          <React.Fragment>
            Last error: {userFormState.lastErrMsgDate}
          </React.Fragment>), document.getElementById('last-error-occured-node')) }
      </React.Fragment>
      

      <Name inputChange={ inputChangeHandler } nameValue={ userFormState.userName } onLoadingChange={ loadingHandler }></Name>
      <Age inputChange={ inputChangeHandler } ageValue={ userFormState.userAge } onLoadingChange={ loadingHandler }></Age>
      <Submit actionClick={ actionHandler } disabled={ userFormState.submitDisabled }></Submit>

      <div className={ `text-muted ${styles.help}` }>
        { JSON.stringify(userFormState) }
      </div>
    </form>
  );
};

export default NameForm;