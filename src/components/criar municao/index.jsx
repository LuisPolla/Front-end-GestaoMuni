import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import styles from './styles.module.css';

function CreateMunicaoModal({ isOpen, onClose, onCreate }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const handleCreate = (data) => {
        onCreate(data);
        onClose();
    };

    return (
        <Modal show={isOpen} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title style={{ color: 'black' }}>
                    Criar nova munição
                </Modal.Title>
            </Modal.Header>
            <form noValidate onSubmit={handleSubmit(handleCreate)}>
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
                {/* Resto do código de criação de munição, similar ao que você tinha antes */}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Fechar</Button>
                <Button variant="primary" type="submit">
                    Criar Munição
                </Button>
            </Modal.Footer>
        </form>
    </Modal >
  );
}

export default CreateMunicaoModal;
