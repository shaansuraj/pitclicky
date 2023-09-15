import { useState, useEffect } from 'react';

// formik
import { Formik, Form, ErrorMessage, Field } from 'formik';
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

// apis
import { ConclusionGenerator } from '../../../../apis/ai-tools/artcles-blogs'

const ArticleRewriting = () => {

    const breadcrumbItems = [
        { text: 'Home', url: '/' },
        { text: 'Pitch AI', url: '/pitchAI-editor' },
        { text: 'Conclusion Writing' },
    ];
    const [response, setResponse] = useState('');

    const initialValues = {
        article: '',
    };

    const validationSchema = Yup.object().shape({
        article: Yup.string().required('Article is required'),
    });

    const handleSubmit = async (values) => {
        try {

            const article = values.article;
            const apiResponse = await ConclusionGenerator(article);
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
                <h3>Conclusion Writing</h3>
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

                                <div className='my-3 d-flex flex-column'>
                                    <FloatingLabel controlId="floatingTextarea2">
                                        <label htmlFor="topic">Introduction of your Article <span style={{ color: 'red' }} >*</span></label>

                                        <Field
                                            as="textarea"
                                            placeholder="Article should contain 2-6000 words"
                                            name="article"
                                            style={{
                                                backgroundColor: 'inherit',
                                                color: 'white',
                                                width: '100%',
                                                height: '8rem',
                                                borderRadius: '4px',
                                                padding: '0.5rem',
                                            }}
                                        />

                                    </FloatingLabel>
                                    <ErrorMessage
                                        name="article"
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
                        <TextArea response={response} textFieldHeight="34vh" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ArticleRewriting;