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
import { RephraseGenerator } from '../../../../apis/ai-tools/general';

const ContentRephrase = () => {

    const breadcrumbItems = [
        { text: 'Home', url: '/' },
        { text: 'Pitch AI', url: '/pitchAI-editor' },
        { text: 'Content Rephrasing' },
    ];

    const toneOfVoice = ['excited', 'professional', 'funny', 'encouraging', 'dramatic', 'witty', 'sarcastic', 'engaging', 'creative'];

    const initialValues = {
        content_to_rephrase: '',
        tone_of_voice: 'excited',
        keyword: ''
    };

    const validationSchema = Yup.object().shape({
        content_to_rephrase: Yup.string().required('content is required'),
    });

    const [response, setResponse] = useState('');
    const handleSubmit = async (values) => {
        try {
            const apiResponse = await RephraseGenerator(
                values.content_to_rephrase,
                values.tone_of_voice,
            );

            const extractedText = apiResponse[0].text;
            setResponse(extractedText);
        } catch (error) {
            console.error('Error while fetching data:', error);
            if (error.response) {
                console.log('API Error Response:', error.response);
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
                <h3>Content Rephrasing</h3>
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
                                        <label htmlFor="topic">Content <span style={{ color: 'red' }} >*</span> </label>
                                    </div>
                                    <Field
                                        className="border py-2 px-3"
                                        placeholder='Should contain 5-1000 letters'
                                        type="text"
                                        id="content_to_rephrase"
                                        name="content_to_rephrase"
                                        style={{
                                            borderRadius: '4px',
                                            backgroundColor: 'inherit',
                                            color: 'white',
                                            height: '2.5rem'
                                        }}
                                    />
                                    <ErrorMessage
                                        name="content_to_rephrase"
                                        component="div"
                                        style={{ color: 'red', marginTop: '0.5rem' }}
                                    />
                                </div>

                                <div className='my-3 d-flex flex-row justify-content-between'>
                                    <label htmlFor="topic" className='my-auto' >Tone of Voice </label>
                                    <Field
                                        as="select"
                                        id="tone_of_voice"
                                        name="tone_of_voice"
                                        className="border p-1"
                                        style={{
                                            borderRadius: '4px',
                                            backgroundColor: 'inherit',
                                            color: 'white',
                                        }}
                                    >

                                        {
                                            toneOfVoice.map((tone, index) => {
                                                return (
                                                    <option
                                                        key={index}
                                                        className='border'
                                                        value={tone}
                                                        style={{
                                                            color: 'white',
                                                            background: 'black',
                                                        }}
                                                    >
                                                        {tone}
                                                    </option>
                                                )
                                            })
                                        }
                                    </Field>

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
                                    Extend
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

export default ContentRephrase;