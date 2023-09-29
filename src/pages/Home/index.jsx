import React, { useState, useEffect } from 'react';
import { Header } from '../../components';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap'; // Importe o Spinner do React Bootstrap

import styles from './styles.module.css';

export function Home() {
  const [dataDasboard, setDataDashboard] = useState();
  const [totalCalibres, setTotalCalibres] = useState();
  const [isLoading, setIsLoading] = useState(true); // Adicione um estado para controlar o loading

  async function buscarDashboard() {
    // Simule um atraso de 2 segundos para carregar os dados
    setTimeout(async () => {
      const response = await fetch('http://localhost:8080/totalUsers', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
      });

      const data = await response.json();
      setDataDashboard(data);
      setIsLoading(false); 
    },); 
  }

  async function buscarTotalCalibres() {
    try {
      const response = await fetch('http://localhost:8080/total-calibres', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
      });

      const data = await response.json();
      setTotalCalibres(data.totalCalibres);
    } catch (error) {
      console.error('Erro ao buscar total de calibres:', error);
    }
  }

  useEffect(() => {
    buscarDashboard();
    buscarTotalCalibres();
  }, []);

  const navigate = useNavigate();

  const handleGestaoClick = () => {
    navigate('/gestao');
  };

  const handleHistoricoClick = () => {
    navigate('/historico');
  };

  const handlePerfilClick = () => {
    navigate('/perfil');
  };

  return (
    <div>
      <Header title="Arsenal de Munições" navbar={true} />
      <div className={styles.homeContainer}>
        <div className="p-3">
          <div className={styles.fundoCentral}>
            <div className={styles.buttonContainer}>
              <button className={styles.button} onClick={handleGestaoClick}>
                Gestão de Munição
                <img src="/gestaoIcon.svg" />
              </button>

              <button className={styles.button} onClick={handleHistoricoClick}>
                Histórico
                <img src="/historicoIcon.svg" />
              </button>

              <button className={styles.button} onClick={handlePerfilClick}>
                Meu Perfil
                <img src="/perfilIcon.svg" />
              </button>
            </div>
            {isLoading ? ( // Renderize o Spinner enquanto isLoading for true
              <div className={styles.loadingSpinner}>
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            ) : (
              dataDasboard && (
                <div className={styles.containerDashboard}>
                  <p className={styles.retanguloDashboard1}>
                    Total de Armareiros Registrados:
                    <div className={styles.retanguloDashboarvalor}>
                      {dataDasboard.usuariosCadastrados}
                    </div>
                  </p>
                  <p className={styles.retanguloDashboard2}>
                    Total de Munições Cadastradas:
                    <div className={styles.retanguloDashboarvalor}>
                      {dataDasboard.municoesCadastradas}
                    </div>
                  </p>
                  <p className={styles.retanguloDashboard3}>
                    Calibres Diversificados:
                    <div className={styles.retanguloDashboarvalor}>
                      {totalCalibres}
                    </div>
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
