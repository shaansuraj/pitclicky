import React, { useState, useEffect } from 'react';

// react bootstrap component
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// react icons 
import { RiEditBoxFill } from 'react-icons/ri';
import { IoMdAnalytics } from 'react-icons/io';
import { TbWorldCode } from 'react-icons/tb';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { BsFillCaretDownFill } from 'react-icons/bs';

// components
import ServiceCard from '../components/cards/ServiceCard';
import VerticallyCenteredModal from '../components/modal';
import Collaborator from '../components/collaborator';

// utils 
import Logo from '../utils/images/logo.png'

// style
import './style.css'
// import '../utils/elements/infinityLogo'

const Home = () => {

    const [modalShow, setModalShow] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);
    const [cardVisibility, setCardVisibility] = useState({
        deckEditor: false,
        analytics: false,
        createSubdomain: false,
        pitchAI: false
    });

    useEffect(() => {
        // Trigger the fade-in animation after a delay
        const animationTimeout = setTimeout(() => {
            setFadeIn(true);
        }, 300); // Adjust the delay as needed

        return () => {
            clearTimeout(animationTimeout);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    useEffect(() => {
        // Function to gradually show each card with a delay
        const showCardWithDelay = (cardName, delay) => {
            setTimeout(() => {
                setCardVisibility(prevVisibility => ({
                    ...prevVisibility,
                    [cardName]: true
                }));
            }, delay);
        };

        showCardWithDelay("deckEditor", 300); // Adjust the delays as needed
        showCardWithDelay("analytics", 400);
        showCardWithDelay("createSubdomain", 500);
        showCardWithDelay("pitchAI", 600);
    }, []);

    return (
        <div className={`fade-in ${fadeIn ? 'active' : ''}`}>

            <div className="mainpage-container">
                <div className='text-center mb-lg-3' >
                    <div className="d-flex justify-content-between">
                        <div>
                            <div className="d-flex">
                                <Button
                                    className='px-3'
                                    style={{
                                        backgroundColor: '#0D0E0E',
                                        border: '1px solid white',
                                        borderTopRightRadius: '1.5rem',
                                        borderLeft: 'none',
                                        borderBottom: 'none',
                                        outline: 'none'
                                    }} onClick={() => setModalShow(true)}>
                                    COLLABORATOR
                                    <BsFillCaretDownFill style={{ color: '#E1FF00' }} className='ml-4' />
                                </Button>
                            </div >

                            <VerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </div>
                        <img src={Logo} alt="pitch catalyst" style={{ width: '8rem' }} />
                        <div>
                            <div className="d-flex">
                                <Button
                                    className='px-3'
                                    style={{
                                        backgroundColor: '#0D0E0E',
                                        border: '1px solid white',
                                        borderTopLeftRadius: '1.5rem',
                                        borderRight: 'none',
                                        borderBottom: 'none',
                                        outline: 'none'
                                    }} onClick={() => setModalShow(true)}>
                                    <BsFillCaretDownFill style={{ color: '#E1FF00' }} className='mr-4' />
                                    SUBDOMAINS
                                </Button>
                            </div >

                            <VerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </div>
                    </div>
                </div>
                <div className="service-container" >
                    <Container className='py-3' >
                        <div>
                            <p className='text-center' style={{ fontSize: '1.5rem' }} >You Can <b>Track Our Work</b> </p>
                        </div>
                        <div className='my-lg-4'>
                            <Row>
                                <Col lg='3' >
                                    {cardVisibility.deckEditor && (
                                        <ServiceCard
                                            navigationLink="/deck-editor"
                                            icon={<RiEditBoxFill />}
                                            titleText="Edit Pitch Deck"
                                            childText="Now You Can Edit Your Animated Pitch Deck Anytime Anywhere"
                                        />
                                    )}
                                </Col>
                                <Col lg='3'>
                                    {cardVisibility.analytics && (
                                        <ServiceCard
                                            navigationLink="/analytics"
                                            icon={<IoMdAnalytics />}
                                            titleText="Analytics"
                                            childText="Now You Can Check Your Appearance Anytime Anywhere"
                                        />
                                    )}
                                </Col>
                                <Col lg='3'>
                                    {cardVisibility.createSubdomain && (
                                        <ServiceCard
                                            navigationLink="/create-subdomain"
                                            icon={<TbWorldCode />}
                                            titleText="Create Subdomain"
                                            childText="Now Present World Wide"
                                        />
                                    )}
                                </Col>
                                <Col lg='3'>
                                    {cardVisibility.pitchAI && (
                                        <ServiceCard
                                            navigationLink="/pitchAI-editor"
                                            icon={<GiArtificialIntelligence />}
                                            titleText="Pitch AI"
                                            childText="Make Your Deck Best Presentable Using AI Tools"
                                        />
                                    )}
                                </Col>
                            </Row>
                        </div>
                    </Container >
                    <Collaborator />
                </div>
            </div>
        </div >

    );
};

export default Home;
