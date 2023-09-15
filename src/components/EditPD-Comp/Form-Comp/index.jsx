import React from 'react';
import './style.css';
import { Button, Row, Col } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';


export default function FormComp(props) {
    const Frame = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/dashboard/macbook-pro17.png';


    return (
        <div className="editpd-form-comp-main-container">

            <p className="slide-num-para">{props.Count + 1}</p>
            <button className="cross-btn" onClick={props.HandleEditCompVisibilityFalse}>&#215;</button>

            <Row>
                <Col>
                    <div className='border' >
                        <Col>
                            <Row>
                                {/* <p><span>PROBLEM</span> SLIDE</p> */}
                            </Row>
                            <Row>
                                <img src={Frame} alt="" style={{
                                    maxHeight: '15rem',
                                    position: 'relative',
                                    right: '5rem'
                                }} />
                            </Row>
                            <Row>
                                <Button className='ml-5' >SAVE</Button>
                            </Row>
                        </Col>
                    </div>
                </Col>
                <Col>
                    <div>
                        <Col>
                            <Row>
                                <p>HEADING 1</p>
                                <input type="text" name="" id="" />
                            </Row>
                            <Row></Row>
                            <Row></Row>
                        </Col>
                    </div>
                </Col>
                <Col>
                    <div>
                        <Col>
                            <Row>
                                <p>HEADING 1</p>
                                <input type="text" name="" id="" />
                            </Row>
                            <Row></Row>
                            <Row></Row>
                        </Col>
                    </div>
                </Col>
            </Row>



        </div>
    )
}
