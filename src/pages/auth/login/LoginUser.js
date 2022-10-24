import React, { useEffect, useState } from 'react';
import './login.css';
import saudiFlag from './assets/saudi-arabia.png';
import unitedFlag from './assets/united-kingdom.png';
import SliderLogin from './slider'
import { Formik, Form, } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { insertUserData } from '../../../redux/index'
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function UserDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users, loading, error } = useSelector(state => state.users)
  console.log('users :', users.isAuthenticated)

  const validate = Yup.object({
    UserName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    Password: Yup.string().required(),

  })
  useEffect(() => {
    if (users && users.isAuthenticated) {
      navigate('/');
    }

  }, [users, navigate])

  return (
    <div className='userDetails'>
      <Container className='main_container'>
        <Row>
          <Col md={6}>

            <div className='ss'>
              <div className='platform'>

                <div className='platform-smart-gate'>

                  <div className='platform_name'>
                    <span>S</span>mart <span>G</span>ate
                  </div>
                  <div className='login_lang'>
                    <img src={unitedFlag} alt={unitedFlag} height="30px" />
                  </div>

                </div>

                <div className='platform-title text-center'>
                  <h1>Hello!</h1>
                 </div>

              </div>

              <Formik
                initialValues={{
                  UserName: '',
                  Password: '',
                }}
                validationSchema={validate}
                onSubmit={(values, { resetForm }) => {
                  dispatch(insertUserData(values))
                  resetForm({ values: '' });
                }}
              >
                {(formik) => (
                  <div>
                    {/* <h1 className="my-4 font-weight-bold .display-4">Login </h1> */}

                    <Form >
                      <Row>
                        <Col sm={12}>
                          <TextField name="UserName" type="text" placeholder="UserName" />
                        </Col>
                        <Col sm={12}>
                          <TextField name="Password" type="Password" placeholder="Password" password='Password' />
                        </Col>
                      </Row>
                      <div>{error && <p style={{ color: 'red' }}> {error} </p>}</div>

                      <div className="">
                        <button className="btn btn-dark mt-3"
                          type="submit"
                          style={{ width: '100%', background: '#4B77BE', border: 'none' }}>
                          {loading ? 'Loading...' : 'Login'}
                        </button>
                      </div>
                    </Form>

                  </div>
                )}

              </Formik>

              <footer className="footer text-center">

                <div className="support my-5">
                  <p className="text-center">
                    for technical support call us on
                    <a className="text-center" href="/">
                      samrt@gate.com
                    </a>
                  </p>
                </div>
                <div className='footer-footer'>
                  <p>All Rights Reserved by Smart Gate admin. Designed and Developed by</p>
                  <a href="/" style={{color:'#095ffc'}}> Smart Gate</a>
                </div>
              </footer>

            </div>

          </Col>

          <Col md={6} className='p-0'>
            <div className='slider_login'>
               <SliderLogin />
            </div>
          </Col>
        </Row>
      </Container>


    </div >
  )
}

export default UserDetails