import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Dispatch, RootState } from '../types';
import { fetchCurrencies, fetchExpenses } from '../redux/actions';

function WalletForm() {
  const dispatch: Dispatch = useDispatch();
  const [soma, setSoma] = useState(0);
  const [values, setValues] = useState({
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  });
  useEffect(() => {
    const fetchAPI = async () => {
      dispatch(fetchCurrencies());
    };
    fetchAPI();
  }, []);

  const stateCurrencies = useSelector((state: RootState) => state.wallet.currencies);
  const stateFiltro = stateCurrencies.filter((currencies) => currencies !== 'USDT');
  const stateExpenses = useSelector((state: RootState) => state.wallet.expenses);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLSelectElement>,
    nome: string,
  ) => {
    setValues({ ...values, [nome]: event.target.value });
  };

  const handleClick = () => {
    dispatch(fetchExpenses(values));
    setSoma(soma + 1);
    setValues({ ...values, id: soma, value: '', description: '' });
  };

  return (
    <div>
      <input
        type="text"
        data-testid="value-input"
        value={ values.value }
        onChange={ (event) => handleChange(event, 'value') }
      />
      <input
        type="text"
        data-testid="description-input"
        value={ values.description }
        onChange={ (event) => handleChange(event, 'description') }
      />
      <select
        data-testid="currency-input"
        onChange={ (event) => handleChange(event, 'currency') }
      >
        {(
          stateFiltro.map((currencies) => (
            <option key={ currencies[0] }>{ currencies }</option>
          ))
        )}
      </select>
      <select
        data-testid="method-input"
        onChange={ (event) => handleChange(event, 'method') }
      >
        <option>Dinheiro</option>
        <option>Cartão de crédito</option>
        <option>Cartão de débito</option>
      </select>
      <select
        data-testid="tag-input"
        onChange={ (event) => handleChange(event, 'tag') }
      >
        <option>Alimentação</option>
        <option>Lazer</option>
        <option>Trabalho</option>
        <option>Transporte</option>
        <option>Saúde</option>
      </select>
      <button type="button" onClick={ handleClick }>Adicionar despesa</button>
    </div>
  );
}

export default WalletForm;
