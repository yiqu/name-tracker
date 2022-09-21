import * as  fromUserFormActions from './NameForm.actions';

export const userFormInitialState = {
  userName: 'Cool Name',
  userAge: '30',
  submitTime: 0,
  hasError: false,
  errorMsg: '',
  submitDisabled: false
};

export const userFormReducer = (state, action) => {
    console.info(action);
    if (action.type === fromUserFormActions.USER_FORM_SUBMIT) {
      return {
        ...state,
        submitTime: new Date().getTime(),
        hasError: false,
        errorMsg: undefined
      };
    }
    if (action.type === fromUserFormActions.USER_FORM_RESET) {
      return {
        ...state,
        hasError: false,
        errorMsg: undefined,
        userName: '',
        userAge: '',
        submitDisabled: false
      };
    }
    if (action.type === fromUserFormActions.USER_FORM_ACTION) {
      const btnId = action.payload;
      if (btnId === 'submit') {
        return {
          ...state,
          submitTime: new Date().getTime(),
          hasError: false,
          errorMsg: undefined
        };
      } else if (btnId === 'reset') {
        return {
          ...state,
          hasError: false,
          errorMsg: undefined,
          userName: '',
          userAge: '',
          submitDisabled: true
        };
      }
    }
    if (action.type === fromUserFormActions.USER_FORM_CHANGE) {
      const bothInput = {
        ...state,
        ...action.payload
      };
      const { userName: name, userAge: age } = bothInput;
      const inputValid = (+(age) > 0) && (''+name.trim() !== '');
      
      return {
        ...state,
        ...action.payload,
        hasError: !inputValid,
        errorMsg: 'Check your inputs!',
        submitDisabled: !inputValid
      };
    }
    if (action.type === fromUserFormActions.USER_FORM_ERROR_DISMISS) {
      return {
        ...state,
        hasError: false,
        errorMsg: undefined
      };
    }
    return {
      ...state
    };
  };