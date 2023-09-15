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
import { BUlletPointAnsGenerator } from '../../../../apis/ai-tools/general';

const BulletPointAnswer = () => {

    const breadcrumbItems = [
        { text: 'Home', url: '/' },
        { text: 'Pitch AI', url: '/pitchAI-editor' },
        { text: 'Bullet Points' },
    ];

    const [response, setResponse] = useState('');
    const handleSubmit = async (values) => {
        try {
            const apiResponse = await BUlletPointAnsGenerator(values.que);

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

    const initialValues = {
        que: '',
    };

    const validationSchema = Yup.object().shape({
        que: Yup.string().required('Question is required'),
    });

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <Container className={`fade-in ${isLoaded ? 'active' : ''}`} style={{ overflowX: 'hidden' }} >
            <Breadcrumb items={breadcrumbItems} />
            <div className="pb-lg-4 pb-sm-1">
                <h3>Bullet Points</h3>
                <hr color="#E1FF00" width="210vh" className="m-0" />
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
                                        <label htmlFor="topic">Question</label>
                                    </div>
                                    <Field
                                        as="textarea"
                                        className="border py-2 px-3"
                                        placeholder="Article should contains 2-600 words"
                                        id="que"
                                        name="que"
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
                        <TextArea response={response} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default BulletPointAnswer;