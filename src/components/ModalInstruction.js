import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const ModalInstruction = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Hướng dẫn</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Luật chơi</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-custom" onClick={props.onHide}>
          Đã hiểu
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalInstruction
