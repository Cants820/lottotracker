import React from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const Modal = (props) => {
  return (
    <Modal show={true}>
      <Modal.Header>Hi</Modal.Header>
      <Modal.Body>asdfasdf</Modal.Body>
      <Modal.Footer>This is the footer</Modal.Footer>
    </Modal>
  );
};

export default Modal;
