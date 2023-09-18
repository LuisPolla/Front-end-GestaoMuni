import React, { useContext, useEffect } from 'react';
import { Header } from '../../components';
import styles from './styles.module.css';
import { Table } from 'react-bootstrap';
import { HistoricoContext } from '../../contexts/HistoricoContext';

export function Historico() {
  const { getAllHistorico, historicoData } = useContext(HistoricoContext);

  useEffect(() => {
    getAllHistorico();
  }, [getAllHistorico]);

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
                    <th>id</th>
                    <th>Modelo</th>
                    <th>Calibre</th>
                    <th>Usuario</th>
                    <th>Data de Cadastro</th>
                  </tr>
                </thead>
                <tbody>
                  {historicoData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.modelo}</td>
                      <td>{item.calibre} mm</td>
                      <td>{item.usuario}</td>
                      <td>{item.dataCadastro}</td>
                    </tr>
                  ))}
                  <tr>
                    <td className={styles.buttonCadastrar}></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
