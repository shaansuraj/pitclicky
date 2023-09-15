import React, { useState, useEffect } from 'react';

// formik
import {
    Formik,
    Form,
    Field,
    ErrorMessage
} from 'formik';
import * as Yup from 'yup';

// react bootstrap component
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// components
import Breadcrumb from '../../../../components/breadcrumb';
import IdeaCard from './IdeaCard';

// scroller
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

// api
import { BlogIdeaGenerator } from '../../../../apis/ai-tools/artcles-blogs'

const ArticleAndBlog = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [response, setResponse] = useState('');
    const [currentTopic, setCurrentTopic] = useState('');

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const breadcrumbItems = [
        { text: 'Home', url: '/' },
        { text: 'Pitch AI', url: '/pitchAI-editor' },
        { text: 'AI Article Idea' },
    ];

    const initialValues = {
        topic: '',
    };

    const validationSchema = Yup.object().shape({
        topic: Yup.string().required('Topic is required'),
    });

    const handleSubmit = async (values) => {
        try {
            const capitalizedTopic = values.topic.charAt(0).toUpperCase() + values.topic.slice(1);
            setCurrentTopic(capitalizedTopic);

            const apiResponse = await BlogIdeaGenerator(capitalizedTopic);
            const extractedText = apiResponse[0].text;
            setResponse(extractedText);
        } catch (error) {
            console.error('Error while fetching data:', error);
        }
    };



    return (
        <Container className={`fade-in ${isLoaded ? 'active' : ''}`} >
            <Breadcrumb items={breadcrumbItems} />
            <div className="pb-lg-4 pb-sm-1">
                <h3>AI Article Idea</h3>
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
                                        placeholder='Artificial Intelligence in Copywriting'
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

                                <div className='my-1 d-flex flex-column'>
                                    <div className='d-flex justify-content-between'>
                                        <label htmlFor="topic">Primary Keyword:</label>
                                    </div>
                                    <Field
                                        className="border py-2 px-3"
                                        placeholder='No need to seperate keyword by comma'
                                        type="text"
                                        id="keyword"
                                        name="keyword"
                                        style={{
                                            borderRadius: '4px',
                                            backgroundColor: 'inherit',
                                            color: 'white',
                                            height: '2.5rem'
                                        }}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    onClick={handleSubmit}
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
                            <h4>Topic: {currentTopic} </h4>
                        </div>
                        <SimpleBar style={{ width: '99%', border: '1px solid transparent', maxHeight: '14rem' }} hideTracksWhenNotNeeded={true}>
                            <IdeaCard idea={response} />
                        </SimpleBar>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ArticleAndBlog;
