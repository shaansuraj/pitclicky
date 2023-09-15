// note using style of ./toolcard.css

import React from 'react';
import { Link } from 'react-router-dom';
import { Tilt } from 'react-tilt';
import Card from 'react-bootstrap/Card';

const ServiceCard = ({ navigationLink, icon, titleText, childText }) => {


    const iconStyle = {
        fontSize: '4rem',
        border: '2px solid #E1FF02',
        borderRadius: '4rem',
        padding: '0.5rem',
        color: 'white',
        backgroundColor: 'inherit',
        margin: 'auto',
        transition: 'transform 0.3s, background-color 0.3s',
    };

    const cardBodyStyle = {
        transition: 'transform 0.3s',
    };

    return (
        <Tilt options={{ reverse: false, scale: 1 }} >
            <div className="cardStyle" style={{ borderRadius: '1rem' }}>
                <Link to={navigationLink} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {React.cloneElement(icon, { style: iconStyle })}
                    <Card.Body style={cardBodyStyle}>
                        <Card.Title style={{ fontSize: '1.5rem' }}>{titleText}</Card.Title>
                        <Card.Text style={{ fontSize: '10px' }}>{childText}</Card.Text>
                    </Card.Body>
                </Link>
            </div>
        </Tilt>
    );
};

export default ServiceCard;
