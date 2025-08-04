import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Forms from './Forms';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../features/authSlice';

function Popup(){

  const authPop = useSelector((state)=> state.auth.authPop)
  const dispatch = useDispatch()
  const handleShow = () => dispatch(authActions.authPopOpen());

  const handleClose = () => dispatch(authActions.authPopClose());


  return (
    <>
     <Modal show={authPop} onHide={handleClose}>
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