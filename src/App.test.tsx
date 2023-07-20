import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import App from './App';
import { renderWithRouterAndRedux } from './tests/helpers/renderWith';
import mockData from './tests/helpers/mockData';

global.fetch = vi.fn().mockResolvedValue({
  json: async () => (mockData),
});

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

describe('Testa a rota "/carteira" do Forms', () => {
  test('Ao acessar a rota "/carteira", o header renderiza', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    const email = screen.getByTestId('email-field');
    const total = screen.getByTestId('total-field');
    const moeda = screen.getByTestId('header-currency-field');

    expect(email).toBeInTheDocument();
    expect(total).toBeInTheDocument();
    expect(moeda).toBeInTheDocument();
    expect(total).toHaveTextContent('0.00');
    expect(moeda).toHaveTextContent('BRL');
  });
  test('Ao acessar a rota "/carteira", o forms renderiza', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    const inputValue = screen.getByTestId('value-input');
    const inputDescription = screen.getByTestId('description-input');
    const selectCurrency = screen.getByTestId('currency-input');
    const selectMethod = screen.getByTestId('method-input');
    const selectTag = screen.getByTestId('tag-input');
    const buttonAdd = screen.getByRole('button', { name: 'Adicionar despesa' });

    expect(inputValue).toBeInTheDocument();
    expect(inputDescription).toBeInTheDocument();
    expect(selectCurrency).toBeInTheDocument();
    expect(selectMethod).toBeInTheDocument();
    expect(selectTag).toBeInTheDocument();
    expect(buttonAdd).toBeInTheDocument();
  });
  test('Ao acessar a rota "/carteira", a tabela renderiza', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    expect(screen.getByText('Descrição')).toBeInTheDocument();
    expect(screen.getByText('Tag')).toBeInTheDocument();
    expect(screen.getByText('Método de pagamento')).toBeInTheDocument();
    expect(screen.getByText('Valor')).toBeInTheDocument();
    expect(screen.getByText('Moeda')).toBeInTheDocument();
    expect(screen.getByText('Câmbio utilizado')).toBeInTheDocument();
    expect(screen.getByText('Valor convertido')).toBeInTheDocument();
    expect(screen.getByText('Moeda de conversão')).toBeInTheDocument();
    expect(screen.getByText('Editar/Excluir')).toBeInTheDocument();
  });
});

describe('Testa os eventos do forms', () => {
  test('Testa se ao adicionar uma despesa, ela renderiza na tela', async () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });
    const user = userEvent.setup();

    // expect(global.fetch).toHaveBeenCalledTimes(1);

    const inputValue = screen.getByTestId('value-input');
    const inputDescription = screen.getByTestId('description-input');
    const buttonAdd = screen.getByRole('button', { name: 'Adicionar despesa' });

    await user.type(inputValue, '12');
    await user.type(inputDescription, 'doze dolares');
    await user.click(buttonAdd);

    expect(inputValue).toHaveValue('');
    expect(screen.getByText('doze dolares')).toBeInTheDocument();
  });
});
