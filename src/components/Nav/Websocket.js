import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import useWebSocket from 'react-use-websocket';

export default function WebSocket({ url, setPayload }) {
  const [socketUrl] = useState(url);
  const {
    lastMessage
  } = useWebSocket(socketUrl);
  useEffect(() => {
    if(lastMessage !== null){
      let x = JSON.parse(lastMessage.data);
      if(x.payload_uuidv4){
       x.signed ?
        document.getElementById('xummModalBody').innerText = 'The sign request has been signed succesfully!' :
        document.getElementById('xummModalBody').innerText = 'The sign request has been rejected succesfully.';
        setPayload(x);
      }
      if(x.opened){
        document.getElementById('wssStatus1').innerText = 'Opened in xumm';
        document.getElementById('wssStatus2').innerText = '';
        document.getElementById('wssStatus3').innerText = 'Waiting for you to resolve (accept / deny) the SignIn request in XUMM app. After signing and successful submission this message will be updated.';
      }
    }
  }, [lastMessage, setPayload]);
/*

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  */
  return (
    <div>
      <Row>
        <i aria-hidden="true" className="d-none d-sm-inline-block"><p id="wssStatus1">Scan this QR with xumm</p></i>
      </Row>
      <Row><p id="wssStatus2">Request details will be visible in the xumm app after scanning the QR code.</p></Row>
      <Row></Row>
      <Row id="wssStatus3"><p>Waiting for you to scan the <strong>SignIn</strong> request with the xumm app.</p></Row>
    </div>
  );
}
