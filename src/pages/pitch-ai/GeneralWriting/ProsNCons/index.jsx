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
import TextArea from './output';

// apis
import { ProsAndConsGenerator } from '../../../../apis/ai-tools/general';

const ProsAndCons = () => {

    const breadcrumbItems = [
        { text: 'Home', url: '/' },
        { text: 'Pitch AI', url: '/pitchAI-editor' },
        { text: 'Pros And Cons Writer' },
    ];

    const [cons, setCons] = useState('');
    const [pros, setPros] = useState('');
    const handleSubmit = async (values) => {
        try {
            const apiResponse = await ProsAndConsGenerator(values.paragraph);

            const resPros = apiResponse[0].pros;
            const resCons = apiResponse[0].cons;

            setCons(resCons);
            setPros(resPros);
        } catch (error) {
            console.error('Error while fetching data:', error);
            if (error.response) {
                console.log('API Error Response:', error.response); // Log the full error response
            }
        }
    };

    const initialValues = {
        paragraph: '',
    };

    const validationSchema = Yup.object().shape({
        paragraph: Yup.string().required('Content is required'),
    });

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <Container className={`fade-in ${isLoaded ? 'active' : ''}`} style={{ overflowX: 'hidden' }} >
            <Breadcrumb items={breadcrumbItems} />
            <div className="pb-lg-4 pb-sm-1">
                <h3>Pros And Cons</h3>
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
                                        <label htmlFor="topic">Content <span style={{ color: 'red' }} >*</span></label>
                                    </div>
                                    <Field
                                        as="textarea"
                                        className="border py-2 px-3"
                                        placeholder="Article should contains 2-600 words"
                                        id="paragraph"
                                        name="paragraph"
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
                        <TextArea prosRes={pros} consRes={cons} textFieldHeight='36vh' />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ProsAndCons;