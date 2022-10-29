import React, { useState, useEffect } from 'react';
import './EntryPopupData.css';
import Multiplying from '../../assets/Multiplying.jpg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col, FloatingLabel } from 'react-bootstrap';
import { use } from 'i18next';
function EntryPopupData() {

  // const Checkbox = ({ name, fnChange, checked=false}) => (

  //   <div className='d-flex mb-2'>
  //     <span>no</span>
  //     <Form.Check
  //       className="switch"
  //       type="switch"
  //       id="custom-switch"
  //       checked={checked}
  //     />
  //     <span>name</span>
  //   </div>

  // )

  // popup apper 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [Multiplying, setMultiplying] = useState('');
  const [MultiplyingNu3_4, setMultiplyingNu3_4] = useState('');
  const [sum, setSum] = useState('');

  // ================= popup data ===============
  const init = {
    PG2Md01Tx1: '',
    PG2Md01Tx2: '',
    PG2Md01Tx3: '',
    PG2Md01Comb1: '',
    PG2Md01Tx4: '',
    PG2Md01Tx5: '',
    PG2Md01Tx6: '',
    PG2Md01Tx7: '',
    PG2Md01Tx8: '',
    PG2Md01Tx9: '',
    PG2Md01Tx10: '',
    PG2Md01Tx11: '',
    PG2Md01Tx12: '',
    PG2Md01Tx13: '',
    PG2Md01Tx14: '',
    PG2Md01Tx15: '',
    PG2Md01Tx16: '',
    check_1: false,
    check_2: false,
    check_3: false,
    check_4: false,
    check_5: true
  }

  const [data, setData] = useState(init);

  const handleChange = ({ target }) => {

    setData({
      ...data,
      [target.name]: target.value,
      hey: Multiplying
    });
  };
  useEffect(() => {
    setMultiplying(parseInt(data.PG2Md01Tx4) * parseInt(data.PG2Md01Tx5));
    setMultiplyingNu3_4(parseInt(data.PG2Md01Tx6) * parseInt(data.PG2Md01Tx7))
    setSum(parseInt((data.PG2Md01Tx11)) + (parseInt(data.PG2Md01Tx12)))

  }, [data.PG2Md01Tx4
    , data.PG2Md01Tx5,
  data.PG2Md01Tx7,
  data.PG2Md01Tx6,
  data.PG2Md01Tx11,
  data.PG2Md01Tx12
  ])

  // ================= popup data ===============

  const sendData = () => {
    console.log(data)
  }

  return (
    <>
      <button variant="primary" onClick={handleShow} className="add_btn">
        Add
      </button>

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
        </Modal.Header>

        <Modal.Body>
          <Container>
            <form>
              {/* section 1 */}
              <Row className="row_1 section-1">

                <Col className='col-sm-12 col-md-4'>
                  <div className="">
                    <div className='mb-2'>
                      <span className='text-center'>PG2md01</span>
                      <Form.Control
                        type="text"
                        placeholder="PG2md01"
                        name="PG2Md01Tx1"
                        value={data.PG2Md01Tx1}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='mb-2'>
                    <span className='text-center'>PG2md02</span>
                      <Form.Control
                        type="text"
                        placeholder="PG2md02"
                        name="PG2Md01Tx2"
                        value={data.PG2Md01Tx2}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </Col>

                <Col sm={12} md={8}>
                  <div className="">
                    <div className='mb-2'>
                    <span  className='text-center'>PG2md03</span>
                      <Form.Select aria-label="Floating label select example" placeholder="PG2md03" name='PG2Md01Comb1' onChange={handleChange}>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </div>
                    <div className='mb-2'>
                    <span  className='text-center'>PG2md04</span>
                      <Form.Control
                        type="text"
                        placeholder="PG2md04"
                        name='PG2Md01Tx3'
                        value={data.PG2Md01Tx3}
                        onChange={handleChange}
                      />
                    </div>

                  </div>
                </Col>

              </Row>

              {/* section 2 */}

              <Row className='row_1 '>
                {/* {col-1-inputs } */}
                <Col md={8}>
                  <Row className='col-1-inputs'>
                    <Col md={8}>
                      <div className='d-flex mb-2'>
                        <div className=' me-2' >
                          <Form.Control
                            type="number"
                            placeholder="PG2Md01Tx4"
                            name='PG2Md01Tx4'
                            value={data.PG2Md01Tx4}
                            onChange={handleChange}
                          />
                        </div>

                        <span className='multiplied_mark'>*</span>

                        <div className='me-2'>
                          <Form.Control
                            type="number"
                            placeholder="PG2Md01Tx5"
                            name='PG2Md01Tx5'
                            value={data.PG2Md01Tx5}
                            onChange={handleChange}
                          />
                        </div>

                        <div className=' resalt'>
                          {Multiplying ? Multiplying : null}
                        </div>
                      </div>

                      <div className='d-flex mb-2'>
                        <div className='me-2'>
                          <Form.Control
                            type="number"
                            placeholder="PG2Md01Tx6"
                            name='PG2Md01Tx6'
                            value={data.PG2Md01Tx6}
                            onChange={handleChange}
                          />
                        </div>
                        <span className='multiplied_mark'>
                          {'*'}
                        </span>


                        <div className='me-2'>
                          <Form.Control
                            type="number"
                            placeholder="PG2Md01Tx7"
                            name='PG2Md01Tx7'
                            value={data.PG2Md01Tx7}
                            onChange={handleChange}
                          />
                        </div>

                        <div className='me-2 resalt'>
                          {MultiplyingNu3_4 ? MultiplyingNu3_4 : null}
                        </div>

                      </div>
                    </Col>

                    <Col md={4}>
                      <div>
                        <div className='me-2 mb-2 mr-2 PG2Md01Lb'>

                          <span className=''>PG2Md01Lb5</span>
                          <Form.Control
                            type="text"
                            placeholder="PG2Md01Tx8"
                            name="PG2Md01Tx8"
                            value={data.PG2Md01Tx8}
                            onChange={handleChange}
                          />
                        </div>
                        <div className='me-2 mr-2 PG2Md01Lb'>

                        <span className=''>PG2Md01Lb6</span>
                          <Form.Control
                            type="text"
                            placeholder="PG2Md01Tx9"
                            name="PG2Md01Tx9"
                            value={data.PG2Md01Tx9}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                    </Col>
                  </Row>

                  <Row className='section-2-row2'>
                    <Col md={8}>
                      <div className='d-flex mb-2 row_2_col_1 section-2-row2-div1'>

                        <div className='me-2 resalt section-2-row2-resalt'>
                          {Multiplying ? Multiplying : null}
                        </div>
                        <span style={{ margin:'20px 10px 0px' }}> x </span>

                        <div className='me-2'>
                          <span>PG2md01Lb7</span>
                          <Form.Control
                            type="number"
                            placeholder="PG2Md01Tx10"
                            name='PG2Md01Tx10'
                            value={data.PG2Md01Tx10}
                            onChange={handleChange}
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
                            value={data.PG2Md01Tx11}
                            onChange={handleChange}
                          />
                        </div>
                        <span style={{ margin:'30px 10px 0px' }}> + </span>

                        <div className='me-2'>
                        <span >PG2md01Lb9</span>

                          <Form.Control type="number"
                            placeholder="PG2Md01Tx12"
                            name='PG2Md01Tx12'
                            value={data.PG2Md01Tx12}
                            onChange={handleChange} />
                        </div>

                        {/* <div className='me-2 resalt'>
                          {sum ? sum : null}
                        </div> */}

                      </div>
                    </Col>

                    <Col md={4}>
                      <div>
                        <div className='me-2  mb-2'>
                        <span>PG2md01Lb10</span>

                          <Form.Control
                            type="text"
                            placeholder="PG2Md01Tx14"
                            name="PG2Md01Tx14"
                            value={data.PG2Md01Tx14}
                            onChange={handleChange}
                          />
                        </div>
                        <div className='me-2'>
                        <span>PG2md01Lb11</span>

                          <Form.Control
                            type="text"
                            placeholder="PG2Md01Tx15"
                            name="PG2Md01Tx15"
                            value={data.PG2Md01Tx15}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                    </Col>
                  </Row>

                </Col>

                {/* {col-1-switch } */}
                <Col md={4} className="all_switchs">
                  <div className="row_checkbox row-PGMd01Sw1">
                    <p>PGMd01Lb15 </p>

                    <div className='d-flex align-items-center justify-content-center mb-2'>
                      <span className='mx-2'>PGMd01Sw1-1</span>
                      <input
                        id='PGMd01Sw1'
                        type="checkbox"
                        name="check_1"
                        onChange={(val) => setData({ ...data, check_1: val.target.checked })}
                        checked={data.check_1}
                      />
                      <label htmlFor="PGMd01Sw1"></label>
                      <span className='mx-2'>PGMd01Sw1-2</span>
                    </div>

                    <div className='d-flex align-items-center justify-content-center mb-2'>
                      <span className='mx-2 multiplied_mark'>PGMd01Sw2-1</span>
                      <input
                        id='PGMd01Sw2'
                        type="checkbox"
                        name="check_2"
                        onChange={(val) => setData({ ...data, check_2: val.target.checked })}
                        checked={data.check_2}
                      />
                      <label htmlFor="PGMd01Sw2">Toggle</label>
                      <span className='mx-2'>PGMd01Sw2-2</span>
                    </div>
                  </div>

                  <div className="row_checkbox">

                    <div className='d-flex align-items-center justify-content-center mb-2'>
                      <span className='mx-2'>PGMd01Sw3-1</span>
                      <input
                        id='PGMd01Sw3'
                        type="checkbox"
                        name="check_3"
                        onChange={(val) => setData({ ...data, check_3: val.target.checked })}
                        checked={data.check_3}
                      />
                      <label htmlFor="PGMd01Sw3">Togglee</label>
                      <span className='mx-2'>PGMd01Sw3-1</span>
                    </div>

                    <div className='d-flex align-items-center justify-content-center mb-2'>
                      <span className='mx-2 multiplied_mark'>PGMd01Lb16</span>
                      <input
                        id='PGMd01Sw4'
                        type="checkbox"
                        name="check_4"
                        onChange={(val) => setData({ ...data, check_4: val.target.checked })}
                        checked={data.check_4}
                      />
                      <label htmlFor="PGMd01Sw4">Toggle</label>
                      <span className='mx-2'>PGMd01Sw4</span>
                    </div>
                  </div>
                  <div className="row_checkbox">

                    <div className='d-flex align-items-center justify-content-center mb-2'>
                      <span className='mx-2'>PGMd01Lb17</span>
                      <input
                        id='PGMd01Sw5'
                        type="checkbox"
                        name="check_5"
                        onChange={(val) => setData({ ...data, check_5: val.target.checked })}
                        checked={data.check_5}
                      />
                      <label htmlFor="PGMd01Sw5">Togglee</label>
                      <span className='mx-2'>PGMd01Sw5</span>
                    </div>

                  </div>

                </Col>

              </Row>

              {/* section 4 */}

              <Row className='row_1 align-items-center'>
                <Col md={8}>
                  <span style={{fontSize:'12px'}}>PG2Md01Lb14</span>
                  <div className='d-flex mb-2'>
                    <Form.Control type="text"
                      placeholder="PG2Md01Tx16"
                      name='PG2Md01Tx16'
                      value={data.PG2Md01Tx16}
                      onChange={handleChange}
                    />
                  </div>
                </Col>

                <Col md={4} className='d-flex align-content-center ' style={{height:'40px', marginTop:'11px'}}>
                 <Button>PG2Md01But1</Button>
                </Col>

              </Row>
            </form>
          </Container>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={sendData}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

export default EntryPopupData