import { useContext, useEffect, useState } from 'react';
import { Header } from '../../components';
import styles from './styles.module.css';
import { Table, Spinner, Dropdown } from 'react-bootstrap'; // Importe o Dropdown do React Bootstrap
import { HistoricoContext } from '../../contexts/HistoricoContext';
import { format } from 'date-fns'; 

export function Historico() {
  const { getAllHistorico, historicoData, loading } = useContext(HistoricoContext);
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' ou 'desc'

  useEffect(() => {
    getAllHistorico();
  }, [getAllHistorico]);

  const formatDataCriacao = (data) => {
    const formattedDate = format(new Date(data), 'dd-MM-yyyy');
    return formattedDate.replace(/-/g, '/');
  };

  // Função para alternar a ordem de classificação
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  // Ordenar o histórico com base na seleção do usuário
  const sortedHistoricoData = [...historicoData].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.dataCriacao - b.dataCriacao;
    } else {
      return b.dataCriacao - a.dataCriacao;
    }
  });

  return (
    <div>
      <Header title="Arsenal de Munições" navbar={true} />
      <div className={styles.homeContainer}>
        <div className={styles.fundoCentral}>
          <div className='flex'>
            <img src="/TituloGestao.svg" className={styles.icon} alt="Título" />
            <h1 className={styles.titulo}>Histórico de cadastros</h1>
              <Dropdown className={styles.ordernarPorData}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Ordenar por Data
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={toggleSortOrder}>
                    {sortOrder === 'asc' ? 'Mais recentes primeiro' : 'Mais antigos primeiro'}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
          </div>
          <div className={styles.container}>
            <div className={styles.Tabela}>
              <Table striped hover>
                <thead>
                  <tr>
                    <th>Id do Usuario</th>
                    <th>Id da Munição</th>
                    <th>Data de Cadastro</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedHistoricoData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.userId}</td>
                      <td>{item.municaoId}</td>
                      <td>{formatDataCriacao(item.dataCriacao)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
