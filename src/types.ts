import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type RootState = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
    editor: boolean,
    idToEdit: number,
  },
};

export type Dispatch = ThunkDispatch<RootState, null, AnyAction>;

export type Despesas = {
  id: number,
  value: string,
  description: string,
  currency: string,
  method: string,
  tag: string,
};
