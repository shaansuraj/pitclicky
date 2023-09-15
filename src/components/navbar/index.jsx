import React, { useState, useEffect } from 'react';

// style
import "./style.css";

// components
import NavbarOneComp from './Nested-Comp';

// const Logo = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/nav-bar-img/frame577.png';

export default function NavbarComp() {
    const [scrolling, setScrolling] = useState(0);
    const [clientHeight, setClientHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY);
        };

        const resizeViewPort = () => {
            setClientHeight(document.documentElement.offsetHeight);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', resizeViewPort);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', resizeViewPort);
        };
    }, []);

    return (
        <div className='navbar-comp-main-container'>
            <div
                className="horizontal-scroll-bar"
                style={{
                    paddingLeft: window.location.pathname === '/' ? `${scrolling / clientHeight * 5}%` :
                        window.location.pathname === '/about-us' && `${scrolling / clientHeight * 15.2}%`,
                    opacity: window.location.pathname !== '/' && window.location.pathname !== '/about-us' ? 0 : 1
                }}
            >
                <div className="padding-div"></div>
            </div>

            <NavbarOneComp />
        </div>
    );
}
