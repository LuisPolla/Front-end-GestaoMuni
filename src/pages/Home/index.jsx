import { React, useState, useEffect } from 'react';
import { Header } from "../../components";
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.css';

export function Home() {
  const [dataDasboard, setDataDashboard] = useState();
  const [totalCalibres, setTotalCalibres] = useState(); // Novo estado para armazenar o total de calibres

  async function buscarDashboard() {
    const response = await fetch('http://localhost:8080/totalUsers', {
      method: 'GET',
      headers: {
        "Content-Type": 'application/json',
        "Authorization": "Bearer " + localStorage.getItem('accessToken'),
      }
    });

    const data = await response.json();
    setDataDashboard(data);
  }

  // Função para buscar o total de calibres diversificados
  async function buscarTotalCalibres() {
    try {
      const response = await fetch('http://localhost:8080/total-calibres', {
        method: 'GET',
        headers: {
          "Content-Type": 'application/json',
          "Authorization": "Bearer " + localStorage.getItem('accessToken'),
        }
      });

      const data = await response.json();
      setTotalCalibres(data.totalCalibres);
    } catch (error) {
      console.error('Erro ao buscar total de calibres:', error);
    }
  }

  useEffect(() => {
    buscarDashboard();
    buscarTotalCalibres(); // Chame a função para buscar o total de calibres ao montar o componente
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
      <Header
        title="Arsenal de Munições"
        navbar={true}
      />
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
            {dataDasboard && (
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
                  {totalCalibres || 'Carregando...'}
                  </div> 
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
