import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import styles from './styles.module.css';
import { format } from 'date-fns'; // Importe a função format

function MunicaoDetailsModal({ bool, setBool, municao }) {
  function fecharModal() {
    setBool(false)
  }
  return (
    <Modal show={bool} onHide={() => fecharModal()} className={styles.modal}>
      <Modal.Header closeButton>
        <Modal.Title>Detalhes da Munição</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {municao && (
          <div>
            <p>id: {municao.id}</p>
            <p>Modelo: {municao.modelo}</p>
            <p>Calibre: {municao.calibragem} mm</p>
            <p>Data de Fabricação: {municao.dataFabriacao ? format(new Date(municao.dataFabriacao), 'dd/MM/yyyy') : ''}</p> 
            <p>Estado de Conservação da caixas: {municao.estadoConservacao}</p>
            <p>Quantidade de caixas em estoque: {municao.quatidadeEmEstoque}</p>
            <p>Tipo de Ponta: {municao.tipoPonta}</p>
            <p>Material da munição: {municao.material}</p>
            <p>Peso em gramas: {municao.peso} g</p>
            <p>Empresa Fabricante: {municao.empresaFabricante}</p>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => fecharModal()}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MunicaoDetailsModal;
