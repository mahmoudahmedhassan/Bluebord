import React from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'; // title components
import UsersTaple from '../../components/user details taple/UsersTaple';
import TapleDetailsUser from '../../components/user details taple/TapleDetailsUser';

import classes from './userdetails.module.css'
// bootstartp
import { Container, Row, Col, } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';


export default function UserDetails() {

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
                  <Col sm={12} md={2}>
                    <div className={classes.UserTapleDetails_label}>label-1</div>
                  </Col>
                  <Col sm={12} md={10}>
                    <div className='mb-2'>
                      <Form.Control
                        type="text"
                        placeholder="text-1"
                      />
                    </div>
                  </Col>
                </Row>
              </div>

              {/* UserTapleDetails_row_1 */}

              <div className={classes.UserTapleDetails_row_1}>
                <Row>
                  <Col md={3}>
                    <div className={classes.UserTapleDetails_label}>label-2</div>
                  </Col>
                  <Col md={3}>
                    <div className={classes.UserTapleDetails_label}>label-3</div>
                  </Col>
                  <Col md={2}>
                    <div className={classes.UserTapleDetails_label}>label-3</div>
                  </Col>
                  <Col md={4}>
                    <div>
                      <Form.Control
                        type="text"
                        placeholder="labla-1 "
                        className='mb-2'
                      />
                    </div>
                  </Col>
                </Row>
              </div>

              {/* UserTapleDetails_row_2  */}

              <div className={classes.UserTapleDetails_row_2}>
                <Row>
                  <Col md={3}>
                    <div className={classes.UserTapleDetails_label}>label-4</div>
                  </Col>
                  <Col md={3}>
                    <div className={classes.UserTapleDetails_label}>label-5</div>
                  </Col>
                  <Col md={2}>
                    <div className={classes.UserTapleDetails_label}>label-5</div>
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

              {/* UserTapleDetails_row_3 */}

              <div className={classes.UserTapleDetails_row_3}>

                <Row>
                  <Col md={2}>
                    <div className={classes.UserTapleDetails_label}>label-6</div>
                  </Col>
                  <Col md={2}>
                    <div className={classes.UserTapleDetails_label}>label-7</div>
                  </Col>
                  <Col md={2}>
                    <div className={classes.UserTapleDetails_label}>label-8</div>
                  </Col>

                  <Col md={2}>
                    <div className={classes.UserTapleDetails_label}>label-9</div>
                  </Col>
                  <Col md={2}>
                    <div>X</div>
                  </Col>

                  <Col md={2}>
                    <div className={classes.UserTapleDetails_label}>label-10</div>
                  </Col>
                </Row>


              </div>

              <div className={classes.UsersTaple}>
                <UsersTaple />
              </div>
              {/*  row-4*/}
              <div className={classes.UserTapleDetails_textarea}>
                <textarea placeholder="text area" disabled />
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
                        id='switch-1111'
                        type="checkbox"
                        name="sW_N"
                      />
                      <label htmlFor="switch-1111"></label>
                      <span className='mx-2'>no</span>
                    </div>                  </Col>

                  <Col>
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
                  </Col>

                </Row>

              </div>
              {/*  row-6*/}

              <div>
                <div>
                  <Form.Control
                    type="text"
                    placeholder=""
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
