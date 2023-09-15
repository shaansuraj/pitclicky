import React from 'react';
import { Link } from 'react-router-dom';

// style
import './style.css';

export default function LeftMenu(props) {
    const Shape = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/dashboard/shape589.png';
    const Logo = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/nav-bar-img/frame576.png';
    const GA = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/dashboard/google-analytics.png';
    const WD = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/dashboard/web-design.png';
    const Laptop = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/dashboard/laptop.png';
    return (
        <div className="left-menu-main-content">
            <span className='forword-span'
                onClick={props.LeftSliderTrue}
                style={{
                    display: props.LeftSlider && 'none',
                }}
            >

                &#x203A; <span className='span1'>&#x203A;</span>
            </span>
            <span className='backword-span'
                onClick={props.LeftSliderFalse}
                style={{
                    display: !props.LeftSlider && 'none',
                }}
            >

                &#x203A; <span className='span1'>&#x203A;</span>
            </span>
            <div className="logo-div"><img src={Logo} alt="" /></div>
            <div className="menu-div">
                <Link to='/dashboard' className="menu-btn">
                    <span><img src={WD} alt="" /></span>
                    Dashboard
                </Link>
                <Link to='/analytics' className="menu-btn">
                    <span><img src={GA} alt="" /></span>
                    Analytics
                </Link>
                <Link to='/create-subdomain' className="menu-btn">
                    <span><img src={Laptop} alt="" /></span>
                    Sub-Domain
                </Link>
                <Link to='/pitchAI-editor' className="menu-btn">
                    <span><img src={Laptop} alt="" /></span>
                    Pitch - AI
                </Link>
            </div>

            <div className="shape-img-div">
                <img src={Shape} alt="" className="shape1-img" />
            </div>
        </div>
    )
}
