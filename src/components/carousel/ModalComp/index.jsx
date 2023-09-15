import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useAuth } from "../../../pages/login/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import '../../../firebaseConfig';

const ModalComp = () => {

    const [show, setShow] = useState(false);
    const { userId } = useAuth();
    const [deck, setDeck] = useState('');

    async function fetchDeck() {
        try {
            const firestore = firebase.firestore();
            const userDocRef = firestore.collection(userId).doc('deckLink');
            const userDoc = await userDocRef.get();

            if (userDoc.exists) {
                const deckData = userDoc.data();
                const deckLink = deckData.deckLink;
                setDeck(deckLink);
            }
        } catch (error) {
            console.error('Error fetching deckLink:', error);
        }
    }

    const renderLink = () => {
        fetchDeck()
    }

    return (
        <>
            <Button
                className='text-center'
                onClick={() => {
                    setShow(true);
                    renderLink();
                }}
                style={{
                    zIndex: 5,
                    background: 'inherit',
                    color: 'black',
                    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                    border: 'none',
                    position: 'relative',
                    bottom: '9rem'
                }} >
                <b>Checkout <br /> Your Deck</b>
            </Button>
            <Modal
                size="lg"
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                style={{
                    width: '100%'
                }}
            >
                <Modal.Body style={{
                    bakcground: 'inherit',
                    width: '100%'
                }} >
                    {deck && (
                        <iframe
                            src={deck}
                            title="Rentainance Investment Platform"
                            style={{
                                width: '100%',
                                height: '83vh',
                                border: 'none',
                                // backgroundColor: 'white',
                                // zIndex: '0',
                                // position: 'absolute',
                                // top: '20%'
                            }}
                        ></iframe>
                    )}
                </Modal.Body>
            </Modal>

        </>
    )
}

export default ModalComp;