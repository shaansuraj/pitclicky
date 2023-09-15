import React from 'react';

// react bootstrap component
import Modal from 'react-bootstrap/Modal';

const VerticallyCenteredModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        // style={{ backgroundColor: 'pink' }}
        >
            {/* <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header> */}
            <Modal.Body className='text-center' style={{ backgroundColor: 'rgba(225, 255, 0, 1)', color: 'black' }}>
                <h3>Feature Comming Soon</h3>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
}

// const ModalComp = ({ title, topic }) => {
//     const [modalShow, setModalShow] = useState(false);

//     return (
//         <>
// <div className="d-flex">
//     <Button className='px-3' style={{ backgroundColor: '#0D0E0E', border: '1px solid white', borderTopRightRadius: '2rem', outline: 'none' }} onClick={() => setModalShow(true)}>
//         {title}
//         <BsFillCaretDownFill style={{ color: '#E1FF00' }} className='ml-4' />
//     </Button>
// </div >

// <MyVerticallyCenteredModal
//     show={modalShow}
//     onHide={() => setModalShow(false)}
// />
//         </>
//     );
// }

export default VerticallyCenteredModal;