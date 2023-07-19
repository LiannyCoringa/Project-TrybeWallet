import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import App from './App';
import { renderWithRouterAndRedux } from './tests/helpers/renderWith';

describe('Testa a pagina de login', () => {
  test('Ao acessar a rota "/", aparece dois inputs e um button', () => {
    renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId('email-input');
    const inputSenha = screen.getByTestId('password-input');
    const button = screen.getByRole('button', { name: 'Entrar' });

    expect(inputEmail).toBeInTheDocument();
    expect(inputSenha).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  test('Ao logar, o email fica salvo no estado global', async () => {
    const { store } = renderWithRouterAndRedux(<App />);
    const user = userEvent.setup();
    const inputEmail = screen.getByTestId('email-input');
    const inputSenha = screen.getByTestId('password-input');
    const button = screen.getByRole('button', { name: 'Entrar' });

    await user.type(inputEmail, 'test@test.com');
    await user.type(inputSenha, '123456');
    await user.click(button);

    expect(store.getState().user.email).toBe('test@test.com');
  });
});
