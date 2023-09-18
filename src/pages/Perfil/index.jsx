import { useContext } from 'react';
import { Header } from "../../components";
import styles from './styles.module.css'
import { AuthContext } from '../../contexts/AuthContext';

export function Perfil() {
    const { user } = useContext(AuthContext);

    // Verifica se o usuário não é nulo antes de acessar suas propriedades
    const nomeUsuario = user ? user.nome : 'Usuário não encontrado';
    const emailUsuario = user ? user.email : 'Email não encontrado';
    const cpfUsuario = user ? user.cpf : 'CPF não encontrado';
    const registroMilitarUsuario = user ? user.registroMilitar : 'Registro Militar não encontrado';
    const dataNascimentoUsuario = user ? user.dataNascimento : 'Data de Nascimento não encontrada';

    return (
        <div>
            <Header title="Arsenal de Munições" navbar={true} />
            <div className={styles.homeContainer}>
                <div className={styles.fundoCentral}>
                    <div className='flex'>
                        <img src="/bonequinho.svg" className={styles.fotoPerfil} />
                        <h1 className={styles.nomePerfil}>
                            {nomeUsuario}
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
                                            {nomeUsuario}
                                        </h1>
                                        <h1>
                                            {emailUsuario}
                                        </h1>
                                        <h1>
                                            {cpfUsuario}
                                        </h1>
                                        <h1>
                                            {registroMilitarUsuario}
                                        </h1>
                                        <h1>
                                            {dataNascimentoUsuario}
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
