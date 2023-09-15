import { useState, useEffect } from 'react';

// formik
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// react bootstrap components
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// componenets
import Breadcrumb from "../../../../components/breadcrumb";
import TextArea from '../../../../components/textarea/index';

// apis
import { ActiveToPassiveGenerator } from '../../../../apis/ai-tools/general'

const PassiveToActive = () => {

    const breadcrumbItems = [
        { text: 'Home', url: '/' },
        { text: 'Pitch AI', url: '/pitchAI-editor' },
        { text: 'Passive To Active' },
    ];

    const initialValues = {
        sentence: '',
    };

    const validationSchema = Yup.object().shape({
        sentence: Yup.string().required('Sentence is required'),
    });

    const [response, setResponse] = useState('');
    const handleSubmit = async (values) => {
        try {
            const apiResponse = await ActiveToPassiveGenerator(values.sentence);

            const extractedText = apiResponse[0].text;

            setResponse(extractedText);
        } catch (error) {
            console.error('Error while fetching data:', error);
            if (error.response) {
                console.log('API Error Response:', error.response); // Log the full error response
            }
        }
    };

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <Container className={`fade-in ${isLoaded ? 'active' : ''}`}>
            <Breadcrumb items={breadcrumbItems} />
            <div className="pb-lg-4 pb-sm-1">
                <h3>Passive To Active</h3>
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
                                    <Field
                                        as="textarea"
                                        className="border py-2 px-3"
                                        placeholder="Article should contains 20-1000 letters"
                                        id="sentence"
                                        name="sentence"
                                        style={{
                                            resize: 'none',
                                            borderRadius: '4px',
                                            backgroundColor: 'inherit',
                                            color: 'white',
                                            minHeight: '8rem',
                                            width: '100%',
                                            border: 'none',
                                            outline: 'none'
                                        }}
                                    />
                                    <ErrorMessage
                                        name="sentence"
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
                        <TextArea response={response} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default PassiveToActive;