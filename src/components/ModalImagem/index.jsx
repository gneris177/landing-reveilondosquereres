import React from 'react';
import Modal from 'react-modal';

const ImagemModal = ({ isOpen, onClose, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Imagem Modal"
    >
      <img src={imageUrl} alt="Imagem" />
      <button onClick={onClose}>Fechar</button>
    </Modal>
  );
};

export default ImagemModal;
