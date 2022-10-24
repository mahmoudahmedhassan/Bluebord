import React, { useState,useEffect } from 'react';
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
    po1tx01: '',
    po1tx02: '',
    po1tx03: '',
    po1tx04: '',
    po1tx05: '',
    po1tx06: '',
    g1_page1_nub01: '',
    g1_page1_nub02: '',
    g1_page1_nub03: '',
    g1_page1_nub04: '',
    g1_page1_nub05: '',
    g1_page1_nub06: '',
    g1_page1_nub07: '',
    dropdown: '',
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
    setMultiplying(parseInt(data.g1_page1_nub01) * parseInt(data.g1_page1_nub02));
    setMultiplyingNu3_4(parseInt(data.g1_page1_nub03) * parseInt(data.g1_page1_nub04))
    setSum(parseInt((data.g1_page1_nub06)) + ( parseInt(data.g1_page1_nub07)))

 },[data.g1_page1_nub02
  ,data.g1_page1_nub01,
  data.g1_page1_nub03,
  data.g1_page1_nub04,
  data.g1_page1_nub06,
  data.g1_page1_nub07
])

  // ================= popup data ===============

  const sendData = () => {
    console.log(data)
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{ margin: '20px' }}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Container>
            <form>
              {/* section 1 */}
              <Row className="row_1">

                <Col className='col-sm-12 col-md-4'>
                  <div className="">
                    <div className='mb-2'>
                      <Form.Control
                        type="text"
                        placeholder="g1 page1 text01"
                        name="po1tx01"
                        value={data.po1tx01}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='mb-2'>
                      <Form.Control
                        type="text"
                        placeholder="g1 page1 text02"
                        name="po1tx02"
                        value={data.po1tx02}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </Col>

                <Col sm={12} md={8}>
                  <div className="">
                    <div className='mb-2'>
                      <Form.Select aria-label="Floating label select example" placeholder="drop" name='dropdown' onChange={handleChange}>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </div>
                    <div className='mb-2'>
                      <Form.Control
                        type="text"
                        placeholder="g1 page1 text03"
                        name='po1tx03'
                        value={data.po1tx03}
                        onChange={handleChange}
                      />
                    </div>

                  </div>
                </Col>

              </Row>
              {/* section 2 */}

              <Row className='row_1'>
                <Col md={12} lg={7}>
                  <div className='d-flex mb-2 row_2_col_1'>
                    <div className=' me-2' >
                      <Form.Control
                        type="number"
                        placeholder="g1 page1 nub01"
                        name='g1_page1_nub01'
                        value={data.g1_page1_nub01}
                        onChange={handleChange}
                      />
                    </div>

                    <span className='multiplied_mark'>*</span>

                    <div className='me-2'>
                      <Form.Control
                        type="number"
                        placeholder="g1 page1 nub02"
                        name='g1_page1_nub02'
                        value={data.g1_page1_nub02}
                        onChange={handleChange}
                      />
                    </div>

                    {/* <button onClick={(e) => MultiplyingNumbers(e)}>Multiplying</button> */}


                    <div className=' resalt'>
                      {Multiplying ? Multiplying : null}
                    </div>


                    <div className='me-2'>
                      <Form.Control
                        type="text"
                        placeholder="g1 page1 text04"
                        name="po1tx04"
                        value={data.po1tx04}
                        onChange={handleChange}
                      />
                    </div>

                  </div>

                  <div className='d-flex mb-2 row_2_col_1'>
                    <div className='me-2'>
                      <Form.Control
                        type="number"
                        placeholder="g1 page1 nub03"
                        name='g1_page1_nub03'
                        value={data.g1_page1_nub03}
                        onChange={handleChange}
                      />
                    </div>
                    <span className='multiplied_mark'>
                      {'*'}
                    </span>


                    <div className='me-2'>
                      <Form.Control
                        type="number"
                        placeholder="g1 page1 nub04"
                        name='g1_page1_nub04'
                        value={data.g1_page1_nub04}
                        onChange={handleChange}
                      />
                    </div>

                    <div className='me-2 resalt'>
                      {MultiplyingNu3_4 ? MultiplyingNu3_4 : null}
                    </div>

                    <div className='me-2'>
                      <Form.Control
                        type="text"
                        placeholder="g1 page1 text05"
                        name="po1tx05"
                        value={data.po1tx05}
                        onChange={handleChange}
                      />
                    </div>

                  </div>
                </Col>

                <Col md={12} lg={5}>
                  <div className="row_checkbox">
                    <div className='d-flex align-items-center  margin_4'>
                      <span className='mx-2'>yes</span>
                      <input
                        id='switch-5'
                        type="checkbox"
                        name="check_2"
                        onChange={(val) => setData({ ...data, check_1: val.target.checked })}
                        checked={data.check_1}
                      />
                      <label htmlFor="switch-5">Togglee</label>
                      <span className='mx-2'>no</span>
                    </div>

                    <div className='d-flex align-items-center mb-2'>
                      <span className='mx-2'>yes</span>
                      <input
                        id='switch-155'
                        type="checkbox"
                        name="check_2"
                        onChange={(val) => setData({ ...data, check_2: val.target.checked })}
                        checked={data.check_2}
                      />
                      <label htmlFor="switch-155">Togglee</label>
                      <span className='mx-2'>no</span>
                    </div>
                  </div>

                </Col>

              </Row>
              {/* section 3 */}

              <Row className='row_1'>
                <Col md={12} lg={7}>
                  <div className='d-flex mb-2 row_2_col_1'>
                    <div className='me-2 resalt'>
                      {Multiplying ? Multiplying : null}
                    </div>
                    <div className='me-2'>
                      <Form.Control
                        type="number"
                        placeholder="g1 page1 nub05"
                        name='g1_page1_nub05'
                        value={data.g1_page1_nub05}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='me-2'>
                      <Form.Control
                        type="number"
                        placeholder="g1 page1 nub05"
                        name='g1_page1_nub05'
                        value={data.g1_page1_nub05}
                        onChange={handleChange}
                      />
                    </div>

                  </div>

                  <div className='d-flex mb-2 row_2_col_1'>
                    <div className='me-2'>
                      <Form.Control
                        type="number"
                        placeholder="g1 page1 nub06"
                        name='g1_page1_nub06'
                        value={data.g1_page1_nub06}
                        onChange={handleChange}
                      />
                    </div>
                    <span style={{ margin: '10px' }}> + </span>

                    <div className='me-2'>
                      <Form.Control type="number"
                        placeholder="g1 page1 nub07"
                        name='g1_page1_nub07'
                        value={data.g1_page1_nub07}
                        onChange={handleChange} />
                    </div>

                    <div className='me-2 resalt'>
                      {sum ? sum : null}
                    </div>

                  </div>
                </Col>

                <Col md={12} lg={5}>
                  <div className="row_checkbox">

                    <div className='d-flex align-items-center mb-2'>
                      <span className='mx-2'>yes</span>
                      <input
                        id='switch-3'
                        type="checkbox"
                        name="check_2"
                        onChange={(val) => setData({ ...data, check_3: val.target.checked })}
                        checked={data.check_3}
                      />
                      <label htmlFor="switch-3">Togglee</label>
                      <span className='mx-2'>no</span>
                    </div>

                    <div className='d-flex align-items-center mb-2'>
                      <span className='mx-2 multiplied_mark'>yes</span>
                      <input
                        id='switch-4'
                        type="checkbox"
                        name="check_2"
                        onChange={(val) => setData({ ...data, check_4: val.target.checked })}
                        checked={data.check_4}
                      />
                      <label htmlFor="switch-4">Toggle</label>
                      <span className='mx-2'>no</span>
                    </div>
                  </div>

                </Col>

              </Row>
              {/* section 4 */}

              <Row className='row_1'>
                <Col md={7}>
                  <div className='d-flex mb-2'>

                    <Form.Control type="text"
                      placeholder="po1tx06"
                      name='po1tx06'
                      value={data.po1tx06}
                      onChange={handleChange}
                     />
                  </div>

                </Col>
                <Col md={5}>
                  <div className='d-flex align-items-center'>
                    <span className='mx-2'>yes</span>
                    <input
                      id='switch-1'
                      type="checkbox"
                      name="check_2"
                      onChange={(val) => setData({ ...data, check_5: val.target.checked })}
                      checked={data.check_5}
                    />
                    <label htmlFor="switch-1">Togglee</label>
                    <span className='mx-2'>no</span>
                  </div>

                  {/* <div class="button r" id="button-3">
                    <input type="checkbox" class="checkbox" name="check_1" onChange={handleChange} />
                    <div class="knobs"></div>
                    <div class="layer"></div>
                  </div> */}

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