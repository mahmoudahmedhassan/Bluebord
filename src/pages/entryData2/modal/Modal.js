import React, { useState } from 'react';
import classes from './modal.module.css';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

import PopupTable from './PopupTable';
import { useSelector } from 'react-redux'
import SpinnerLoading from '../../../components/sppiner/Sppiner';

const Div = (props) => (
    <div className={classes.labels}>
        <div className={classes.label}>{props.label}</div>
        <div className={classes.label_api}>{props.label_api} {props.label_api2 && +'X' + props.label_api2}</div>
    </div>
)


function Popup({ data }) {
    const [lgShow, setLgShow] = useState(false);
    let firstObj = data[0]
    const { loading } = useSelector(state => state.PG5MdDataSlice);


    return (
        <div>
            <button className={classes.PG05Bt01} onClick={() => setLgShow(true)}> PG05Bt01</button>

            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Large Modal
                    </Modal.Title>
                </Modal.Header>
                {loading ? (<div className='text-center' style={{ height: '200px' }}><SpinnerLoading /></div>) : (
                    <Modal.Body>
                        {/* popup PG05Tb  info */}
                        <Container fluid>
                            <Row>
                                <Col><Div label='PG5Md1lbo1' label_api={firstObj?.pg5Md1Lb01a} /></Col>
                                <Col><Div label='PG5Md1lbo4' label_api={firstObj?.pg5Md1Lb04a} /></Col>
                                <Col><Div label='PG5Md1lbo6' label_api={firstObj?.pg5Md1Lb06a} /></Col>
                            </Row>
                            <Row>
                                <Col><Div label='PG5Md1lbo2' label_api={firstObj?.pg5Md1Lb02a} /></Col>
                                <Col><Div label='PG5Md1lbo5' label_api={firstObj?.pg5Md1Lb05a1} label_api2={firstObj?.pg5Md1Lb05a2} /></Col>
                                <Col><Div label='PG5Md1lbo7' label_api={firstObj?.pg5Md1Lb07a} /></Col>
                            </Row>
                            <Row>
                                <Col lg={8}><Div label='PG5Md1lbo3' label_api={firstObj?.pg5Md1Lb03a} /></Col>
                                <Col lg={4}><Div label='PG5Md1lbo8' label_api={firstObj?.pg5Md1Lb08a} /></Col>
                            </Row>
                            <Row>
                                <Col><Div label='PG5Md1lbo9' label_api={firstObj?.pg5Md1Lb09a} /></Col>
                            </Row>
                        </Container>

                        {/* PG05 table */}
                        <Container fluid>
                            <PopupTable tableData={data} />
                        </Container>

                        <Container fluid style={{marginTop:"30px"}}>
                            <Row>
                                <Col md={8}>
                                    <div className={classes.input_filed}>
                                        <span>PG5Md1lbo10</span>
                                        <Form.Control type="text" placeholder="PG5Md1lbo1tx1" />
                                    </div>

                                </Col>
                                <Col md={4}>
                                    <div className={classes.submit}>
                                        <button>submit</button>

                                    </div>
                                </Col>
                            </Row>
                        </Container>


                    </Modal.Body>
                )}

            </Modal>
        </div>
    )
}

export default Popup