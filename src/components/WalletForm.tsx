import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../types";
import { useEffect } from "react";
import { fetchCurrencies } from "../redux/actions";

function WalletForm() {
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    const fetchAPI = async () => {
      dispatch(fetchCurrencies());
    }
    fetchAPI()
  }, [])

  const stateCurrencies = useSelector((state: RootState) => state.wallet.currencies);
  const stateFiltro = stateCurrencies.filter((currencies) => currencies !== 'USDT');

  return (
    <div>
      <input type="text" data-testid="value-input" />
      <input type="text" data-testid="description-input" />
      <select data-testid="currency-input">
        {(
          stateFiltro.map((currencies) => (
          <option>{ currencies }</option>
          ))
        )}
      </select>
      <select data-testid="method-input">
        <option>Dinheiro</option>
        <option>Cartão de crédito</option>
        <option>Cartão de débito</option>
      </select>
      <select data-testid="tag-input">
        <option>Alimentação</option>
        <option>Lazer</option>
        <option>Trabalho</option>
        <option>Transporte</option>
        <option>Saúde</option>
      </select>
    </div>
  )
}

export default WalletForm;
