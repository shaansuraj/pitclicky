import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function ActivationCard({ status, username, subdomain }) {
    const buttonStyles = {
        backgroundColor: status === "Active" ? "yellow" : "black",
        color: status === "Active" ? "black" : "white",
    };

    const tooltipText = "Status check"; // Your tooltip text goes here

    return (
        <Container>
            <div className="d-flex justify-content-between p-1">
                <div>
                    <small className='my-0'>{subdomain}@pitchcatalyst.com</small>
                </div>
                <div>
                    <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={<Tooltip id="button-tooltip">{tooltipText}</Tooltip>}
                    >
                        <Button style={buttonStyles}>
                            {status}
                        </Button>
                    </OverlayTrigger>
                </div>
            </div>
            <hr />
        </Container>
    );
}

export default ActivationCard;
