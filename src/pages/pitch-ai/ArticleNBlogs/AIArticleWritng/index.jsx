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

// api
import { ArticleGenerator } from '../../../../apis/ai-tools/artcles-blogs'

const ArticleAndBlog = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [response, setResponse] = useState('');
    const [capitalizedTopic, setCapitalizedTopic] = useState('');

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const breadcrumbItems = [
        { text: 'Home', url: '/' },
        { text: 'Pitch AI', url: '/pitchAI-editor' },
        { text: 'AI Article Writing' },
    ];

    const initialValues = {
        topic: '',
        intro: '',
        keywords: [],
    };

    const validationSchema = Yup.object().shape({
        topic: Yup.string().required('Topic is required'),
        intro: Yup.string().required('Into to you article is required'),
        keywords: Yup.string().required('Keywords is required'),
    });

    const handleSubmit = async (values) => {
        try {
            const keywordsArray = values.keywords.split(',').map(keyword => keyword.trim());

            // Capitalize the first letter of the topic
            const topic = values.topic;
            const capitalizedTopic = topic.charAt(0).toUpperCase() + topic.slice(1);
            setCapitalizedTopic(capitalizedTopic);

            const apiResponse = await ArticleGenerator(capitalizedTopic, values.intro, keywordsArray);

            const extractedText = apiResponse.data[0].content;
            setResponse(extractedText);
        } catch (error) {
            console.error('Error while fetching data:', error);
            if (error.response) {
                console.log('API Error Response:', error.response); // Log the full error response
            }
        }
    };

    return (
        <Container className={`fade-in ${isLoaded ? 'active' : ''}`}>
            <Breadcrumb items={breadcrumbItems} />
            <div className="pb-lg-4 pb-sm-1">
                <h3>AI Article writer</h3>
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
                                        <label htmlFor="topic">Topic Of The Article</label>
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
                                        <label htmlFor="topic">Introduction Of The Article</label>
                                    </div>
                                    <Field
                                        className="border py-2 px-3"
                                        placeholder='Intro to your article'
                                        type="text"
                                        id="intro"
                                        name="intro"
                                        style={{
                                            borderRadius: '4px',
                                            backgroundColor: 'inherit',
                                            color: 'white',
                                            height: '2.5rem'
                                        }}
                                    />
                                    <ErrorMessage
                                        name="intro"
                                        component="div"
                                        style={{ color: 'red', marginTop: '0.5rem' }}
                                    />
                                </div>

                                <div className='my-1 d-flex flex-column'>
                                    <div className='d-flex justify-content-between'>
                                        <label htmlFor="keywords">Keywords</label>
                                        <small style={{ color: "#E1FF00" }} >Seperate Keywords by comma i.e, ","</small>
                                    </div>
                                    <Field
                                        className="border py-2 px-3"
                                        placeholder='Enter keywords separated by commas'
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
                                    <b>Generate</b>
                                </Button>
                            </Form>
                        </Formik>
                    </div>
                </Col>
                <Col lg={7} className="border p-3" style={{ borderRadius: '0.5rem' }}>
                    <div >
                        <div className="d-flex">
                            <h4>Topic: <b>{capitalizedTopic} </b></h4>
                        </div>
                        <TextArea response={response} textFieldHeight="38vh" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ArticleAndBlog;