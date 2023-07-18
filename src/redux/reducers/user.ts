import { AnyAction } from 'redux';
import { USER_EMAIL } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  'e-mail': '',
};

const user = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case USER_EMAIL:
      return {
        ...state,
        'e-mail': action.payload,
      };
    default:
      return state;
  }
};

export default user;
