import React from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'; // title components
import UsersTaple from '../../components/user details taple/UsersTaple';
import TapleDetailsUser from '../../components/user details taple/TapleDetailsUser';
import { useSelector, useDispatch } from 'react-redux';

import classes from './userdetails.module.css'
// bootstartp
import { Container, Row, Col, } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';


export default function UserDetails() {
  const { userTapleData, loading, error } = useSelector(state => state.UserTapleDataSlice)
  const [pG03Lb02a, pG03Lb04a, pG03Lb05a, pG03Lb07a, pG03Lb08a, pG03Sw02, pG03Sw03, pG03Tx02a, pG03Tx04a, pG03Tx05a, pG03Tx06, G03Tx02a, G03Tx06] = userTapleData;
  console.log(pG03Lb02a?.pG03Lb02a)
  return (
    <div className={classes.userDetails}>
      <Container>
        <Breadcrumbs className='mr-3' main="Grop-1" sub="Page02" />
      </Container>
      <Container className={classes.main_container}>
        <Row>
          <Col>
            <div className={classes.SearchTaple}>
              <div>
                <Form.Control
                  type="text"
                  placeholder="search"
                />
              </div>

              <div className='d-flex align-items-center mb-2'>
                <span className='mx-2'>yes</span>
                <input
                  id='switch-1111'
                  type="checkbox"
                  name="sW_N"
                />
                <label htmlFor="switch-1111"></label>
                <span className='mx-2'>no</span>
              </div>
            </div>

            <div className={classes.UsersTaple}>
              <UsersTaple />
            </div>
          </Col>

          <Col>

            <div className={classes.UserTapleDetails}>

              {/* UserTapleDetails_row_0 */}
              <div className={classes.UserTapleDetails_row_0}>
                <Row>
                  <Col sm={12} md={2} className='d-flex'>
                    <div className={classes.UserTapleDetails_label}>pG03Lb02</div>
                  </Col>
                  <Col sm={12} md={10}>
                    <div>
                      <Form.Control
                        type="text"
                        placeholder="text-1"
                        name='pG03Lb02a'
                        value={pG03Tx02a?.pG03Tx02a}
                      />
                    </div>
                  </Col>
                </Row>
              </div>

              {/* UserTapleDetails_row_1 */}

              <div className={classes.UserTapleDetails_row_1}>
                <Row>
                  <Col md={2} className='d-flex'>
                    <div className={classes.UserTapleDetails_label}>label-2</div>
                  </Col>
                  <Col md={4} className='d-flex'>
                    <div className={classes.UserTapleDetails_label}>{pG03Lb02a?.pG03Lb02a}</div>
                  </Col>
                  <Col md={2} className='d-flex'>
                    <div className={classes.UserTapleDetails_label}>label-3</div>
                  </Col>
                  <Col md={4}>
                    <div>
                      <Form.Control
                        type="text"
                        placeholder="labla-1 "
                      />
                    </div>
                  </Col>
                </Row>
              </div>

              {/* UserTapleDetails_row_2  */}

              <div className={classes.UserTapleDetails_row_2}>
                <Row>
                  <Col md={2} className='d-flex'>
                    <div className={classes.UserTapleDetails_label}>label-4</div>
                  </Col>
                  <Col md={4} className='d-flex'>
                    <div className={classes.UserTapleDetails_label}>{pG03Lb04a?.pG03Lb04a}</div>
                  </Col>
                  <Col md={2} className='d-flex'>
                    <div className={classes.UserTapleDetails_label}>label-5</div>
                  </Col>
                  <Col md={4}>
                    <div>
                      <Form.Control
                        type="text"
                        placeholder="labla-1 "
                        value={pG03Tx04a?.pG03Tx04a}
                      />
                    </div>
                  </Col>
                </Row>

              </div>

              {/* UserTapleDetails_row_3 */}

              <div className={classes.UserTapleDetails_row_3}>

                <Row>
                  <Col md={2} className='d-flex'>
                    <div className={classes.UserTapleDetails_label}>label-6</div>
                  </Col>
                  <Col md={2} className='d-flex'>
                    <div className={classes.UserTapleDetails_label}> {pG03Lb05a?.pG03Lb05a}</div>
                  </Col>
                  <Col md={2} className='d-flex'>
                    <div className={classes.UserTapleDetails_label}>label-8</div>
                  </Col>

                  <Col md={2} className='d-flex'>
                    <div className={classes.UserTapleDetails_label}>{pG03Lb07a?.pG03Lb07a}</div>
                  </Col>
                  <Col md={2} className='d-flex'>
                    <div className={classes.multiplie}>X</div>
                  </Col>

                  <Col md={2} className='d-flex'>
                    <div className={classes.UserTapleDetails_label}>{pG03Lb08a?.pG03Lb08a}</div>
                  </Col>
                </Row>


              </div>

              <div className={classes.UsersTaple}>
                <TapleDetailsUser />
              </div>
              {/*  row-4*/}
              <div className={classes.UserTapleDetails_textarea}>
                <textarea placeholder="text area" disabled value={pG03Tx05a?.pG03Tx05a} />
              </div>
              {/*  row-5*/}
              <div>
                <Row>
                  <Col>
                    <div className={classes.UserTapleDetails_label}>label-11</div>
                  </Col>

                  <Col>
                    <div className='d-flex align-items-center mb-2'>
                      <span className='mx-2'>yes</span>
                      <input
                        id='pG03Sw02'
                        type="checkbox"
                        name="sW_N"
                        checked={pG03Sw02?.pG03Sw02}

                      />
                      <label htmlFor="pG03Sw02"></label>
                      <span className='mx-2'>no</span>
                    </div> 
                     </Col>

                  <Col>
                    <div className='d-flex align-items-center mb-2'>
                      <span className='mx-2'>yes</span>
                      <input
                        id='pG03Sw03'
                        type="checkbox"
                        name="sW_N"
                        checked={pG03Sw03?.pG03Sw03}
                      />
                      <label htmlFor="pG03Sw03"></label>
                      <span className='mx-2'>no</span>
                    </div>
                  </Col>

                </Row>

              </div>
              {/*  row-6*/}

              <div>
                <div>
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={G03Tx06?.G03Tx06}
                  />
                </div>

              </div>

            </div>
          </Col>
        </Row>
      </Container>


    </div>
  )
}
