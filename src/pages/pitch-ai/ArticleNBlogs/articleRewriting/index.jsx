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
import { ArticleRewritingGenerator } from '../../../../apis/ai-tools/artcles-blogs'

const ArticleRewriting = () => {

    const breadcrumbItems = [
        { text: 'Home', url: '/' },
        { text: 'Pitch AI', url: '/pitchAI-editor' },
        { text: 'AI Article Rewriting' },
    ];

    const [response, setResponse] = useState('');

    const initialValues = {
        desc: '',
        keywords: '',
    };

    const validationSchema = Yup.object().shape({
        desc: Yup.string().required('Description is required'),
        keywords: Yup.string()
            .required('Keywords is required')
            .matches(/^[\w\s.,!?'"()]+$/, 'Please enter a valid sentence.'),
    });


    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const handleSubmit = async (values) => {
        try {

            const keywords = values.keywords.trim(); // Remove leading and trailing whitespace
            const apiResponse = await ArticleRewritingGenerator(values.desc, keywords);

            const extractedText = apiResponse[0].text;
            // console.log(extractedText)
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
                <h3>AI Article Rewriting</h3>
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
                                        <label htmlFor="topic">Description <span style={{ color: 'red' }} >*</span> </label>
                                    </div>
                                    <Field
                                        as="textarea"
                                        className="border py-2 px-3"
                                        placeholder="Article should contains 2-600 words"
                                        id="desc"
                                        name="desc"
                                        style={{
                                            resize: 'none',
                                            borderRadius: '4px',
                                            backgroundColor: 'inherit',
                                            color: 'white',
                                            minHeight: '6rem',
                                            width: '100%',
                                            border: 'none',
                                            outline: 'none'
                                        }}
                                    />
                                    <ErrorMessage
                                        name="desc"
                                        component="div"
                                        style={{ color: 'red', marginTop: '0.5rem' }}
                                    />
                                </div>

                                <div className='my-1 d-flex flex-column'>
                                    <div className='d-flex justify-content-between'>
                                        <label htmlFor="keywords">Keyword<span style={{ color: 'red' }} >*</span></label>
                                    </div>
                                    <Field
                                        className="border py-2 px-3"
                                        placeholder='Keywords should contain 2-100 words'
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
                                    Rewrite
                                </Button>
                            </Form>
                        </Formik>
                    </div>
                </Col>
                <Col lg={7} className="border p-3" style={{ borderRadius: '0.5rem' }}>
                    <div >
                        <TextArea response={response} textFieldHeight="38vh" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ArticleRewriting;