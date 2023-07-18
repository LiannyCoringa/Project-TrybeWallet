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
