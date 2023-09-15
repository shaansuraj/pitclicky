// react bootstrap componenet
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

// react icons 
import { GrFormClose } from 'react-icons/gr';

// componenet
import Button from '../../components/buttons/SingleTextButton'

import Img from '../../utils/images/MacBook Pro 16.png'

const UploadDeckModal = (props) => {

    const inputField = {
        backgroundColor: 'rgba(189, 189, 189, 0.16)'
    }

    const height = {
        height: '20vh'
    }
    return (
        <Modal
            style={{
                color: 'black',
                backgroundColor: '#0000008d'
            }}
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title> <b>PROBLEM </b>SLIDE </Modal.Title>
                <div className="p-1" style={{ border: '1px solid black', borderRadius: '100%' }}>
                    <GrFormClose style={{
                        color: 'black',
                        cursor: 'pointer',
                        fontSize: '1.5rem'
                    }} onClick={props.onHide} />
                </div>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col lg={4} className='border' >
                        <img className='my-2' src={Img} alt="" style={{ width: '20rem', position: 'relative', right: '6rem' }} />
                        <div className="my-3 text-center">
                            <Button btnColor="#122023" btnTextColor="white" text="Save" />
                        </div>
                    </Col>
                    <Col lg={8} >
                        <Row>
                            <Col lg={7}>
                                <Form>
                                    <Form.Group controlId="formBasicText">
                                        <Form.Label>HEADING 1</Form.Label>
                                        <Form.Control style={inputField} type="text" placeholder="" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicText">
                                        <Form.Label>HEADING 2</Form.Label>
                                        <Form.Control style={inputField} type="text" placeholder="" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicText">
                                        <Form.Label>HEADING 3</Form.Label>
                                        <Form.Control style={{ ...inputField, ...height }} type="text" placeholder="" />
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col lg={5}>
                                <Form>
                                    <Form.Group controlId="formBasicText">
                                        <Form.Label>BUTTON 1</Form.Label>
                                        <Form.Control style={inputField} type="text" placeholder="" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicText">
                                        <Form.Label>BUTTON 2</Form.Label>
                                        <Form.Control style={inputField} type="text" placeholder="" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicText">
                                        <Form.Label>BUTTON 3</Form.Label>
                                        <Form.Control style={inputField} type="text" placeholder="" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicText">
                                        <Form.Label>BUTTON 4</Form.Label>
                                        <Form.Control style={inputField} type="text" placeholder="" />
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
}

export default UploadDeckModal;