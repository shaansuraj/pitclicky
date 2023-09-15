import { useState, useEffect } from 'react';

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
import { ParaGenerator } from '../../../../apis/ai-tools/artcles-blogs';

const Paragraph = () => {

    const breadcrumbItems = [
        { text: 'Home', url: '/' },
        { text: 'Pitch AI', url: '/pitchAI-editor' },
        { text: 'Paragraph Writing' },
    ];
    const [response, setResponse] = useState('');
    const [capitalizedTopic, setCapitalizedTopic] = useState('');

    const initialValues = {
        topic: '',
        tone: '',
        keywords: '',
    };

    const validationSchema = Yup.object().shape({
        topic: Yup.string().required('Paragraph topic is required'),
    });

    const handleSubmit = async (values) => {
        try {

            // Capitalize the first letter of the topic
            const topic = values.topic;
            const capitalizedTopic = topic.charAt(0).toUpperCase() + topic.slice(1);
            setCapitalizedTopic(capitalizedTopic);

            const apiResponse = await ParaGenerator(capitalizedTopic, values.tone, values.keywords);

            const extractedText = apiResponse[0].text;
            setResponse(extractedText);
        } catch (error) {
            console.error('Error while fetching data in handler:', error);
            if (error.response) {
                console.log('API Error Response in handler:', error.response); // Log the full error response
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
                <h3>Paragraph Writing</h3>
                <hr color="#E1FF00" width="250vh" className="m-0" />
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
                                        <label htmlFor="topic">Topic:</label>
                                    </div>
                                    <Field
                                        className="border py-2 px-3"
                                        placeholder='Topic should contain 2-200 words'
                                        type="text"
                                        id="topic"
                                        name="topic"
                                        style={{
                                            borderRadius: '4px',
                                            backgroundColor: 'inherit',
                                            color: 'white',
                                            height: '2.5rem'
                                        }}
                                    />
                                    <ErrorMessage
                                        name="topic"
                                        component="div"
                                        style={{ color: 'red', marginTop: '0.5rem' }}
                                    />
                                </div>

                                <div className='my-3 d-flex justify-content-around'>
                                    <label htmlFor="tone">Tone Of Paragraph</label>
                                    <div>
                                        <Field
                                            as="select"
                                            id="tone"
                                            name="tone"
                                            className="border p-1"
                                            style={{
                                                borderRadius: '4px',
                                                backgroundColor: 'inherit',
                                                color: 'white',
                                            }}
                                        >
                                            <option
                                                className='border'
                                                value="excited"
                                                style={{
                                                    color: 'white',
                                                    background: 'black',
                                                }}
                                            >
                                                Excited
                                            </option>
                                            <option
                                                className='border'
                                                value="professional"
                                                style={{
                                                    color: 'white',
                                                    background: 'black',
                                                }}
                                            >
                                                Professional
                                            </option>
                                            <option
                                                className='border'
                                                value="encouraging"
                                                style={{
                                                    color: 'white',
                                                    background: 'black',
                                                }}
                                            >
                                                Encouraging
                                            </option>
                                            <option
                                                className='border'
                                                value="funny"
                                                style={{
                                                    color: 'white',
                                                    background: 'black',
                                                }}
                                            >
                                                Funny
                                            </option>
                                            <option
                                                className='border'
                                                value="dramatic"
                                                style={{
                                                    color: 'white',
                                                    background: 'black',
                                                }}
                                            >
                                                Dramatic
                                            </option>
                                            <option
                                                className='border'
                                                value="witty"
                                                style={{
                                                    color: 'white',
                                                    backgroundColor: 'black',
                                                }}
                                            >
                                                Witty
                                            </option>
                                            <option
                                                className='border'
                                                value="sarcastic"
                                                style={{
                                                    color: 'white',
                                                    backgroundColor: 'black',
                                                }}
                                            >
                                                Sarcastic
                                            </option>
                                            <option
                                                className='border'
                                                value="engaging"
                                                style={{
                                                    color: 'white',
                                                    backgroundColor: 'black',
                                                }}
                                            >
                                                Engaging
                                            </option>
                                            <option
                                                className='border'
                                                value="creative"
                                                style={{
                                                    color: 'white',
                                                    backgroundColor: 'black',
                                                }}
                                            >
                                                Creative
                                            </option>
                                        </Field>
                                    </div>
                                </div>

                                <div className='my-1 d-flex flex-column'>
                                    <div className='d-flex justify-content-between'>
                                        <label htmlFor="keywords">Keywords</label>
                                        <small style={{ color: '#E1FF00' }} >No need to seperate keywords using comma</small>
                                    </div>
                                    <Field
                                        className="border py-2 px-3"
                                        placeholder='Keywords shoud contain 0-100 words'
                                        type="text"
                                        id="keywords"
                                        name="keywords"
                                        style={{
                                            borderRadius: '4px',
                                            backgroundColor: 'inherit',
                                            color: 'white',
                                            height: '2.5rem'
                                        }}
                                    />
                                    <ErrorMessage
                                        name="keywords"
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
                            <h4>Topic: {capitalizedTopic} </h4>
                        </div>
                        <TextArea response={response} textFieldHeight="36.5vh" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Paragraph;