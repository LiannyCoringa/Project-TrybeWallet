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
    total: number,
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

export type WalletState = {
  id: number,
  value: string,
  description: string,
  currency: string,
  method: string,
  tag: string,
  exchangeRates: {
    USD: {
      code: string,
      codein: string,
      name: string,
      ask: string,
    },
    USDT: {
      code: string,
      codein: string,
      name: string,
      ask: string,
    },
    CAD: {
      code: string,
      codein: string,
      name: string,
      ask: string,
    },
    GBP: {
      code: string,
      codein: string,
      name: string,
      ask: string,
    },
    ARS: {
      code: string,
      codein: string,
      name: string,
      ask: string,
    },
    BTC: {
      code: string,
      codein: string,
      name: string,
      ask: string,
    },
    LTC: {
      code: string,
      codein: string,
      name: string,
      ask: string,
    },
    EUR: {
      code: string,
      codein: string,
      name: string,
      ask: string,
    },
    JPY: {
      code: string,
      codein: string,
      name: string,
      ask: string,
    },
    CHF: {
      code: string,
      codein: string,
      name: string,
      ask: string,
    },
    AUD: {
      code: string,
      codein: string,
      name: string,
      ask: string,
    },
    CNY: {
      code: string,
      codein: string,
      name: string,
      ask: string,
    },
    ILS: {
      code: string,
      codein: string,
      name: string,
      ask: string,
    },
    ETH: {
      code: string,
      codein: string,
      name: string,
      ask: string,
    },
    XRP: {
      code: string,
      codein: string,
      name: string,
      ask: string,
    },
    DOGE: {
      code: string,
      codein: string,
      name: string,
      ask: string,
    },
  };
};
