import React, { useRef, useState, useEffect } from 'react';

// react bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// toster
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// react icons
import { AiOutlineFullscreen } from 'react-icons/ai'

const TextArea = ({ prosRes, consRes, textFieldHeight, topic }) => {
    const textareaRef = useRef(null);
    const [pros, setPros] = useState(prosRes);
    const [cons, setCons] = useState(consRes);
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(false);

    const minHeight = textFieldHeight ? textFieldHeight : '28vh';

    useEffect(() => {
        setIsLoading(false);
        setPros(prosRes);
        setCons(consRes);
    }, [prosRes, consRes]);


    const handleClear = () => {
        toast.success('Clear chatbox successfully');
        setPros('');
        setCons('');
    };

    return (
        <div>
            <Row>
                <Col>
                    <Form.Control
                        ref={textareaRef}
                        as="textarea"
                        placeholder={isLoading ? 'Loading...' : 'Your topic description.....'}
                        value={isLoading ? '' : pros}
                        onChange={(e) => setPros(e.target.value)}
                        style={{
                            resize: 'none',
                            minHeight: minHeight,
                            width: '100%',
                            border: 'none',
                            outline: 'none',
                            backgroundColor: 'inherit',
                            color: 'white'
                        }}
                    />
                </Col>
                <Col>

                    <Form.Control
                        ref={textareaRef}
                        as="textarea"
                        placeholder={isLoading ? 'Loading...' : 'Your topic description.....'}
                        value={isLoading ? '' : cons}
                        onChange={(e) => setCons(e.target.value)}
                        style={{
                            resize: 'none',
                            minHeight: minHeight,
                            width: '100%',
                            border: 'none',
                            outline: 'none',
                            backgroundColor: 'inherit',
                            color: 'white'
                        }}
                    />
                </Col>
            </Row>
            {isLoading && <p style={{ color: 'white' }} >Loading...</p>}

            <div className="d-flex justify-content-between">
                <div>
                    <Button
                        className={`mx-2 border button-fade`}
                        style={{
                            backgroundColor: 'black',
                            color: 'white'
                        }}
                        onClick={handleClear}
                    >
                        Clear Text
                    </Button>
                </div>
                <div>
                    <Button onClick={() => setShow(true)} ><AiOutlineFullscreen /></Button>
                </div>
            </div>

            {/* modal */}
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-100w"
                size="lg"
                style={{ backdropFilter: 'blur(10px)' }}
                aria-labelledby="example-custom-modal-styling-title"
            >
                {topic && (
                    <Modal.Header closeButton style={{ backgroundColor: 'black', color: 'white' }}>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Topic : <b>{topic}</b>
                        </Modal.Title>
                    </Modal.Header>
                )}
                <Modal.Body style={{ backgroundColor: 'black', color: 'white' }} >

                    <Row>
                        <Col>
                            <Form.Control
                                ref={textareaRef}
                                as="textarea"
                                placeholder={isLoading ? 'Loading...' : 'Your topic description.....'}
                                value={isLoading ? '' : pros}
                                onChange={(e) => setPros(e.target.value)}
                                style={{
                                    resize: 'none',
                                    minHeight: minHeight,
                                    width: '100%',
                                    border: 'none',
                                    outline: 'none',
                                    backgroundColor: 'inherit',
                                    color: 'white'
                                }}
                            />
                        </Col>
                        <Col>

                            <Form.Control
                                ref={textareaRef}
                                as="textarea"
                                placeholder={isLoading ? 'Loading...' : 'Your topic description.....'}
                                value={isLoading ? '' : cons}
                                onChange={(e) => setCons(e.target.value)}
                                style={{
                                    resize: 'none',
                                    minHeight: minHeight,
                                    width: '100%',
                                    border: 'none',
                                    outline: 'none',
                                    backgroundColor: 'inherit',
                                    color: 'white'
                                }}
                            />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: 'black', color: 'white' }} >

                    <Button
                        className={`mx-2 border button-fade`}
                        style={{
                            backgroundColor: 'black',
                            color: 'white'
                        }}
                        onClick={handleClear}
                    >
                        Clear Text
                    </Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer />
        </div>
    );
};

export default TextArea;
