import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// style
import './style.css';

// componenets
import DropdownComp from '../../dropdownComp';

const Logo = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/nav-bar-img/frame577.png';

export default function NavbarOneComp() {

  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  // Function to handle logout
  const handleLogout = async () => {
    const userConfirmedLogout = window.confirm("Are you sure you want to logout?");

    if (userConfirmedLogout) {
      try {
        await firebase.auth().signOut();
        setLoggedIn(false);

        // Replace the current history entry with the logout route
        navigate('/');

        navigate('/');
      } catch (error) {
        console.error('Error logging out:', error);
      }
    }
  };

  const navbarClassName = loggedIn ? 'navbar-one-comp-main-container' : 'navbar-one-comp-main-container transparent';

  return (
    <div className={navbarClassName + ' d-flex justify-content-between'}>
      <div className="logo-div my-auto">
        <Link to={loggedIn ? '/dashboard' : '/'} className="link-tag">
          <img src={Logo} alt="" />
        </Link>
      </div>
      {/* Show the navigation items if loggedIn is true */}
      {loggedIn && (
        <div className="d-flex justify-content-between my-auto">
          <Link className="nav-btns" to="/dashboard" style={{ textDecoration: 'none' }}>
            Our Service
          </Link>

          <Link className="nav-btns" to="https://pitchcatalyst.com/about-us" style={{ textDecoration: 'none' }}>
            About Us
          </Link>

          <Link className="nav-btns" to="https://pitchcatalyst.com/team-up" style={{ textDecoration: 'none' }}>
            Connect Us
          </Link>

          {/* Logout button */}

        </div>
      )}
      {loggedIn && (
        <div className="d-flex align-items-center my-auto" >
          <DropdownComp handlerFunction={handleLogout} />
        </div>
      )}
    </div>
  );
}
