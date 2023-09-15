import React, { useState, useEffect } from 'react';

// react bootstarp
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// componenets
import TabPanel from '../../components/tabPanel';
import SideNav from '../../components/sidenav';

// style
import './style.css';

const PitchAI = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);


    return (
        <div
            className={`imgbg fade-in ${isLoaded ? 'active' : ''}`}
            style={{
                backgroundColor: 'black',
                overflowY: 'hidden'
            }}
        >
            <Row className='mx-0' >
                <Col lg='1' className='mt-5'>
                    <SideNav />
                </Col>

                <Col lg='10' >
                    <Form.Control
                        type="search"
                        placeholder="eg, Article writing and contennt shortner"
                        className="my-4"
                        aria-label="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {/* </Form> */}
                    <TabPanel searchQuery={searchQuery} />
                </Col>
            </Row>
        </div>
    );
};

export default PitchAI;
