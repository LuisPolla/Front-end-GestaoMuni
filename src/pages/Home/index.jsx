import { React, useState, useEffect } from 'react';
import { Header } from "../../components";
import { useNavigate } from 'react-router-dom'; // Importe useNavigate

import styles from './styles.module.css';

export function Home() {

  const [dataDasboard, setDataDashboard] = useState()

  async function buscarDashboard() {
    const response = await fetch('http://localhost:8080/totalUsers', {
      method: 'GET',
      headers: {
        "Content-Type": 'application/json',
        "Authorization": "Bearer " + localStorage.getItem('accessToken'),
      }
    })

    const data = await response.json()

    console.log(data)

    setDataDashboard(data)
  }


  useEffect(() => {
    buscarDashboard()
  }, [])

  const navigate = useNavigate();

  const handleGestaoClick = () => {
    // Redirecionar para a rota de Gestão de Munição
    navigate('/gestao');
  };

  const handleHistoricoClick = () => {
    // Redirecionar para a rota de Histórico
    navigate('/historico');
  };

  const handlePerfilClick = () => {
    // Redirecionar para a rota de Meu Perfil
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
          <div className={styles.fundoCentral} >
            <div className={styles.buttonContainer}>
              <button className={styles.button} onClick={handleGestaoClick}>Gestão de Munição
                <img src="/gestaoIcon.svg" />
              </button>

              <button className={styles.button} onClick={handleHistoricoClick}>Histórico
                <img src="/historicoIcon.svg" />
              </button>

              <button className={styles.button} onClick={handlePerfilClick}>Meu Perfil
                <img src="/perfilIcon.svg" />
              </button>
              
            </div>
            {
                dataDasboard &&
                <div className={styles.containerDashboard}>
                  <p className={styles.retanguloDashboard1}>Total de Armareiros Registrados: {dataDasboard.usuariosCadastrados}</p>
                  <p className={styles.retanguloDashboard2}>Total de Munições Cadastradas: {dataDasboard.municoesCadastradas}</p>
                </div>
              }
          </div>
        </div>
      </div>
    </div>
  )
}

