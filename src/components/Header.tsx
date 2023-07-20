import { useSelector } from 'react-redux';
import { RootState } from '../types';

function Header() {
  const stateEmail = useSelector((state: RootState) => state.user.email);
  const stateTotal = useSelector((state: RootState) => state.wallet.expenses);

  let total = 0;
  stateTotal.forEach((state: any) => {
    const moedaEscolhida = state.exchangeRates[state.currency].ask;
    const totalValor = (Number(moedaEscolhida) * Number(state.value)).toFixed(2);
    total += Number(totalValor);
  });

  return (
    <div>
      <p data-testid="email-field">{ stateEmail }</p>
      <p data-testid="total-field">{ total.toFixed(2) }</p>
      <p data-testid="header-currency-field">BRL</p>
    </div>
  );
}

export default Header;
