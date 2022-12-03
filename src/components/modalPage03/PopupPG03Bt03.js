import React, { useState, useEffect } from 'react';
import classes from './index.module.css'
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { Container, Row, Col, } from 'react-bootstrap';
import TablePG03B03 from './TablePG03B03';

const Div = (props) => (

    <Col>
        <div className={classes.main_1}>
            <div className={classes.UserTapleDetails_label}>{props.label}</div>
            <div className={classes.UserTapleDetails_label_api}>{props.labelApi} {props.labelApi_2 && `X ${props.labelApi_2}`}</div>
        </div>
    </Col>
)

function PopupPG03Bt03({ Show, setShow, pG04Lb01a }) {
    const [modalData, setModalData] = useState([]);
    let firstObj = modalData[0]

    console.log(firstObj && firstObj.id)
    console.log('modalData', modalData)

    useEffect(() => {
        const fetchReasonDataSelection = async () => {
            const result = await axios(
                `https://tstauth.smartgate-egypt.com/jobs/PG04Bt03/${pG04Lb01a}`,
            );
            setModalData(result.data);
        };
        fetchReasonDataSelection();
    }, [pG04Lb01a]);

    return (
        <div>
            <Modal
                size="lg"
                show={Show}
                onHide={() => setShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Large Modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container fluid>
                        <div className={classes.main}>

                            <Row>
                                <Div label='PG04Md01Lb01' labelApi={firstObj ? firstObj.pG04Md01Lb01a : "notfound"} />
                                <Div label='PG04Md01Lb06' labelApi={firstObj ? firstObj.pG04Md01Lb06a : "notfound"} />
                            </Row>
                            <Row>
                                <Div label='PG04Md01Lb02' labelApi={firstObj ? firstObj.pG04Md01Lb02a : "notfound"} />
                                <Div label='PG04Md01Lb07' labelApi={firstObj ? firstObj.pG04Md01Lb07a : "notfound"} />

                            </Row>
                            <Row>
                                <Div label='PG04Md01Lb03' labelApi={firstObj ? firstObj.pG04Md01Lb03a : "notfound"} />

                            </Row>
                            <Row>
                                <Div label='PG04Md01Lb04' labelApi={firstObj ? firstObj.pG04Md01Lb04a1 : "notfound"} labelApi_2={firstObj ? firstObj.pG04Md01Lb04a2 : "notfound"} />
                                <Div label='PG04Md01Lb08' labelApi={firstObj ? firstObj.pG04Md01Lb08a : "notfound"} />
                            </Row>
                            <Row>
                                <Div label='PG04Md01Lb05' labelApi={firstObj ? firstObj.pG04Md01Lb05a : "notfound"} />
                            </Row>
                        </div>

                    </Container>

                </Modal.Body>
                <Modal.Body>
                    <TablePG03B03 modalData={modalData}/>
                </Modal.Body>
                <Modal.Body>
                    <div className={classes.buttons}>
                        <button>PG04Md01Bu01</button>
                        <button>PG04Md01Bu02</button>
                        <button>PG04Md01Bu02</button>
                    </div>
                </Modal.Body>
            </Modal>


        </div>
    )
}

export default PopupPG03Bt03