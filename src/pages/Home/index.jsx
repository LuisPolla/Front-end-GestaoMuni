import { Header } from "../../components";
import { useNavigate } from 'react-router-dom'; // Importe useNavigate

import styles from './styles.module.css';

export function Home() {
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
          </div>
        </div>
      </div>
    </div>
  )
}

