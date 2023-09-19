import { useContext, useEffect, useState } from 'react';
import { Header } from '../../components';
import styles from './styles.module.css';
import { Table, Spinner } from 'react-bootstrap';
import { HistoricoContext } from '../../contexts/HistoricoContext';
import { format } from 'date-fns'; // Importe a função format de date-fns

export function Historico() {
  const { getAllHistorico, historicoData, loading } = useContext(HistoricoContext);

  useEffect(() => {
    getAllHistorico();
  }, [getAllHistorico]);

  const formatDataCriacao = (data) => {
    const formattedDate = format(new Date(data), 'dd-MM-yyyy');
    return formattedDate.replace(/-/g, '/');
  };

  return (
    <div>
      <Header title="Arsenal de Munições" navbar={true} />
      <div className={styles.homeContainer}>
        <div className={styles.fundoCentral}>
          <div className='flex'>
            <img src="/TituloGestao.svg" className={styles.icon} alt="Título" />
            <h1 className={styles.titulo}>Histórico de cadastros</h1>
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
                  {historicoData.map((item) => (
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
