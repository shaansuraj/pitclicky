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

import songGenre from './songGenre'

// apis
import { SongLyricsGenerator } from '../../../../apis/ai-tools/audio'

const SongLyrics = () => {

    const breadcrumbItems = [
        { text: 'Home', url: '/' },
        { text: 'Pitch AI', url: '/pitchAI-editor' },
        { text: 'Song Lyrics' },
    ];

    const initialValues = {
        topic: '',
        genre: 'pop music',
    };

    const validationSchema = Yup.object().shape({
        topic: Yup.string().required('Topic of the song is required'),
    });

    const [response, setResponse] = useState('');

    const handleSubmit = async (values) => {
        try {

            const apiResponse = await SongLyricsGenerator(
                values.topic,
                values.genre,
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
                <h3>Song Lyrics</h3>
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
                                    <label htmlFor="topic">Topic <span style={{ color: 'red' }}>*</span> </label>
                                    <Field
                                        className="border py-2 px-3"
                                        placeholder='Be my side'
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
                                <div className='my-3 d-flex flex-row justify-content-between'>
                                    <label htmlFor="topic">Song Genre </label>
                                    <Field
                                        as="select"
                                        id="genre"
                                        name="genre"
                                        className="border p-1"
                                        style={{
                                            borderRadius: '4px',
                                            backgroundColor: 'inherit',
                                            color: 'white',
                                        }}
                                    >

                                        {
                                            songGenre.map((genre, index) => {
                                                return (
                                                    <option
                                                        key={index}
                                                        className='border'
                                                        value={genre.value}
                                                        style={{
                                                            color: 'white',
                                                            background: 'black',
                                                        }}
                                                    >
                                                        {genre.genre}
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
                                    Generate
                                </Button>
                            </Form>
                        </Formik>
                    </div>
                </Col>
                <Col lg={7} className="border p-3" style={{ borderRadius: '0.5rem' }}>
                    <div >
                        <div className="d-flex">
                            <h4>Topic: </h4>
                        </div>
                        <TextArea response={response} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SongLyrics;