import { useState, useEffect } from 'react';

// formik
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// react bootstrap components
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// componenets
import Breadcrumb from "../../../../components/breadcrumb";
import TextArea from '../../../../components/textarea/index';

const Translate = () => {

    const breadcrumbItems = [
        { text: 'Home', url: '/' },
        { text: 'Pitch AI', url: '/pitchAI-editor' },
        { text: 'Translate' },
    ];

    const initialValues = {
        content: '',
    };

    const validationSchema = Yup.object().shape({
        content: Yup.string().required('Content is required'),
    });

    const handleSubmit = (values) => {
        console.log(values);
    };

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <Container className={`fade-in ${isLoaded ? 'active' : ''}`}>
            <Breadcrumb items={breadcrumbItems} />
            <div className="pb-lg-4 pb-sm-1">
                <h3>Translate</h3>
                <hr color="#E1FF00" width="240vh" className="m-0" />
            </div>
            <Row>
                <Col lg={5}>
                    <div className="border py-3" style={{ borderRadius: '0.5rem' }}>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            <Form
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    maxWidth: '400px',
                                    margin: '0 auto',
                                }}
                            >

                                <div className='my-1 d-flex flex-column'>
                                    <div className='d-flex justify-content-between'>
                                        <label htmlFor="topic">Content <span style={{ color: 'red' }} >*</span> </label>
                                    </div>
                                    <textarea
                                        className='p-2'
                                        placeholder='The world is largest active volcano, Hawaii Mauna Loa, has erupted for the first time in almost 40 years'
                                        name=""
                                        style={{
                                            backgroundColor: 'inherit',
                                            color: 'white',
                                            width: '100%',
                                            height: '6rem',
                                            borderRadius: '0.5rem'
                                        }}
                                    ></textarea>
                                    <ErrorMessage
                                        name="topic"
                                        component="div"
                                        style={{ color: 'red', marginTop: '0.5rem' }}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className='py-2 my-lg-4 my-sm-2'
                                    style={{
                                        maxWidth: '8rem',
                                        backgroundColor: '#EFEFEF',
                                        border: 'none',
                                        borderRadius: '4px',
                                        color: '#333',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Generate
                                </Button>
                            </Form>
                        </Formik>
                    </div>
                </Col>
                <Col lg={7} className="border p-3" style={{ borderRadius: '0.5rem' }}>
                    <div >
                        <div className="d-flex">
                            <h4>Topic: </h4>
                        </div>
                        <TextArea />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Translate;