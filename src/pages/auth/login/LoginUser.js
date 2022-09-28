import React, { useEffect } from 'react';
import { Formik, Form,} from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { useDispatch,useSelector } from 'react-redux'
import { insertUserData } from '../../../redux/index'
import { Col, Container, Row } from 'react-bootstrap';
 
function UserDetails() {
  const dispatch = useDispatch();
  const {users,loading,error} =useSelector(state => state.users)
  console.log('users :' ,users?.fullNamEn)

  const validate = Yup.object({
    userName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
      password: Yup.string().required(),

  })
  useEffect(()=>{
     JSON.parse(localStorage.getItem("current-user"))
  },[])
  
  useEffect(()=>{
    insertUserData();
  },[users])
 console.log(JSON.parse(localStorage.getItem("current-user")).user?.fullNamEn)

  return (
    <div className='userDetails'>
      <Container>
        <Row>
          <Col lg={6}>
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
                <div>
                  <h1 className="my-4 font-weight-bold .display-4">User Interface</h1>

                  <Form >
                    <Row>
                      <Col lg={6}>
                        <TextField name="userName" type="text" placeholder="UserName" />
                      </Col>
                      <Col lg={6}>
                        <TextField name="password" type="password" placeholder="password" email='password' />
                      </Col>
                    </Row>
                    <div>{error&& <p style={{color: 'red'}}>  invalid login </p>}</div>
 
                    <div className="">
                      <button className="btn btn-dark mt-3" type="submit" style={{width: '100%'}}>Login</button>
                     </div>
                  </Form>

                </div>
              )}

            </Formik>
          </Col>
          

        </Row>
      </Container>
       {loading? <p>loading...</p>:<div>{users?.fullNamEn}</div>}

    </div >
  )
}

export default UserDetails