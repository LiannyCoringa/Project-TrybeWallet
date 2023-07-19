// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { AnyAction } from 'redux';
import { REQUEST_SUCCESS, REQUEST_SUCCESS_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case REQUEST_SUCCESS:
      return {
        ...state,
        currencies: action.payload,
      };
    case REQUEST_SUCCESS_EXPENSES:
      return {
        ...state,
        expenses: [...state.expenses, {
          ...action.payload.values,
          exchangeRates: { ...action.payload.data },
        }],
      };
    default:
      return state;
  }
};

export default wallet;
