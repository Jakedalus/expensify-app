import React from 'react';
import Modal from 'react-modal';

const DeleteDialogModal = (props) => (
    <Modal
        isOpen={props.clickedDelete}
        onRequestClose={props.handleClearDeleteDialogModal}
        closeTimeoutMS={200}
        contentLabel="Modal"
        className="modal"
    >
        <h2>Do you want to delete this expense: {props.description}?</h2>
        <button className="button button--secondary" onClick={() => props.handleClearDeleteDialogModal(true)}>Delete</button>
        <button className="button button--secondary" onClick={() => props.handleClearDeleteDialogModal(false)}>Cancel</button>
    </Modal>
);

export default DeleteDialogModal;