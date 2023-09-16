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
                        <img src="/bonequinho.svg" className={styles.fotoPerfil} />
                        <h1 className={styles.nomePerfil}>Gerson Nascimento
                        </h1>
                        <div className={styles.FundoTabela}>
                            <div className={styles.table}>
                                <div className='flex'>
                                    <div className={styles.tableInfosTittle}>
                                        <h1>
                                            Nome
                                        </h1>
                                        <h1>
                                            Email
                                        </h1>
                                        <h1>
                                            Senha
                                        </h1>
                                        <h1>
                                            CPF
                                        </h1>
                                        <h1>
                                            Registro Militar
                                        </h1>
                                        <h1>
                                            Data de nascimento
                                        </h1>

                                    </div>

                                    <div className={styles.tableInfos}>

                                        <h1>
                                            Gerson Alburque
                                        </h1>
                                        <h1>
                                            Gerson@gmail.com
                                        </h1>
                                        <h1>
                                            *******
                                        </h1>
                                        <h1>
                                            123456789-09
                                        </h1>
                                        <h1>
                                            12345678
                                        </h1>
                                        <h1>
                                            19/03/2070
                                        </h1>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                                <button onClick={() => setObuttonen()} className={styles.button}> Editar Perfil</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
