import { Header } from "../../components";
import styles from './styles.module.css';
import { Table, Button, Dropdown, DropdownButton, Pagination } from 'react-bootstrap';

export function Gestao() {
    return (
        <div>
            <Header title="Arsenal de Munições" navbar={true} />
            <div className={styles.homeContainer}>
                <div className={styles.fundoCentral}>
                    <div className='flex'>
                        <img src="/TituloGestao.svg" className={styles.icon} alt="Título" />
                        <h1 className={styles.titulo}>Gestão de Munição</h1>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.Tabela}>
                            <Table striped hover>
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>Modelo</th>
                                        <th>Calibre</th>
                                        <th>Condição</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>MUNIÇÃO CBC HYPER .22 LR</td>
                                        <td>22 mm</td>
                                        <td>Nova</td>
                                        <td>
                                            <DropdownButton id="dropdown-basic-button" title="Opções">
                                                <Dropdown.Item href="/">Ver mais</Dropdown.Item>
                                                <Dropdown.Item href="/">Editar Munição</Dropdown.Item>
                                                <Dropdown.Item href="/">Apagar Munição</Dropdown.Item>
                                            </DropdownButton>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>MUNIÇÃO CBC HYPER .22 LR</td>
                                        <td>22 mm</td>
                                        <td>Nova</td>
                                        <td>
                                            <DropdownButton id="dropdown-basic-button" title="Opções">
                                                <Dropdown.Item href="/">Ver mais</Dropdown.Item>
                                                <Dropdown.Item href="/">Editar Munição</Dropdown.Item>
                                                <Dropdown.Item href="/">Apagar Munição</Dropdown.Item>
                                            </DropdownButton>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>MUNIÇÃO CBC HYPER .22 LR</td>
                                        <td>22 mm</td>
                                        <td>Nova</td>
                                        <td>
                                            <DropdownButton id="dropdown-basic-button" title="Opções">
                                                <Dropdown.Item href="/">Ver mais</Dropdown.Item>
                                                <Dropdown.Item href="/">Editar Munição</Dropdown.Item>
                                                <Dropdown.Item href="/">Apagar Munição</Dropdown.Item>
                                            </DropdownButton>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>MUNIÇÃO CBC HYPER .22 LR</td>
                                        <td>22 mm</td>
                                        <td>Nova</td>
                                        <td>
                                            <DropdownButton id="dropdown-basic-button" title="Opções">
                                                <Dropdown.Item href="/">Ver mais</Dropdown.Item>
                                                <Dropdown.Item href="/">Editar Munição</Dropdown.Item>
                                                <Dropdown.Item href="/">Apagar Munição</Dropdown.Item>
                                            </DropdownButton>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>MUNIÇÃO CBC HYPER .22 LR</td>
                                        <td>22 mm</td>
                                        <td>Nova</td>
                                        <td>
                                            <DropdownButton id="dropdown-basic-button" title="Opções">
                                                <Dropdown.Item href="/">Ver mais</Dropdown.Item>
                                                <Dropdown.Item href="/">Editar Munição</Dropdown.Item>
                                                <Dropdown.Item href="/">Apagar Munição</Dropdown.Item>
                                            </DropdownButton>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={styles.buttonCadastrar}>
                                            <Button variant="primary">Cadastrar Nova Munição</Button>{' '}
                                        </td>
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
