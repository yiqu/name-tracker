import * as  fromUserFormActions from './NameForm.actions';

const userFormReducer = (state, action) => {
    if (action.type === fromUserFormActions.USER_FORM_SUBMIT) {
    }
    if (action.type === fromUserFormActions.USER_FORM_RESET) {
    }
    return {
      ...state
    };
  };