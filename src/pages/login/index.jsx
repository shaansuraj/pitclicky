import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// style
import './style.css';

// react tostify
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// firebase
import firebase from 'firebase/compat/app'; // Import firebase from 'firebase/compat/app' instead of 'firebase/app'
import 'firebase/compat/auth'; // Import the specific module for authentication
import 'firebase/compat/firestore'; // Import the specific module for Firestore

const LoginPage = () => {
    const Frame1 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/login-page-img/ellipse461.png";
    const Frame2 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/login-page-img/group517.png";
    const Frame3 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/login-page-img/vector5.png";
    const Laptop1 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/login-page-img/frame540.png';
    const Laptop2 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/login-page-img/frame541.png';
    const Laptop3 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/login-page-img/frame542.png';
    const Laptop4 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/login-page-img/frame543.png';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [leftContent, setLeftContent] = useState(false);
    const [laptopRotation, setLaptopRotation] = useState(0);
    const [checkbox, setCheckbox] = useState(false);

    const [fadeIn, setFadeIn] = useState(false);
    const [typingIndex, setTypingIndex] = useState(0);

    // typing animation
    useEffect(() => {
        const typingInterval = setInterval(() => {
            setTypingIndex((prevIndex) => (prevIndex + 1) % 9);
        }, 460);

        return () => {
            clearInterval(typingInterval);
        };
    }, []);


    // smmoth rendering animation
    useEffect(() => {
        const animationTimeout = setTimeout(() => {
            setFadeIn(true);
        }, 300);

        return () => {
            clearTimeout(animationTimeout);
        };
    }, []);
    const navigate = useNavigate();

    // Use state to track the user login status
    // const { userId } = useAuth();
    const [user, setUser] = useState(null);
    console.log(user)
    useEffect(() => {
        setTimeout(() => {
            setLeftContent(true);
        }, 1);
        // Listen for changes in the authentication state
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is logged in, set the user state
                setUser(user);
                navigate('/dashboard');
                // setUserId(user.uid);
            } else {
                // User is not logged in, set the user state to null
                setUser(null);
                // setUserId(null);
            }
        });

        // Clean up the listener when the component unmounts
        return () => unsubscribe();
    }, [navigate]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!checkbox) {
            toast.error('Please agree to the Terms & Conditions!', { autoClose: 2000 });
            return;
        }

        try {
            await loginWithEmailAndPassword(email, password);
            toast.success('Login successful! Redirecting...', { autoClose: 2000 });
            setTimeout(() => {
                navigate('/dashboard');
            }, 2000);
        } catch (error) {
            toast.error('Invalid email or password. Please try again.', { autoClose: 2000 });
        }
    };

    const loginWithEmailAndPassword = async (email, password) => {
        try {
            // Authenticate with Firebase
            const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
            const user = userCredential.user;

            // Set the user state to the logged-in user
            setUser(user);

            return user;
        } catch (error) {
            console.log("error in loginWithEmailAndPassword")
            throw error;
        }
    };

    useEffect(() => {
        // Handler function to prevent vertical scrolling
        const preventScrolling = (e) => {
            // Prevent default behavior for vertical scrolling
            if (e.deltaY !== 0) {
                e.preventDefault();
            }
        };

        // Add the event listener to prevent scrolling on the document
        document.addEventListener('wheel', preventScrolling, { passive: false });

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener('wheel', preventScrolling);
        };
    }, []);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleCheckbook = () => {
        setCheckbox((prev) => !prev);
    };

    useEffect(() => {
        setTimeout(() => {
            laptopRotation === 270 ? setLaptopRotation(0) : setLaptopRotation(laptopRotation + 90);
        }, 5000);
    }, [laptopRotation]);

    return (
        <div className={`login-page-main-container ${fadeIn ? 'fade-in' : ''}`}>
            <div className="left-div">
                <div
                    className="content-div"
                    style={{
                        animation: leftContent && 'formKF 1.2s',
                    }}
                >
                    <h1>
                        Get Access To Your <br />
                        <span>
                            {typingIndex === 0 ? 'D' : ''}
                            {typingIndex === 1 ? 'DA' : ''}
                            {typingIndex === 2 ? 'DAS' : ''}
                            {typingIndex === 3 ? 'DASH' : ''}
                            {typingIndex === 4 ? 'DASHB' : ''}
                            {typingIndex === 5 ? 'DASHBO' : ''}
                            {typingIndex === 6 ? 'DASHBOA' : ''}
                            {typingIndex === 7 ? 'DASHBOAR' : ''}
                            {typingIndex === 8 ? 'DASHBOARD' : ''}
                        </span>

                    </h1>

                    <form onSubmit={handleFormSubmit}>
                        <input type="text" placeholder="Enter Your Email" value={email} onChange={handleEmailChange} required />

                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />

                        <p>
                            <span onClick={handleCheckbook} style={{ width: '1.2rem', height: '1.2rem' }}>
                                {checkbox && <span></span>}
                            </span>
                            I Agree To The Terms & Conditions
                        </p>
                        <button type="submit" className="link-btn">
                            LOGIN
                        </button>
                    </form>
                </div>
            </div>

            <ToastContainer position="bottom-center" />
            <div className="rigth-div">
                <img src={Frame1} alt="" className="bigger-circle" />
                <img src={Frame2} alt="" className="small-circle" />
                <img
                    src={Frame3}
                    alt=""
                    className="s-shape-img"
                    style={{
                        transform:
                            laptopRotation === 0
                                ? 'scale(1) rotate(0deg)'
                                : laptopRotation === 90
                                    ? 'scale(0.8) rotate(90deg)'
                                    : laptopRotation === 180
                                        ? 'scale(1) rotate(0deg)'
                                        : laptopRotation === 270 && 'scale(0.8) rotate(-90deg)',
                    }}
                />
                <div
                    className="laptop-container"
                    style={{
                        transform: `rotate(${-laptopRotation}deg)`,
                        transition: laptopRotation === 0 && '4s',
                        animation: laptopRotation === 0 && 'laptopRotationKF 4s',
                    }}
                >
                    <img src={Laptop1} alt="" className="image1" />
                    <img src={Laptop2} alt="" className="image2" />
                    <img src={Laptop4} alt="" className="image3" />
                    <img src={Laptop3} alt="" className="image4" />
                </div>
            </div>
            {/* {console.log(userId)} */}
        </div>
    );
};

export default LoginPage;