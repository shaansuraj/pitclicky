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
import TextArea from '../../../../components/textarea';

// apis
import { ReviewResponseGenerator } from '../../../../apis/ai-tools/audio';

const ReviewResponder = () => {

    const breadcrumbItems = [
        { text: 'Home', url: '/' },
        { text: 'Pitch AI', url: '/pitchAI-editor' },
        { text: 'Review Responder' },
    ];

    const [response, setResponse] = useState('');

    const initialValues = {
        company: '',
        companyEmail: '',
        reviewType: 'positive',
        review: '',
    };

    const validationSchema = Yup.object().shape({
        company: Yup.string().required('Company Name is required'),
        companyEmail: Yup.string().required('Company Email is required'),
        review: Yup.string().required('Review is required'),
    });

    const handleSubmit = async (values) => {
        try {

            const apiResponse = await ReviewResponseGenerator(
                values.company,
                values.companyEmail,
                values.reviewType,
                values.review
            );

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
                <h3>Review Responder</h3>
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
                                <div className="d-flex flex-column my-1">
                                    <label htmlFor="company">Company Name <span style={{ color: 'red' }} >*</span></label>

                                    <Field
                                        type="text"
                                        placeholder="Company Name"
                                        className="border p-1"
                                        id='company'
                                        name='company'
                                        style={{
                                            borderRadius: '4px',
                                            backgroundColor: 'inherit',
                                            color: 'white',
                                            height: '2.5rem'
                                        }}
                                    />
                                    <ErrorMessage
                                        name="company"
                                        component="div"
                                        style={{ color: 'red', marginTop: '0.5rem' }}
                                    />
                                </div>

                                <div className='d-flex flex-row justify-content-between my-3'>
                                    <div className="d-flex flex-column">
                                        <label htmlFor="companyEmail">Company Email Address <span style={{ color: 'red' }} >*</span></label>

                                        <Field
                                            type="text"
                                            placeholder="Company email address"
                                            className="border p-1"
                                            id='companyEmail'
                                            name='companyEmail'
                                            style={{
                                                borderRadius: '4px',
                                                backgroundColor: 'inherit',
                                                color: 'white',
                                                height: '2.5rem'
                                            }}
                                        />
                                        <ErrorMessage
                                            name="ecompanyEmailmail"
                                            component="div"
                                            style={{ color: 'red', marginTop: '0.5rem' }}
                                        />
                                    </div>
                                    <div className='d-flex flex-column justify-content-around'>
                                        <label htmlFor="reviewType">Review Type</label>
                                        <div>
                                            <Field
                                                as="select"
                                                id="reviewType"
                                                name="reviewType"
                                                className="border p-1"
                                                defaultValue="positive"
                                                style={{
                                                    borderRadius: '4px',
                                                    backgroundColor: 'inherit',
                                                    color: 'white',
                                                }}
                                            >

                                                <option
                                                    className='border'
                                                    value="positive"
                                                    style={{
                                                        color: 'white',
                                                        background: 'black',
                                                    }}
                                                >
                                                    Positive
                                                </option>
                                                <option
                                                    className='border'
                                                    value="negative"
                                                    style={{
                                                        color: 'white',
                                                        background: 'black',
                                                    }}
                                                >
                                                    Negative
                                                </option>
                                                <option
                                                    className='border'
                                                    value="neutral"
                                                    style={{
                                                        color: 'white',
                                                        background: 'black',
                                                    }}
                                                >
                                                    Neutral
                                                </option>
                                            </Field>
                                        </div>
                                    </div>
                                </div>


                                <div className='d-flex flex-column my-1'>
                                    <label htmlFor="review">Review <span style={{ color: 'red' }} >*</span></label>
                                    <Field
                                        as="textArea"
                                        className="border p-1"
                                        placeholder='Description should contain 5-600 words'
                                        type="text"
                                        id="review"
                                        name="review"
                                        style={{
                                            borderRadius: '4px',
                                            backgroundColor: 'inherit',
                                            color: 'white',
                                            width: '100%',
                                        }}
                                    />
                                    <ErrorMessage
                                        name="review"
                                        component="div"
                                        style={{ color: 'red', marginTop: '0.5rem' }}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className='py-2 my-1'
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
                        <TextArea response={response} textFieldHeight='40vh' />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ReviewResponder;