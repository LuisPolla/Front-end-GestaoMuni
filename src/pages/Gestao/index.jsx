import { useContext, useEffect, useState } from "react";
import { Header } from "../../components";
import styles from './styles.module.css';
import { Table, Button, Dropdown, DropdownButton, Spinner, Modal } from 'react-bootstrap';
import { MunicaoContext } from "../../contexts/MunicaoContext";
import { useForm } from "react-hook-form";

export function Gestao() {
    const { getAllMunicao, loading, municoes, createMunicao } = useContext(MunicaoContext);
    const [isCreated, setIsCreated] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    async function addMunicao(data) {
        await createMunicao({
            modelo: data.modelo,
            calibragem: data.calibragem,
            dataFabriacao: data.dataFabricacao,
            estadoConservacao: data.estadoConservacao,
            quatidadeEmEstoque: data.quantidade,
            tipoPonta: data.tipoPonta,
            material: data.material,
            peso: data.peso,
            empresaFabricante: data.empresaFabricante
        });
        await getAllMunicao();
    }

    useEffect(() => {
        async function getMunicoes() {
            await getAllMunicao();
        }
        getMunicoes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <Modal show={isCreated} onHide={() => setIsCreated(false)}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: 'black' }}>
                        Criar nova munição
                    </Modal.Title>
                </Modal.Header>
                <form noValidate onSubmit={handleSubmit(addMunicao)}>
                    <Modal.Body>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <div>
                                <div className={styles.titleInput}>insira o Modelo</div>
                                <input
                                    className={styles.input}
                                    type="text"
                                    id="modelo"
                                    name="modelo"
                                    placeholder="Modelo"
                                    required
                                    {...register('modelo', {
                                        required: {
                                            value: true,
                                            message: 'Modelo obrigatório'
                                        }
                                    })}
                                />
                                {errors.modelo && <span style={{ color: 'red' }}>{errors.modelo.message}</span>}
                            </div>
                            <div>
                                <div className={styles.titleInput}>insira a Calibragem</div>
                                <input
                                    className={styles.input}
                                    type="text"
                                    id="calibragem"
                                    name="calibragem"
                                    placeholder="Calibragem"
                                    required
                                    {...register('calibragem', {
                                        required: {
                                            value: true,
                                            message: 'Calibragem obrigatório'
                                        }
                                    })}
                                />
                                {errors.calibragem && <span style={{ color: 'red' }}>{errors.calibragem.message}</span>}
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <div>
                                <div className={styles.titleInput}>insira a Data de Fabricação</div>
                                <input
                                    className={styles.input}
                                    type="date"
                                    id="dataFabricacao"
                                    name="dataFabricacao"
                                    placeholder="Data de Fabricação"
                                    required
                                    {...register('dataFabricacao', {
                                        required: {
                                            value: true,
                                            message: 'Data de Fabricação é obrigatório'
                                        }
                                    })}
                                />
                                {errors.dataFabricacao && <span style={{ color: 'red' }}>{errors.dataFabricacao.message}</span>}
                            </div>
                            <div>
                                <div className={styles.titleInput}>Estado de Conservação</div>
                                <select
                                    className={styles.input}
                                    name="estadoConservacao"
                                    id="estadoConservacao"
                                    defaultValue={'ABERTA'}
                                    {...register('estadoConservacao')}
                                >
                                    <option value="ABERTA">ABERTA</option>
                                    <option value="FECHADA">FECHADA</option>
                                </select>
                                {errors.estadoConservacao && <span style={{ color: 'red' }}>{errors.estadoConservacao.message}</span>}
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <div>
                                <div className={styles.titleInput}>insira Quantidade em Estoque</div>
                                <input
                                    className={styles.input}
                                    type="number"
                                    id="quantidade"
                                    name="quantidade"
                                    placeholder="Quantidade em Estoque"
                                    required
                                    {...register('quantidade', {
                                        required: {
                                            value: true,
                                            message: 'Quantidade é obrigatória'
                                        }
                                    })}
                                />
                                {errors.quantidade && <span style={{ color: 'red' }}>{errors.quantidade.message}</span>}
                            </div>
                            <div>
                                <div className={styles.titleInput}>insira o Tipo Ponta</div>
                                <input
                                    className={styles.input}
                                    type="text"
                                    id="tipoPonta"
                                    name="tipoPonta"
                                    placeholder="Tipo da Ponta"
                                    required
                                    {...register('tipoPonta', {
                                        required: {
                                            value: true,
                                            message: 'Tipo da Ponta é obrigatória'
                                        }
                                    })}
                                />
                                {errors.tipoPonta && <span style={{ color: 'red' }}>{errors.tipoPonta.message}</span>}
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <div>
                                <div className={styles.titleInput}>insira o Material</div>
                                <input
                                    className={styles.input}
                                    type="text"
                                    id="material"
                                    name="material"
                                    placeholder="Material"
                                    required
                                    {...register('material', {
                                        required: {
                                            value: true,
                                            message: 'Material é obrigatória'
                                        }
                                    })}
                                />
                                {errors.material && <span style={{ color: 'red' }}>{errors.material.message}</span>}
                            </div>
                            <div>
                                <div className={styles.titleInput}>insira o Peso em gramas</div>
                                <input
                                    className={styles.input}
                                    type="number"
                                    id="peso"
                                    name="peso"
                                    placeholder="Peso"
                                    required
                                    {...register('peso', {
                                        required: {
                                            value: true,
                                            message: 'Peso é obrigatório'
                                        }
                                    })}
                                />
                                {errors.peso && <span style={{ color: 'red' }}>{errors.peso.message}</span>}
                            </div>
                        </div>
                        <div>
                            <div className={styles.titleInput}>insira a Empresa Fabricante</div>
                            <input
                                className={styles.input}
                                type="text"
                                id="empresaFabricante"
                                name="empresaFabricante"
                                placeholder="Empresa Fabricante"
                                required
                                {...register('empresaFabricante', {
                                    required: {
                                        value: true,
                                        message: 'Empresa Fabricante é obrigatório'
                                    }
                                })}
                            />
                            {errors.empresaFabricante && <span style={{ color: 'red' }}>{errors.empresaFabricante.message}</span>}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setIsCreated(false)}>Fechar</Button>
                        <Button variant="primary" type="submit" onClick={() => setIsCreated(false)}>
                            Criar munição
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
            <Header title="Arsenal de Munições" navbar={true} />
            <div className={styles.homeContainer}>
                <div className={styles.fundoCentral}>
                    <div className='flex'>
                        <img src="/TituloGestao.svg" className={styles.icon} alt="Título" />
                        <h1 className={styles.titulo}>Gestão de Munição</h1>
                    </div>
                    {loading ? (
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    ) : municoes && (
                        <>
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
                                            {municoes.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{item.id}</td>
                                                        <td>{item.modelo}</td>
                                                        <td>{item.calibragem} mm</td>
                                                        <td>{item.estadoConservacao}</td>
                                                        <td>
                                                            <DropdownButton id="dropdown-basic-button" title="Opções">
                                                                <Dropdown.Item href="/">Ver mais</Dropdown.Item>
                                                                <Dropdown.Item href="/">Editar Munição</Dropdown.Item>
                                                                <Dropdown.Item href="/">Apagar Munição</Dropdown.Item>
                                                            </DropdownButton>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                            <tr>
                                                <td className={styles.buttonCadastrar}>
                                                    <Button variant="primary" onClick={() => setIsCreated(true)}>
                                                        Cadastrar Nova Munição
                                                    </Button>
                                                </td>
                                                <td></td><td></td><td></td><td></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    {/* <div className={styles.paginaBotao}>
                                        <Pagination>
                                            <Pagination.First />
                                            <Pagination.Prev />
                                            <Pagination.Item>{1}</Pagination.Item>
                                            <Pagination.Next />
                                            <Pagination.Last />
                                        </Pagination>
                                    </div> */}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div >
    );
}
