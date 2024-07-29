import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
function Popup(props) {
  const { message,setVerif}=props;
    const [show, setShow] = useState(true);

  const handleClose = () => setVerif(false);
  const retour=()=>{for (let valeur of Object.values(message)) {
   if (Array.isArray(valeur)) {
        return valeur;
    } else {
        return message;
    }
    
}}
 
 return (
    <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title >
            <span className='alert-inner--icon ' style={{ marginRight: '20px',color:'blue' }} ><i className='fe fe-bell'></i></span>
              Message </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="text-dark fw-bold fs-5">
              <span className="justify-content-center">
              {retour()}
              </span>
                
            </div>
          </Modal.Body>
          
        </Modal>
  )
}

export default Popup