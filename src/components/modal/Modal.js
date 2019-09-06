import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default class ModalWrapper extends React.Component{

    render(){

        const {show,title,actionCancel,actionConfirm} = this.props;

        return(
            <Modal
                show={show}
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.children}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={() => actionConfirm()} >Confirm</Button>
                    <Button variant="light" onClick={() => actionCancel()}  >Cancel</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}