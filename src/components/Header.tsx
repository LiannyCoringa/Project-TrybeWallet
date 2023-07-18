import { useSelector } from 'react-redux';
import { RootState } from '../types';

function Header() {
  const stateEmail = useSelector((state: RootState) => state.user.email);
  return (
    <div>
      <p data-testid="email-field">{ stateEmail }</p>
      <p data-testid="total-field">0</p>
      <p data-testid="header-currency-field">BRL</p>
    </div>
  );
}

export default Header;
