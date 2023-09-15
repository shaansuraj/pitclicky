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
import { AnalogiesGenerator } from '../../../../apis/ai-tools/audio'

const AnalogyMaker = () => {

    const breadcrumbItems = [
        { text: 'Home', url: '/' },
        { text: 'Pitch AI', url: '/pitchAI-editor' },
        { text: 'Analogy Maker' },
    ];

    const [response, setResponse] = useState('');

    const initialValues = {
        content: '',
    };

    const validationSchema = Yup.object().shape({
        content: Yup.string().required('Content is required'),
    });

    const handleSubmit = async (values) => {
        try {

            const apiResponse = await AnalogiesGenerator(values.content);

            const extractedText = apiResponse[0].text;
            setResponse(extractedText);
        } catch (error) {
            console.error('Error while fetching data:', error);
            console.log('API Response:', error.response); // Log the full error response
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
                <h3>Analogy Maker</h3>
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

                                <div className='my-3 d-flex flex-column'>
                                    <label htmlFor="topic">Content <span style={{ color: 'red' }}>*</span></label>

                                    <Field
                                        as="textArea"
                                        className="border py-2 px-3"
                                        placeholder='Content should contain 5-200 words'
                                        type="text"
                                        id="content"
                                        name="content"
                                        style={{
                                            borderRadius: '4px',
                                            backgroundColor: 'inherit',
                                            color: 'white',
                                            width: '100%',
                                            height: '20vh'
                                        }}
                                    />
                                    <ErrorMessage
                                        name="content"
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
                        <TextArea response={response} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AnalogyMaker;