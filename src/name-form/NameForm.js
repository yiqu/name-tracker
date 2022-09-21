import styles from './NameForm.module.scss';
import Name from './name/Name';
import Age from './age/Age';
import Submit from './submit/Submit';
import Alert from './alert-message/Alert';
import { useReducer } from 'react';
import * as fromNameFormActions from './store/NameForm.actions';
import * as fromNameFormReducer from './store/NameForm.reducer';

const NameForm = (props) => {

  // Use Reducer way
  const [userFormState, dispatchFormStateAction] = useReducer(fromNameFormReducer.userFormReducer,
    fromNameFormReducer.userFormInitialState);


  const actionHandler = (btnId) => {
    dispatchFormStateAction({ type: fromNameFormActions.USER_FORM_ACTION, payload: btnId });
    props.onNameSubmit({
      userName: userFormState.userName,
      userAge: userFormState.userAge,
    });
  };

  const inputChangeHandler = (input) => {
    dispatchFormStateAction({ type: fromNameFormActions.USER_FORM_CHANGE,
      payload: input});
  };

  const alertClickHandler = () => {
    dispatchFormStateAction({ type: fromNameFormActions.USER_FORM_ERROR_DISMISS });
  };

  const loadingHandler = (load) => {
    console.log(load);
  };

  return (
    <form className={ `${styles.main}` }>
      { userFormState.hasError && <Alert message={ userFormState.errorMsg } onClick={ alertClickHandler }></Alert> }
      
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