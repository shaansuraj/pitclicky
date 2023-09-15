import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// style
import './style.css';

// react bootstrap
import { Container } from 'react-bootstrap'

// react icons
import { RiCloseCircleLine, RiEditBoxFill } from 'react-icons/ri'
import { IoMdAnalytics } from 'react-icons/io';
import { TbWorldCode } from 'react-icons/tb';
import { GiArtificialIntelligence } from 'react-icons/gi';

// utils
import SideBarBtn1 from '../../utils/images/sidebar-btns/sidebar-btn1.png'
import SideBarBtn2 from '../../utils/images/sidebar-btns/sidebar-btn2.png'
import Logo from '../../utils/images/logo.png'

function SideNav() {
    const [sideNavWidth, setSideNavWidth] = useState(0);
    const [hoverLink, sethoverLink] = useState(null);

    const handleLinkHover = (linkIndex) => {
        sethoverLink(linkIndex);
    };

    const location = useLocation();

    const linkStyles = (linkIndex) => ({
        backgroundColor: hoverLink === linkIndex || location.pathname === links[linkIndex].link ? 'white' : 'inherit',
        border: `1px solid ${hoverLink === linkIndex ? 'black' : 'white'}`,
        fontSize: '1rem',
        borderRadius: '0.2rem',
        color: hoverLink === linkIndex || location.pathname === links[linkIndex].link ? 'black' : 'white', // Set color to black when the link is active
        transition: 'background-color 0.3s, border-color 0.3s, color 0.3s',
        margin: '1rem 0',
    });


    const links = [
        {
            name: 'Edit Pitch Deck',
            link: '/deck-editor',
            icon: <RiEditBoxFill />
        },
        {
            name: 'Analytics',
            link: '/analytics',
            icon: <IoMdAnalytics />
        },
        {
            name: 'Sub-Domain',
            link: '/create-subdomain',
            icon: <TbWorldCode />
        },
        {
            name: 'Pitch AI',
            link: '/pitchAI-editor',
            icon: <GiArtificialIntelligence />
        },
    ];

    const toggleNav = () => {
        setSideNavWidth(sideNavWidth === 0 ? 350 : 0);
    };

    return (
        <div style={{ zIndex: 100, position: 'sticky', top: '0rem', left: 0, height: '100vh', overflowY: 'auto' }}>
            <div id="mySidenav" className="sidenav" style={{ width: sideNavWidth, color: 'white' }}>
                <span className="closebtn" style={{ cursor: 'pointer' }} onClick={toggleNav}><RiCloseCircleLine /></span>
                <Container className='text-center' >
                    <Link to='/dashboard' >
                        <img src={Logo} alt="pitch-catalyst" style={{ width: '55%' }} />
                    </Link>
                    <Container className='mt-5 d-flex flex-column justify-content-between' style={{ color: 'black' }} >
                        {links.map((link, index) => (
                            <Link
                                className='pl-5'
                                key={index}
                                to={link.link}
                                style={linkStyles(index)}
                                onMouseEnter={() => handleLinkHover(index)}
                                onMouseLeave={() => handleLinkHover(null)}
                            >
                                <div className="d-flex">
                                    <div className="mx-3">{link.icon}</div>
                                    {link.name}
                                </div>
                            </Link>
                        ))}
                    </Container>

                </Container>
            </div>

            <div
                onClick={toggleNav}
                style={{
                    cursor: 'pointer',
                    marginLeft: `${sideNavWidth}px`,
                    transition: 'transform 0.5s',
                    transform: sideNavWidth === 350 ? 'rotate(-180deg)' : 'rotate(0)'
                }}>
                <img src={SideBarBtn2} alt="" style={{ height: '1rem' }} />
                <img src={SideBarBtn1} alt="" style={{ height: '1rem' }} />
            </div>
        </div>
    );
}

export default SideNav;
