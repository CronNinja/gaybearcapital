import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function Login({ props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow =  () => {
        setShow(true);
        xummSign();
    }

    async function xummSign() {
        await fetch('https://xumm.gaybear.capital/gbc/payload', {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(data => {
            console.log(data);
        })
    }
    return (
      <>
        <Button variant="primary" onClick={ handleShow }>
          Login
        </Button>
  
        <Modal show={show} onHide={ handleClose } animation={ false }>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={ handleClose }>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
