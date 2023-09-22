import { useContext, useEffect, useState } from 'react';
import { Header } from '../../components';
import styles from './styles.module.css';
import { Table, Spinner, Dropdown } from 'react-bootstrap';
import { HistoricoContext } from '../../contexts/HistoricoContext';
import { format } from 'date-fns';

export function Historico() {
  const { getAllHistorico, historicoData, loading } = useContext(HistoricoContext);
  const [ascending, setAscending] = useState(true); // Estado para controlar a ordenação

  useEffect(() => {
    getAllHistorico();
  }, [getAllHistorico]);

  const formatDataCriacao = (data) => {
    const formattedDate = format(new Date(data), 'dd-MM-yyyy');
    return formattedDate.replace(/-/g, '/');
  };

  // Função para inverter a ordenação quando o usuário selecionar uma opção no dropdown
  const handleOrderChange = () => {
    setAscending((prevAscending) => !prevAscending);
  };

  // Função para ordenar o histórico com base na data de criação
  const sortedHistorico = [...historicoData].sort((a, b) => {
    if (ascending) {
      return new Date(a.dataCriacao) - new Date(b.dataCriacao);
    } else {
      return new Date(b.dataCriacao) - new Date(a.dataCriacao);
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
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Ordenar
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={handleOrderChange}>
                  {ascending ? "Mais antigos primeiro" : "Mais recentes primeiro"}
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
                  {sortedHistorico.map((item) => (
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
