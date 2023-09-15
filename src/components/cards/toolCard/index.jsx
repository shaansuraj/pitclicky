import React from 'react';
import { Link } from 'react-router-dom';
import { Tilt } from 'react-tilt';
import Card from 'react-bootstrap/Card';
import './style.css'

const IconCard = ({ redirectLink, icon, titleText, childText }) => {

    const iconStyle = {
        fontSize: '4rem',
        background: "white",
        borderRadius: '8px',
        padding: '1rem',
        color: 'black'
    };

    return (

        <Tilt options={{ reverse: false, scale: 1 }} >
            <Link to={redirectLink} style={{
                textDecoration: 'none',
                color: 'white'
            }} >
                <Card className='my-2 cardStyle card-container'>
                    {React.cloneElement(icon, { style: iconStyle })}
                    <Card.Body>
                        <Card.Title style={{ fontSize: '22px' }} >{titleText}</Card.Title>
                        <Card.Text style={{ fontSize: '12px' }} >{childText}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Tilt>
    )
}

export default IconCard;