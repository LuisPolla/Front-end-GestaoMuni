import { Header } from "../../components";
import styles from './styles.module.css';
import Table from 'react-bootstrap/Table';

//import { useNavigate } from 'react-router-dom'; // Importe useNavigate

export function Gestao() {
    return (
        <div>
        <Header 
        title="Arsenal de Munições" 
        navbar={true}
        />
            <div className={styles.homeContainer}>
            <div className={styles.fundoCentral} >
                <img src="/TituloGestao.svg" className={styles.icon}/> <h1>Gestão Munição</h1>
                    <div className={styles.container}>
                        
                     <div className={styles.Tebela}>
                    <Table responsive>
                        <thead className={styles.titulosTabela}>
                            <tr>
                            <th>#</th>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <th key={index}>Titulos</th>
                            ))}
                            </tr>
                        </thead>
                        <tbody className={styles.bodyTebela}>
                            <tr>
                            <td>1</td>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <td key={index}>Informação{index}</td>
                                ))}
                            </tr>
                        </tbody>
                        </Table>
                     </div>
                            </div>    
                        </div>
                        </div>
        </div>
    );
};
