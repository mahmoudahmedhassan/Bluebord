import React, { useState } from 'react';
import classes from './tablemodal.module.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Pg2md02Table from './Pg2md02Table';

const SectionOne = () => (
    <div>
        <Row>
            <Col lg={5}>
                <div className={classes.SectionOne}>
                    <span>PG2md02Lb1</span>
                    <Form.Control
                        type="text"
                        placeholder="PG2md02Lb1a"
                        name="PG2Md01Tx1"
                        disabled
                    />
                </div>
                <div className={classes.SectionOne}>
                    <span>PG2md02Lb2</span>
                    <Form.Control
                        type="text"
                        placeholder="PG2md02Lb12"
                        name="PG2Md01Tx1"
                    />
                </div>
            </Col>
            <Col lg={7}>
                <div className={classes.SectionOne}>
                    <span>PG2md02Lb3</span>
                    <Form.Select aria-label="Floating label select example" placeholder="PG2md03" name='PG2Md01Comb1'>
                        <option>select</option>
                        <option>select</option>
                        <option>select</option>
                    </Form.Select>
                </div>

                <div className={classes.SectionOne}>
                    <span>PG2md02Lb4</span>
                    <Form.Control
                        type="text"
                        placeholder="PG2md02Lb4"
                        name="PG2Md01Tx1"
                    />
                </div>
            </Col>
        </Row>
    </div >
)

const InputField = (props) => {
    return (
        <div className={classes.InputField}>
            <span>{props.label}</span>
            <Form.Control
                type="text"
                placeholder={props.label}
                name={props.name}
                value={props.label_api}
             />
        </div>
)}

const InputFieldNumber = (props) => {
    return (
        <div className='me-2'>
            <Form.Control
                type="number"
                placeholder="PG2Md01Tx7"
                name='PG2Md01Tx7'
            // value={data.PG2Md01Tx7}
            onChange={props.handleChange}
            />
        </div>
    )
}

const CheckBox = (props) => {
    return (
        <div className='d-flex align-items-center justify-content-center mb-2'>
            <span className='mx-2'>{props.label_1}</span>
            <input
                id={props.label_1}
                type="checkbox"
                // name="check_5"
            // onChange={(val) => setData({ ...data, check_5: val.target.checked })}
            // checked={data.check_5}
            />
            <label htmlFor={props.label_1}>Togglee</label>
            <span className='mx-2'>{props.label_2}</span>
        </div>
    )

}

function TableModal({ setLgShow, lgShow }) {
    const initialState = {
        pG2Md01Ch01a: true,
        pG2Md01Ch02a: false,
        pG2Md01Ch031a: false,
        pG2Md01Ch032a: false,
        pG2Md01Comb1a: 84,
        pG2Md01Lb1a: "20-093-22-1310-6",
        pG2Md01Sw4a: false,
        pG2Md01Sw5a: false,
        pG2Md01Sw11a: true,
        pG2Md01Sw12a: false,
        pG2Md01Sw21a: true,
        pG2Md01Sw22a: false,
        pG2Md01Sw31a: true,
        pG2Md01Sw32a: false,
        pG2Md01Tx1a: "0",
        pG2Md01Tx2a: "Pro 34308Pro 34308Pro 34308Pro 34308Pro 34308Pro 34308Pro 34308Pro 34308",
        pG2Md01Tx3a: 175.7,
        pG2Md01Tx4a: 3,
        pG2Md01Tx5a: 527.1,
        pG2Md01Tx6a: "LM34308",
        pG2Md01Tx7a: 134,
        pG2Md01Tx8a: 8,
        pG2Md01Tx9a: 1072,
        pG2Md01Tx10a: "LM34308",
        pG2Md01Tx11a: 527.1,
        pG2Md01Tx12a: 1300,
        pG2Md01Tx13a: 1087,
        pG2Md01Tx16a: 6,
        pG2Md01Tx17a: "Rk34308",
        pG2Md01Tx20a: null,
        pG2Md02Tx11a: 34308,
        pG2Md02Tx14a: 6,
        pG2Md02Tx15a: 0,
        pG2Md02Tx18a: "0",
        pG2Md02Tx19a: "0",

    }

    const [data, setData] = useState(initialState);
    console.log('data',data.value)
 
 
    const { PG2Md01Data } = useSelector(state => state.PG2Md01DataSlice)
    console.log('PG2Md01Data', PG2Md01Data)
    return (
        <>
            <Modal
                show={lgShow}
                size="xl"
                // dialogClassName="modal-90w"
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container fluid style={{ fontSize: '12px' }}>
                        <Row>
                            <Col lg={8}>
                                <Container>
                                    <form>
                                        {/* section 1 */}
                                        <SectionOne />

                                        {/* section 2 */}
                                        <Row className='row_1 '>
                                            {/* {col-1-inputs } */}
                                            <Col lg={8}>
                                                <Row className='col-1-inputs'>
                                                    <Col lg={7}>
                                                        <div className='d-flex mb-2'>
                                                            <InputFieldNumber />
                                                            <span className={classes.multiplied_mark}>X</span>
                                                            <InputFieldNumber />

                                                            <div className={classes.resalt}>
                                                                {/* {Multiplying ? Multiplying : null} */}
                                                            </div>
                                                        </div>

                                                        <div className='d-flex mb-2'>

                                                            <InputFieldNumber />
                                                            <span className={classes.multiplied_mark}>
                                                                {'X'}
                                                            </span>
                                                             <InputFieldNumber />
                                                             <div className={classes.resalt}>
                                                                {/* {MultiplyingNu3_4 ? MultiplyingNu3_4 : null} */}
                                                            </div>
                                                         </div>
                                                    </Col>

                                                    <Col lg={5}>
                                                        <div>
                                                            <div className='me-2 mb-2 mr-2 PG2Md01Lb'>
                                                                 <span className=''>PG2Md01Lb5</span>
                                                                <Form.Control
                                                                    type="text"
                                                                    placeholder="PG2Md01Tx8"
                                                                    name="PG2Md01Tx8"
                                                                // value={data.PG2Md01Tx8}
                                                                // onChange={handleChange}
                                                                />
                                                            </div>
                                                            <div className='me-2 mr-2 PG2Md01Lb'>

                                                                <span className=''>PG2Md01Lb6</span>
                                                                <Form.Control
                                                                    type="text"
                                                                    placeholder="PG2Md01Tx9"
                                                                    name="PG2Md01Tx9"
                                                                // value={data.PG2Md01Tx9}
                                                                // onChange={handleChange}
                                                                />
                                                            </div>
                                                        </div>

                                                    </Col>
                                                </Row>

                                                <Row className='section-2-row2'>
                                                    <Col lg={7}>
                                                        <div className='d-flex mb-2 row_2_col_1 section-2-row2-div1'>

                                                            <div className={classes.resalt}>
                                                                {/* {Multiplying ? Multiplying : null} */}
                                                            </div>
                                                            <span className={classes.multiplied_mark} >  {'X'} </span>

                                                            <div className='me-2'>
                                                                <span>PG2md01Lb7</span>
                                                                <Form.Control
                                                                    type="number"
                                                                    placeholder="PG2Md01Tx10"
                                                                    name='PG2Md01Tx10'
                                                                // value={data.PG2Md01Tx10}
                                                                // onChange={handleChange}
                                                                />
                                                            </div>

                                                        </div>

                                                        <div className='d-flex mb-2 row_2_col_1'>
                                                            <div className='me-2'>
                                                                <span>PG2md01Lb8</span>

                                                                <Form.Control
                                                                    type="number"
                                                                    placeholder="PG2Md01Tx11"
                                                                    name='PG2Md01Tx11'
                                                                // value={data.PG2Md01Tx11}
                                                                // onChange={handleChange}
                                                                />
                                                            </div>
                                                            <span style={{ marginTop: '20px' }} className={classes.multiplied_mark}> {'+'}</span>

                                                            <div className='me-2'>
                                                                <span >PG2md01Lb9</span>

                                                                <Form.Control type="number"
                                                                    placeholder="PG2Md01Tx12"
                                                                    name='PG2Md01Tx12'
                                                                // value={data.PG2Md01Tx12}
                                                                // onChange={handleChange}
                                                                />
                                                            </div>
                                                        </div>
                                                    </Col>

                                                    <Col lg={5}>
                                                        <div>
                                                            <div className='me-2  mb-2'>
                                                                <span>PG2md01Lb10</span>

                                                                <Form.Control
                                                                    type="text"
                                                                    placeholder="PG2Md01Tx14"
                                                                    name="PG2Md01Tx14"
                                                                // value={data.PG2Md01Tx14}
                                                                // onChange={handleChange}
                                                                />
                                                            </div>
                                                            <div className='me-2'>
                                                                <span>PG2md01Lb11</span>

                                                                <Form.Control
                                                                    type="text"
                                                                    placeholder="PG2Md01Tx15"
                                                                    name="PG2Md01Tx15"
                                                                // value={data.PG2Md01Tx15}
                                                                // onChange={handleChange}
                                                                />
                                                            </div>
                                                        </div>

                                                    </Col>
                                                </Row>

                                            </Col>

                                            {/* {col-1-switch } */}
                                            <Col lg={4} className={classes.all_switchs}>

                                                <div className="row_checkbox row-PGMd01Sw1">
                                                    <p>PGMd01Lb15 </p>
                                                    <CheckBox label_1='Pg2Md02Sw1-1a' label_2='Pg2Md02Sw1-2a' />
                                                    <CheckBox label_1='Pg2Md02Sw2-1a' label_2='Pg2Md02Sw2-2a'/>
                                                </div>

                                                <div className="row_checkbox">
                                                    <CheckBox label_1='Pg2Md02Sw3-1a' label_2='Pg2Md02Sw3-2a'/>
                                                    <CheckBox label_1='Pg2Md02Sw4-1a' label_2='Pg2Md02Sw4-2a'/>
                                                </div>
                                                <div className="row_checkbox">
                                                    <CheckBox label_1='Pg2Md02Sw5-1a' label_2='Pg2Md02Sw5-2a'/>
                                                </div>
                                            </Col>

                                        </Row>

                                        {/* section 4 */}

                                        <Row className='row_1 align-items-center'>
                                            <Col lg={8}>
                                                <InputField label='PG2Md01Lb14' label_api={data.pG2Md01Tx17a} name={data.pG2Md01Tx17a} setData={setData} data={data}/>
                                            </Col>

                                            <Col lg={4}>
                                                <div className={classes.submit}>
                                                    <button>PG2Md01But1</button>
                                                </div>
                                            </Col>

                                        </Row>
                                    </form>
                                </Container>
                            </Col>

                            {/* table */}
                            <Col lg={4}>
                                <div>
                                    <Pg2md02Table dataTable={PG2Md01Data} />
                                </div>

                                <div className='d-flex mt-3 justify-content-between '>
                                    <InputField label="pG2Md02Lb18a" />
                                    <InputField label="pG2Md02Lb19a" />
                                </div>
                                <div>
                                    <InputField label="pG2Md02Lb20a" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default TableModal