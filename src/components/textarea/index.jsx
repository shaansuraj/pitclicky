import React, { useRef, useState, useEffect } from 'react';

// react bootstrap
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// toster
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// react icons
import { AiOutlineFullscreen } from 'react-icons/ai'

const TextArea = ({ response, textFieldHeight, topic }) => {
    const textareaRef = useRef(null);
    const [textareaText, setTextareaText] = useState(response);
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(false);

    const minHeight = textFieldHeight ? textFieldHeight : '28vh';

    useEffect(() => {
        setIsLoading(false);
        setTextareaText(response);
    }, [response]);

    const handleCopy = async () => {
        if (textareaRef.current) {
            try {
                await navigator.clipboard.writeText(textareaText);
                toast.success('Copied to clipboard successfully');
            } catch (error) {
                console.error('Error copying text:', error);
            }
        }
    };

    const handleClear = () => {
        toast.success('Clear chatbox successfully');
        setTextareaText(''); // Clear the textarea text
    };

    return (
        <div>
            <FloatingLabel controlId="floatingTextarea2">
                <Form.Control
                    ref={textareaRef}
                    as="textarea"
                    placeholder={isLoading ? 'Loading...' : 'Your topic description.....'}
                    value={isLoading ? '' : textareaText}
                    onChange={(e) => setTextareaText(e.target.value)}
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
            </FloatingLabel>
            {isLoading && <p style={{ color: 'white' }} >Loading...</p>}

            <div className="d-flex justify-content-between">
                <div>
                    <Button
                        className={`mx-2 button-fade`}
                        style={{
                            backgroundColor: 'white',
                            color: 'black'
                        }}
                        onClick={handleCopy}
                    >
                        Copy Text
                    </Button>
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
                    <Button
                        style={{
                            backgroundColor: 'inherit',
                            color: 'white',
                            border: '1px solid white',
                            outline: 'none'
                        }}
                        onClick={() => setShow(true)} >
                        <AiOutlineFullscreen />
                    </Button>
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
                    <Form.Control
                        ref={textareaRef}
                        as="textarea"
                        placeholder={isLoading ? 'Loading...' : 'Your topic description.....'}
                        value={isLoading ? '' : textareaText}
                        onChange={(e) => setTextareaText(e.target.value)}
                        style={{
                            resize: 'none',
                            minHeight: '73vh',
                            width: '100%',
                            border: 'none',
                            outline: 'none',
                            backgroundColor: 'inherit',
                            color: 'white'
                        }}
                    />
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: 'black', color: 'white' }} >

                    <Button
                        className={`mx-2 button-fade`}
                        style={{
                            backgroundColor: 'white',
                            color: 'black'
                        }}
                        onClick={handleCopy}
                    >
                        Copy Text
                    </Button>
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
