import React from 'react';
import Badge from 'react-bootstrap/Badge';

const BadgeComponent = ({ pageCounter }) => {

    return (
        <>
            <h4>
                <Badge bg="light" text="dark" className="px-lg-3">
                    {pageCounter} /5
                </Badge>
            </h4>

        </>
    );
}

export default BadgeComponent;
