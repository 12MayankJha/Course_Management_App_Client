import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './modal.scss';

const Example = ({ handleClose, show, src, name, price }) => {
    // const [show, setShow] = useState(false);


    // const handleShow = () => setShow(true);

    return (
            <Modal centered show={show} onHide={handleClose} keyboard={false} className="imagePopUpModal">
                <Modal.Body>
                    <img src={src} />
                </Modal.Body>
                <Modal.Footer>
                <h5 className="modalTitle">{name}</h5>
                <p className="modalText"><i className="fa fa-rupee"></i> {price}</p>
                </Modal.Footer>
            </Modal>
    );
}

export default Example;