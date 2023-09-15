import React, { useState, useEffect } from "react";

// formik
import { Formik, Form, Field } from 'formik';

// react bootstrap
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";

// style
import "./style.css";

// react icons
import { AiOutlineSend } from 'react-icons/ai'

// api
// import { ChatsGenerator } from '../../../../apis/ai-tools/general'

// utils
import BlackBtn from "../../../../utils/images/black-btn.png";

// scroller
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const Chatsonic = () => {
    const [sidebarToggle, setSidebarToggle] = useState(true);
    const [articleContent, setArticleContent] = useState("");
    const [showContent, setShowContent] = useState(true);
    console.log(showContent)
    const handleInputChange = (event) => {
        setEnteredText(event.target.value);
    };


    const initialValues = {
        input_text: '',
    };

    const [enteredText, setEnteredText] = useState("");
    const [enteredTexts, setEnteredTexts] = useState([]);

    const handleInteraction = (event) => {
        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault(); // Prevent default Enter key behavior (e.g., line break)
            if (enteredText.trim() !== "") {
                setEnteredTexts([...enteredTexts, enteredText]); // Add entered text to the list
                setEnteredText("");
                setShowContent(false);
            }
        }
    };

    const handleNewChatClick = () => {
        // Reset the entered texts and article content
        setEnteredTexts([]);
        setArticleContent("");
    };

    const handleClearClick = () => {
        setEnteredTexts([]);
    };


    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className={`fade-in home-section ${isLoaded ? 'active' : ''}`}>
            <div
                className="home-sidebar"
                style={{
                    display: !sidebarToggle && "none",
                    position: "sticky",
                    top: 0,
                }}
            >
                <Container>
                    <div style={{
                        position: 'sticky',
                        top: '0'
                    }}>
                    </div>
                    <div className="sidebar-btn">
                        <Button onClick={handleNewChatClick}>
                            New Chat Box
                        </Button>
                        <Button
                            onClick={handleClearClick}
                            style={{
                                backgroundColor: 'rgb(225, 255, 0)',
                                border: 'none',
                                color: 'black',
                            }} >
                            Clear All Chats
                        </Button>
                    </div>

                    <p>Previous Chats</p>
                    <SimpleBar style={{
                        width: '100%',
                        height: '50vh'
                    }} >
                        <div className="d-flex flex-column">

                        </div>
                    </SimpleBar>
                    <div className="sidebar-bottom-section">
                        <div className="user-email">
                            {/* <div className="sidebar-box"><RxAvatar /></div> */}
                            <div className="email">Username</div>
                            <div className="dot">&#8226;&#8226;&#8226;</div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="right-section">
                <Container className="bottom-section">
                    <SimpleBar
                        style={{
                            height: '70vh',
                            width: '100%',
                            border: '1px solid transparent'
                        }} >
                        <div style={{ height: '10px' }} >
                            <div className="right-box" style={{ paddingBottom: '20px' }}>
                                <h1 style={{ color: 'white' }} >Chatsonic</h1>
                                <p>
                                    Your personalised AI-powered chatbot
                                </p>
                                {enteredTexts.map((text, index) => (
                                    <div className="box" key={index}>
                                        <h4>Entered Text {index + 1}</h4>
                                        <p>{text}</p>
                                        <p>{articleContent}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </SimpleBar>
                </Container>

                <Formik
                    initialValues={initialValues}
                    onSubmit={handleInteraction}
                >
                    <Form className="d-flex px-4" style={{ width: '100%' }} >
                        <Field
                            type="text"
                            placeholder="Send Message"
                            className="my-auto  py-3 px-3"
                            value={enteredText}
                            onChange={handleInputChange}
                            onKeyDown={handleInteraction}
                            id='input_text'
                            name='input_text'
                            style={{
                                backgroundColor: 'inherit',
                                color: 'white',
                                width: '100%',
                                resize: 'none',
                                borderRadius: '4px',
                            }}
                        />
                        <div className="my-auto" style={{
                            position: 'relative',
                            right: '3rem'
                        }}>
                            <Button
                                onClick={handleInteraction}
                                style={{
                                    border: 'none',
                                    backgroundColor: 'inherit'
                                }}>
                                <AiOutlineSend />
                            </Button>
                        </div>
                    </Form>
                </Formik>

            </div>
            <img
                src={BlackBtn}
                alt="toggle"
                className="black-toggle"
                onClick={() => setSidebarToggle(true)}
                style={{
                    display: sidebarToggle && "block",
                }}
            />
        </div>
    );
};

export default Chatsonic;