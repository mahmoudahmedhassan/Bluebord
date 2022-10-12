import React, { useEffect } from 'react';
import './login.css';
import saudiFlag from './assets/saudi-arabia.png';
import unitedFlag from './assets/united-kingdom.png';
import NoTransitionExample from './slider'
import { Formik, Form, } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { insertUserData } from '../../../redux/index'
import { Col, Container, Row } from 'react-bootstrap';

function UserDetails() {
  const dispatch = useDispatch();
  const { users,loading, sss, error } = useSelector(state => state.users)
  console.log('users :', sss)
 
  const validate = Yup.object({
    userName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    password: Yup.string().required(),

  })
  useEffect(() => {
    JSON.parse(localStorage.getItem("current-user"))
  }, [])

  useEffect(() => {
    insertUserData();
  }, [users])
  console.log(JSON.parse(localStorage.getItem("current-user")).user?.fullNamEn)

  return (
    <div className='userDetails'>
      <Container className='main_container'>
        <Row>
          <Col md={6} className='p-0'>
            <div className='ss'>
              <div className='platform'>
                <div className=''>Bluebord</div>
                <div className='login_lang'>
                  <img src={unitedFlag} alt={unitedFlag} height="30px" />
                </div>
              </div>
              <div className='header text-center'>
                <h1>Hello!</h1>
                <p>this is our dashboard new version for al-azhar universities</p>
              </div>
              <Formik
                initialValues={{
                  userName: '',
                  password: '',
                }}
                validationSchema={validate}
                onSubmit={(values, { resetForm }) => {
                  dispatch(insertUserData(values))
                  resetForm({ values: '' });
                }}
              >

                {(formik) => (
                  <div className='p-4'>
                    {/* <h1 className="my-4 font-weight-bold .display-4">Login </h1> */}

                    <Form >
                      <Row>
                        <Col>
                          <TextField name="userName" type="text" placeholder="UserName" />
                        </Col>
                        <Col>
                          <TextField name="password" type="password" placeholder="password" password='password' />
                        </Col>
                      </Row>
                      <div>{error && <p style={{ color: 'red' }}>  invalid login </p>}</div>

                      <div className="">
                        <button className="btn btn-dark mt-3" type="submit" style={{ width: '100%', background:'#4B77BE', border:'none'}}>Login</button>
                      </div>
                    </Form>

                  </div>
                )}

              </Formik>

              <div className="support my-5">
                <p className="text-center">
                  for technical support call us on 
                  <a className="text-center" href="/">
                    samrt@gate.com
                  </a>
                </p>

              </div>
              <footer className="footer text-center">
                All Rights Reserved by Smart Gate admin. Designed and Developed by
                <a href="/"> Smart Gate</a>
              </footer>

            </div>

          </Col>
          <Col md={6} className='p-0'>

            <NoTransitionExample />
          </Col>
        </Row>
      </Container>
      {loading? <p>loading...</p>:<div>{users?.fullNamEn}</div>}


    </div >
  )
}

export default UserDetails