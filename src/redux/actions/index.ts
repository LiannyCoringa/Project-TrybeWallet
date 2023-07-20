import { Dispatch } from 'redux';
import { Despesas } from '../../types';

export const USER_EMAIL = 'USER_EMAIL';
export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const DESPESAS = 'DESPESAS';
export const REQUEST_SUCCESS_EXPENSES = 'REQUEST_SUCCESS_EXPENSES';
export const DELETE_EXPENSES = 'DELETE_EXPENSES';
export const EDIT_EXPENSES = 'EDIT_EXPENSES';
export const EDIT_SUCCESS = 'EDIT_SUCCESS';

const actionEmail = (email: string) => ({
  type: USER_EMAIL,
  payload: email,
});

const requestStarted = () => ({
  type: REQUEST_STARTED,
});

const requestSuccess = (data: string[]) => ({
  type: REQUEST_SUCCESS,
  payload: data,
});

export function fetchCurrencies() {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestStarted());
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      const dataArray = Object.keys(data);
      const dataFiltro = dataArray.filter((currencies) => currencies !== 'USDT');
      dispatch(requestSuccess(dataFiltro));
    } catch (error: any) {
      console.log(error);
    }
  };
}

export const requestSuccessExpenses = (values: Despesas, data: any) => ({
  type: REQUEST_SUCCESS_EXPENSES,
  payload: {
    values,
    data,
  },
});

export function fetchExpenses(values: Despesas) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestStarted());
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      dispatch(requestSuccessExpenses(values, data));
    } catch (error: any) {
      console.log(error);
    }
  };
}

export const deleteExpenses = (id: any) => ({
  type: DELETE_EXPENSES,
  payload: id,
});

export const editExpenses = (id: any, edit: boolean) => ({
  type: EDIT_EXPENSES,
  payload: {
    id,
    edit,
  },
});

export const editSuccess = (values: Despesas, data: any, expenses: any) => ({
  type: EDIT_SUCCESS,
  payload: {
    values,
    data,
    expenses,
  },
});

export default actionEmail;
