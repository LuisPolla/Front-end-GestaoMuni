import { Header } from "../../components";
import styles from './styles.module.css'
import { Table, Button, Dropdown, DropdownButton, Pagination } from 'react-bootstrap';
export function Perfil() {
    return (
        <div>
            <Header title="Arsenal de Munições" navbar={true} />
            <div className={styles.homeContainer}>
                <div className={styles.fundoCentral}>
                <div className='flex'>
                <img src="/bonequinho.svg" className={styles.fotoPerfil}/>
                <h1 className={styles.nomePerfil}>Gerson Nascimento

                </h1>
                        <div className={styles.tableInfos}>
                        <div className='flex-col'>
                            <h1>
                                Nome Gerson Nascimento Alburqueue
                            </h1>
                            <h1>
                                Email Gerson.nascimento@gmail.com
                            </h1>
                            <h1>
                                Senha ***********
                            </h1>
                            <h1>
                                CPF 123456789-01
                            </h1>
                            <h1>
                                Registro Militar 12345678
                            </h1>
                            <h1>
                                Data de nascimento 12/02/2979
                            </h1>
                            <p>
                                Editar Perfil
                            </p>
                        </div>
                        </div>
                </div>
                </div>
            </div>
        </div>
    );
}
