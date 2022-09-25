import styles from './NameForm.module.scss';
import Name from './name/Name';
import Age from './age/Age';
import Submit from './submit/Submit';
import Alert from './alert-message/Alert';
import React, { useEffect, useReducer, useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import * as fromNameFormActions from './store/NameForm.actions';
import * as fromNameFormReducer from './store/NameForm.reducer';
import DateDisplay from '../shared/date-display/DateDisplay';
import NameListContext from '../core/store/names-context';

const NameForm = (props) => {

  const nameListCtx = useContext(NameListContext);

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
      const inputValid = (+(userFormState.userAge) > 0) && ((''+userFormState.userName).trim() !== '');
      if (inputValid) {
        nameListCtx.nameSubmitFn({
          userName: userFormState.userName,
          userAge: userFormState.userAge,
          date: new Date().getTime()
        });
      }
    }
  };

  const inputChangeHandler = (input) => {
    dispatchFormStateAction({ type: fromNameFormActions.USER_FORM_CHANGE,
      payload: input});
  };

  // function curry currying to get a variable from the function when clicking the Alert dom
  const alertClickHandler = (dateClicked) => (event) => {
    console.log("dismiss alert", dateClicked, event);
    dispatchFormStateAction({ type: fromNameFormActions.USER_FORM_ERROR_DISMISS, payload: dateClicked });
  };


  return (
    <form className={ `${styles.main}` }>
      { userFormState.hasError && <Alert message={ userFormState.errorMsg } onClick={ alertClickHandler(new Date().getTime()) }></Alert> }

      <React.Fragment>
        { domReady && ReactDOM.createPortal((
          <React.Fragment>
            <DateDisplay date={ userFormState.lastErrMsgDate } prefix={ `Last error date: ` }/>
          </React.Fragment>), document.getElementById('last-error-occured-node')) }
      </React.Fragment>
      

      <Name inputChange={ inputChangeHandler } nameValue={ userFormState.userName } submitDateChange={ userFormState.submitTime }></Name>

      <Age inputChange={ inputChangeHandler } ageValue={ userFormState.userAge } submitDateChange={ userFormState.submitTime }></Age>

      <Submit actionClick={ actionHandler }></Submit>

      <div className={ `text-muted ${styles.help}` }>
        { JSON.stringify(userFormState) }
      </div>
    </form>
  );
};

export default NameForm;