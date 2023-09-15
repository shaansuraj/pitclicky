import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ArticleForm = ({ placeholder }) => {
    const initialValues = {
        topic: '',
        language: '',
    };

    const validationSchema = Yup.object().shape({
        topic: Yup.string().required('Topic is required'),
        language: Yup.string().required('Language is required'),
    });

    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
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
                        <p>1/200 words</p>
                    </div>
                    <Field
                        className="border py-2"
                        placeholder={placeholder}
                        type="text"
                        id="topic"
                        name="topic"
                        style={{
                            borderRadius: '4px',
                            backgroundColor: 'inherit',
                            color: 'white',
                        }}
                    />
                    <ErrorMessage
                        name="topic"
                        component="div"
                        style={{ color: 'red', marginTop: '0.5rem' }}
                    />
                </div>

                <div className='my-3 d-flex flex-column'>
                    <label htmlFor="language">Language:</label>
                    <Field
                        as="select"
                        id="language"
                        name="language"
                        className="border p-1"
                        style={{
                            borderRadius: '4px',
                            backgroundColor: 'black',
                            color: 'white',
                        }}
                    >
                        <option value="">Select Language</option>
                        <option
                            className='border'
                            value="english"
                            style={{
                                color: 'white',
                                background: 'black',
                            }}
                        >
                            English
                        </option>
                        <option
                            className='border'
                            value="spanish"
                            style={{
                                color: 'white',
                                background: 'black',
                            }}
                        >
                            Spanish
                        </option>
                        <option
                            className='border'
                            value="french"
                            style={{
                                color: 'white',
                                backgroundColor: 'black',
                            }}
                        >
                            French
                        </option>
                    </Field>
                    <ErrorMessage
                        name="language"
                        component="div"
                        style={{ color: 'red', marginTop: '0.5rem' }}
                    />
                </div>

                <div className='p-2' style={{ border: '1px solid rgba(225, 255, 0, 1)' }}>
                    <div>
                        <h6>Write a tittle yourself</h6>
                    </div>
                    <p>If this is not selected, then Pitch AI will independently offer options with the tittles.</p>
                </div>

                <button
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
                </button>
            </Form>
        </Formik>
    );
};

export default ArticleForm;
