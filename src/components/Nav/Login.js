import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import Websocket from './Websocket'

export default function Login({ props }) {
    const [show, setShow] = useState(false);
    const [payload, setPayload] = useState({});
    const [loadingStatus, setLoadingStatus] = useState('');
    const handleClose = () => setShow(false);
    const handleShow =  () => {
        setShow(true);
        if(loadingStatus === ''){
          xummSign();
        }
    }
    async function xummSign() {
      axios
        .post('https://xumm.gaybear.capital/payload')
        .then((response) => {
          setPayload(response.data.body);
          setLoadingStatus('loaded')
        }).catch((error) => {
          console.log(error);
        })
    }
    
    useEffect(() => {
      console.log(payload);
    }, [payload])
    
    return (
      <>
        <Button variant="primary" onClick={ handleShow }>
          Login
        </Button>
  
        <Modal show={show} onHide={ handleClose } animation={ false } size="xlg">
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            { payload.refs && 
              <div>
                <Row>
                  <Col><img src={payload.refs.qr_png} alt="Scan Xumm" className="xummQR"/></Col>
                  <Col><Websocket url={ payload.refs.websocket_status } setPayload={ setPayload }/></Col>
                </Row>
                <Row><p>or click <a href={ payload.next.always } target="_blank" rel="noreferrer">here</a> to launch Xumm</p></Row>
              </div>
            }
              <div id="xummModalBody">''</div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={ handleClose }>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
