import { useContext } from 'react';
import { Header } from "../../components";
import styles from './styles.module.css'
import { AuthContext } from '../../contexts/AuthContext';

export function Perfil() {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <Header title="Arsenal de Munições" navbar={true} />
            <div className={styles.homeContainer}>
                <div className={styles.fundoCentral}>
                    <div className='flex'>
                        <img src="/bonequinho.svg" className={styles.fotoPerfil} />
                        <h1 className={styles.nomePerfil}>
                            {user.nome}
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
                                            {user.nome}
                                        </h1>
                                        <h1>
                                            {user.email}
                                        </h1>
                                        <h1>
                                            {user.cpf}
                                        </h1>
                                        <h1>
                                            {user.registroMilitar}
                                        </h1>
                                        <h1>
                                            {user.dataNascimento}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
