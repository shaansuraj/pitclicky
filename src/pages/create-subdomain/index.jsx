import React, { useState, useEffect, useRef } from "react";

//**  sound
import useSound from 'use-sound';
import ClickSound from '../../utils/sounds/click-sound.mp3';

// ** react bootstrap componenets
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// ** toster
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ** components
import ScrollableSection from "./scrollableSection";

// ** auth and firebase
import { useAuth } from "../login/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import '../../firebaseConfig';

// style.css
import "./style.css";

const Group1 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/dashboard/group545.png";
const Group2 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/dashboard/group544.png";

export default function CreateSubDomain() {
    const [animePlay, setAnimePlay] = useState(false);
    const [textToShow, setTextToShow] = useState("");
    const [subDomain, setSubDomain] = useState('');
    const [subdomainsList, setSubdomainsList] = useState([]);
    const { userId } = useAuth();
    const elementRef = useRef(null);
    const [playClickSound] = useSound(ClickSound, { volume: 0.9 });

    const [loadingSubdomains, setLoadingSubdomains] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [subdomainsLoaded, setSubdomainsLoaded] = useState(false);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setAnimePlay(entry.isIntersecting);
        });

        observer.observe(elementRef.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (animePlay) {
            const txt = "http://www";
            let i = 0;

            const typeWriterInterval = setInterval(() => {
                if (i < txt.length) {
                    setTextToShow((prevText) => prevText + txt.charAt(i));
                    i++;
                } else {
                    clearInterval(typeWriterInterval);
                }
            }, 200);

            return () => clearInterval(typeWriterInterval);
        }
    }, [animePlay]);

    function handleSubDomainChange(event) {
        setSubDomain(event.target.value);
    }

    async function fetchSubdomains() {
        try {
            setLoadingSubdomains(true);
            const firestore = firebase.firestore();
            const userDocRef = firestore.collection(userId).doc('subdomains');
            const userDoc = await userDocRef.get();

            if (userDoc.exists) {
                const subdomainsData = userDoc.data();
                const subdomains = Object.values(subdomainsData).filter(
                    (value) => typeof value === 'string'
                );
                setSubdomainsList(subdomains);
            }
        } catch (error) {
            if (error.message !== "Function Firestore.collection() cannot be called with an empty path.") {
                console.error('Error fetching subdomains:', error);
            }
        } finally {
            setLoadingSubdomains(false);
            setLoadingProgress(0);
        }
    }

    async function handleSendRequest() {
        try {
            if (!subDomain) {
                return;
            }

            if (subdomainsList.includes(subDomain)) {
                toast.error('Sub-domain already exists!', {
                    autoClose: 3000,
                    hideProgressBar: false,
                });
                return;
            }

            const firestore = firebase.firestore();
            const userDocRef = firestore.collection(userId).doc('subdomains');
            const userDoc = await userDocRef.get();

            const newSubdomainField = `subdomain${userDoc.data().count + 1}`;
            await userDocRef.update({
                [newSubdomainField]: subDomain,
                count: firebase.firestore.FieldValue.increment(1)
            });

            setSubDomain('');

            playClickSound();

            toast.success('Sub-domain added successfully!', {
                autoClose: 2000,
                hideProgressBar: false,
            });
        } catch (error) {
            console.error('Error sending request:', error);

            playClickSound();

            toast.error('Error sending request. Please try again!', {
                autoClose: 3000,
                hideProgressBar: false,
            });
        }
    }

    return (
        <div className="create-sub-domain-main-container" ref={elementRef}>
            <div className="left-img-div">
                <img
                    src={Group1}
                    alt=""
                    className="group1-img group"
                    style={{
                        transform: animePlay ? "scale(1)" : "scale(0.8)",
                        opacity: animePlay ? "1" : "0",
                    }}
                />
                <img src={Group2} alt="" className="group2-img group" />
                <div className="left-search-div">
                    <div className="para-div">
                        <p>{textToShow}</p>
                        <span></span>
                    </div>
                    <div className="search-icon">
                        <span>&#9906;</span>
                    </div>
                </div>
            </div>
            <div className="right-content-div">
                <h1 className="my-2">
                    <span className="arrow-span">&#x2039;</span> Create Your
                    <br /> <b>Sub-Domain</b>
                </h1>
                <div className="my-lg-3 my-sm-2">
                    <div className="d-flex">
                        <Form.Control
                            type="text"
                            placeholder="Enter Your Sub-Domain"
                            onChange={handleSubDomainChange}
                            style={{
                                width: '70%'
                            }}
                        />
                        <Button
                            onClick={handleSendRequest}
                            className="send-req-btn"
                            style={{
                                width: '30%'
                            }}
                        >
                            Send Request
                        </Button>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-between mb-3">
                        <h4>Subdomain History</h4>
                        <Button
                            onClick={() => {
                                fetchSubdomains();
                                setSubdomainsLoaded(true); // Set the subdomains loaded status to true
                            }}
                            className="load-subdomains-button" // Add your custom class here
                            style={{
                                backgroundColor: 'inherit',
                                border: '1px solid rgb(225, 255, 0)',
                                color: 'rgb(225, 255, 0)'
                            }} // Adjust the margin to avoid overlapping
                        >
                            Load Subdomains
                        </Button>
                    </div>
                    {loadingSubdomains ? (
                        <div
                            className="loading-bar"
                            style={{
                                marginTop: '10px',
                                height: '10px',
                                width: '100%',
                                background: 'inherit',
                                position: 'relative',
                            }}>
                            <div className="progress" style={{ width: `${loadingProgress}%` }}></div>
                        </div>
                    ) : (
                        // Conditionally render the ScrollableSection component based on subdomainsLoaded state
                        subdomainsLoaded && (
                            <ScrollableSection
                                subdomainsList={subdomainsList}
                            />
                        )
                    )}
                </div>
                <ToastContainer />
            </div>
        </div>
    );
}
