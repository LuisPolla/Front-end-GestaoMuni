import { Header } from "../../components";
import styles from './styles.module.css';
//import { useNavigate } from 'react-router-dom'; // Importe useNavigate
//import styles from './styles.module.css';

export function Gestao() {
    return (
        <div>
        <Header 
        title="Arsenal de Munições" 
        navbar={true}
        />
            <div className={styles.content}>
            <div className={styles.fundoCentral} >
                <img src="/TituloGestao.svg"/> 
                    <div className={styles.container}>
                </div>    
            </div>
            </div>
            
            
        </div>
    );
};
