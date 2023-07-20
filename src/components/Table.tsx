import { useDispatch, useSelector } from 'react-redux';
import { RootState, WalletState } from '../types';
import { deleteExpenses } from '../redux/actions';

function Table() {
  const dispatch = useDispatch();
  const rootStateExpenses = useSelector((state: RootState) => state.wallet.expenses);

  const handleClick = (id: any) => {
    const data = rootStateExpenses.filter((expenses: WalletState) => expenses.id !== id);
    dispatch(deleteExpenses(data));
  };

  return (
    <table>
      <tr>
        <th>Descrição</th>
        <th>Tag</th>
        <th>Método de pagamento</th>
        <th>Valor</th>
        <th>Moeda</th>
        <th>Câmbio utilizado</th>
        <th>Valor convertido</th>
        <th>Moeda de conversão</th>
        <th>Editar/Excluir</th>
      </tr>
      <tbody>
        { rootStateExpenses.map((objeto: any) => (
          <tr key={ objeto.id }>
            <td>{ objeto.description }</td>
            <td>{ objeto.tag }</td>
            <td>{ objeto.method }</td>
            <td>{ Number(objeto.value).toFixed(2) }</td>
            <td>{ objeto.exchangeRates[objeto.currency].name }</td>
            <td>{ Number(objeto.exchangeRates[objeto.currency].ask).toFixed(2) }</td>
            <td>
              { (objeto.exchangeRates[objeto.currency].ask * objeto.value).toFixed(2) }
            </td>
            <td>Real</td>
            <td>
              <button
                id={ objeto.id }
                type="button"
                data-testid="delete-btn"
                onClick={ () => handleClick(objeto.id) }
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
