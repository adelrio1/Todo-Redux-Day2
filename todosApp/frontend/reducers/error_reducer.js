import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions.js';

const errorsReducer = (oldState = [], action) => {
  switch(action.type) {
    case RECEIVE_ERRORS:
      return action.errors.statusText;
    case CLEAR_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default errorsReducer;
