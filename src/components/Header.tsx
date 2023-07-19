import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState } from '../types';

function Header() {
  const stateEmail = useSelector((state: RootState) => state.user.email);
  const stateTotal = useSelector((state: RootState) => state.wallet.expenses);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    stateTotal.forEach((state: any) => {
      const moedaEscolhida = state.exchangeRates[state.currency].ask;
      const totalValor = (Number(moedaEscolhida) * Number(state.value)).toFixed(2);
      setTotal(total + Number(totalValor));
    });
  }, [stateTotal]);

  return (
    <div>
      <p data-testid="email-field">{ stateEmail }</p>
      <p data-testid="total-field">{ total }</p>
      <p data-testid="header-currency-field">BRL</p>
    </div>
  );
}

export default Header;
