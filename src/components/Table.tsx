import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from '../types';

function Table() {
  const rootStateExpenses = useSelector((state: RootState) => state.wallet.expenses);

  useEffect(() => {

  }, []);

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
        {
        rootStateExpenses.map((objeto: any) => (
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
            <td>Editar</td>
          </tr>
        ))
      }
      </tbody>
    </table>
  );
}

export default Table;
