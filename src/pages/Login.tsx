import { useState } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import actionEmail from '../redux/actions';

function Login() {
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z0-9]+$/i;
  const [email, setEmail] = useState(false);
  const [inputEmail, setInputEmail] = useState('');
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (emailRegex.test(event.target.value)) {
      setEmail(true);
    } else {
      setEmail(false);
    }
    setInputEmail(event.target.value);
  };
  const [password, setPassword] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length >= 6) {
      setPassword(true);
    } else {
      setPassword(false);
    }
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    navigate('/carteira');
    dispatch(actionEmail(inputEmail));
  };

  return (
    <form>
      <input
        type="text"
        data-testid="email-input"
        onChange={ (event) => handleChangeEmail(event) }
      />
      <input
        type="text"
        data-testid="password-input"
        minLength={ 6 }
        onChange={ (event) => handleChange(event) }
      />
      { email && password
        ? <button type="button" onClick={ handleClick }>Entrar</button>
        : <button disabled>Entrar</button> }

    </form>
  );
}

export default Login;
