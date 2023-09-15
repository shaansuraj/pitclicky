import { useState, useEffect } from 'react';

// formik
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// react bootstrap components
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// componenets
import Breadcrumb from "../../../../components/breadcrumb";
import TextArea from '../../../../components/textarea/index';

// api
import { BlogOutlinesGenerator } from '../../../../apis/ai-tools/artcles-blogs'

const ArticleOutline = () => {

    const breadcrumbItems = [
        { text: 'Home', url: '/' },
        { text: 'Pitch AI', url: '/pitchAI-editor' },
        { text: 'AI Article Outline' },
    ];

    const [response, setResponse] = useState('');
    const [currentTopic, setCurrentTopic] = useState('');

    const initialValues = {
        topic: '',
        intro: '',
    };

    const validationSchema = Yup.object().shape({
        topic: Yup.string().required('Topic is required'),
        intro: Yup.string().required('intro to this fiels is required'),
    });

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const handleSubmit = async (values) => {
        try {
            const capitalizedTopic = values.topic.charAt(0).toUpperCase() + values.topic.slice(1);
            setCurrentTopic(capitalizedTopic);

            const apiResponse = await BlogOutlinesGenerator(values.topic, values.intro);
            const extractedText = apiResponse[0].text;
            setResponse(extractedText);
        } catch (error) {
            console.error('Error while fetching data:', error);
            console.log('API Response:', error.response); // Log the full error response
        }
    };



    return (
        <Container className={`fade-in ${isLoaded ? 'active' : ''}`}>
            <Breadcrumb items={breadcrumbItems} />
            <div className="pb-lg-4 pb-sm-1">
                <h3>AI Article Outline</h3>
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

                                <div className='my-3 d-flex flex-column'>
                                    <FloatingLabel controlId="floatingTextarea2">
                                        <label htmlFor="topic">Introduction <span style={{ color: 'red' }}>*</span></label>

                                        <Field
                                            as="textArea"
                                            className="border py-2 px-3"
                                            placeholder='Intro should contain 2-1500 words'
                                            type="text"
                                            id="intro"
                                            name="intro"
                                            style={{
                                                borderRadius: '4px',
                                                backgroundColor: 'inherit',
                                                color: 'white',
                                                width: '100%',
                                            }}
                                        />
                                    </FloatingLabel>
                                    <ErrorMessage
                                        name="intro"
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
                            <h4>Topic: <b>{currentTopic}</b> </h4>
                        </div>
                        <TextArea response={response} textFieldHeight="30vh" topic={currentTopic} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ArticleOutline;