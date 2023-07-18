import { Dispatch } from 'redux';

export const USER_EMAIL = 'USER_EMAIL';
export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';

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
})

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
  }
}

export default actionEmail;
