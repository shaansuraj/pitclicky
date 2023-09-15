import { useState, useEffect } from "react";

import Container from 'react-bootstrap/Container'

const PhotoSonic = () => {

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <Container className={`fade-in ${isLoaded ? 'active' : ''}`}>
            <h1 className="d-flex justify-content-center align-item-center text-center my-auto py-auto">
                Comming Soon
            </h1>
        </Container>
    )
}

export default PhotoSonic;