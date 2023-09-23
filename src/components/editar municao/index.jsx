import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import styles from './styles.module.css';

function EditMunicaoModal({ isOpen, onClose, onSave, municao }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const handleSave = (data) => {
    onSave(data);
    onClose();
  };

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title style={{ color: 'black' }}>
          Editar munição
        </Modal.Title>
      </Modal.Header>
      <form noValidate onSubmit={handleSubmit(handleSave)}>
        <Modal.Body>
          <div>
            <div className={styles.titleInput}>Modelo</div>
            <input
              className={styles.input}
              type="text"
              id="modelo"
              name="modelo"
              placeholder="Modelo"
              defaultValue={municao?.modelo || ''}
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
            <div className={styles.titleInput}>Calibragem</div>
            <input
              className={styles.input}
              type="text"
              id="calibragem"
              name="calibragem"
              placeholder="Calibragem"
              defaultValue={municao?.calibragem || ''}
              {...register('calibragem', {
                required: {
                  value: true,
                  message: 'Calibragem obrigatória'
                }
              })}
            />
            {errors.calibragem && <span style={{ color: 'red' }}>{errors.calibragem.message}</span>}
          </div>
          <div>
            <div className={styles.titleInput}>Data de Fabricação</div>
            <input
              className={styles.input}
              type="date"
              id="dataFabricacao"
              name="dataFabricacao"
              placeholder="Data de Fabricação"
              defaultValue={
                municao?.dataFabriacao
                  ? format(new Date(municao.dataFabriacao), 'yyyy-MM-dd')
                  : ''
              }
              {...register('dataFabricacao', {
                required: {
                  value: true,
                  message: 'Data de Fabricação é obrigatória',
                },
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
              defaultValue={municao?.estadoConservacao || 'ABERTA'}
              {...register('estadoConservacao')}
            >
              <option value="ABERTA">ABERTA</option>
              <option value="FECHADA">FECHADA</option>
            </select>
            {errors.estadoConservacao && <span style={{ color: 'red' }}>{errors.estadoConservacao.message}</span>}
          </div>
          <div>
            <div className={styles.titleInput}>Quantidade em Estoque</div>
            <input
              className={styles.input}
              type="number"
              id="quantidade"
              name="quantidade"
              placeholder="Quantidade em Estoque"
              defaultValue={municao?.quatidadeEmEstoque || ''}
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
            <div className={styles.titleInput}>Tipo da Ponta</div>
            <input
              className={styles.input}
              type="text"
              id="tipoPonta"
              name="tipoPonta"
              placeholder="Tipo da Ponta"
              defaultValue={municao?.tipoPonta || ''}
              {...register('tipoPonta', {
                required: {
                  value: true,
                  message: 'Tipo da Ponta é obrigatório'
                }
              })}
            />
            {errors.tipoPonta && <span style={{ color: 'red' }}>{errors.tipoPonta.message}</span>}
          </div>
          <div>
            <div className={styles.titleInput}>Material</div>
            <input
              className={styles.input}
              type="text"
              id="material"
              name="material"
              placeholder="Material"
              defaultValue={municao?.material || ''}
              {...register('material', {
                required: {
                  value: true,
                  message: 'Material é obrigatório'
                }
              })}
            />
            {errors.material && <span style={{ color: 'red' }}>{errors.material.message}</span>}
          </div>
          <div>
            <div className={styles.titleInput}>Peso em gramas</div>
            <input
              className={styles.input}
              type="number"
              id="peso"
              name="peso"
              placeholder="Peso"
              defaultValue={municao?.peso || ''}
              {...register('peso', {
                required: {
                  value: true,
                  message: 'Peso é obrigatório'
                }
              })}
            />
            {errors.peso && <span style={{ color: 'red' }}>{errors.peso.message}</span>}
          </div>
          <div>
            <div className={styles.titleInput}>Empresa Fabricante</div>
            <input
              className={styles.input}
              type="text"
              id="empresaFabricante"
              name="empresaFabricante"
              placeholder="Empresa Fabricante"
              defaultValue={municao?.empresaFabricante || ''}
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
          <Button variant="secondary" onClick={onClose}>Fechar</Button>
          <Button variant="primary" type="submit">
            Salvar Edições
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default EditMunicaoModal;
