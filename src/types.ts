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
