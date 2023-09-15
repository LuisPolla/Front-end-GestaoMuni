import { Header } from "../../components";
import styles from './styles.module.css';
import { Table, Button, Dropdown, DropdownButton, Pagination } from 'react-bootstrap';

export function Historico() {
    return (
        <div>
            <Header title="Arsenal de Munições" navbar={true} />
            <div className={styles.homeContainer}>
                <div className={styles.fundoCentral}>
                    <div className='flex'>
                        <img src="/TituloGestao.svg" className={styles.icon} alt="Título" />
                        <h1 className={styles.titulo}>Histórico de cadastros</h1>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.Tabela}>
                            <Table striped hover>
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>Modelo</th>
                                        <th>Calibre</th>
                                        <th>Usuario</th>
                                        <th>Data de Cadastro</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>MUNIÇÃO CBC HYPER .22 LR</td>
                                        <td>22 mm</td>
                                        <td>Luis Polla</td>
                                        <td>
                                            12/02/2023 - 07:31:45
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>MUNIÇÃO CBC HYPER .22 LR</td>
                                        <td>22 mm</td>
                                        <td>Luis Polla</td>
                                        <td>
                                            12/02/2023 - 07:31:45
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>MUNIÇÃO CBC HYPER .22 LR</td>
                                        <td>22 mm</td>
                                        <td>Luis Polla</td>
                                        <td>
                                            12/02/2023 - 07:31:45
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>MUNIÇÃO CBC HYPER .22 LR</td>
                                        <td>22 mm</td>
                                        <td>Luis Polla</td>
                                        <td>
                                            12/02/2023 - 07:31:45
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>MUNIÇÃO CBC HYPER .22 LR</td>
                                        <td>22 mm</td>
                                        <td>Luis Polla</td>
                                        <td>
                                            12/02/2023 - 07:31:45
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={styles.buttonCadastrar}></td>
                                        <td></td><td></td><td></td><td></td>
                                    </tr>
                                </tbody>
                            </Table>
                            <div className={styles.paginaBotao}>
                                <Pagination>
                                    <Pagination.First />
                                    <Pagination.Prev />
                                    <Pagination.Item>{1}</Pagination.Item>
                                    <Pagination.Next />
                                    <Pagination.Last />
                                </Pagination>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
