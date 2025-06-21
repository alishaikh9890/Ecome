import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Forms from './Forms';
import { useState } from 'react';

function Popup(){
      const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);


  

  return (
    <>
     <button onClick={handleShow} className="btn btn-sm btn-success">Login</button>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <Forms/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  </>  
  );
}

export default Popup;