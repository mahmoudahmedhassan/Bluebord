import React, { useEffect } from 'react';
import './login.css';
import Carousel from './Carousel'
import Lang from '../../../components/lang/Lang';

import { Formik, Form, } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

import { useDispatch, useSelector } from 'react-redux'
import { insertUserData } from '../../../redux/index'
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function UserDetails() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [t] = useTranslation();

  const { dirction } = useSelector(state => state.dirction);
  const { users, loading, error } = useSelector(state => state.users)

  const validate = Yup.object({
    UserName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    Password: Yup.string().required(),
  });

  useEffect(() => {
    if (users && users.isAuthenticated) {
      navigate('/');
    }
   }, [users, navigate])

  return (
    <div className={dirction === 'ar' ? 'userDetails ar_dirction ' : " userDetails"}>
      <Container className='main_container'>
        <Row>
          <Col md={6}>
            <div className='main_container_platform'>
              <div className='platform'>
                <div className='platform-smart-gate'>
                  <div className='platform_name'>
                    <span>S</span>mart <span>G</span>ate
                  </div>
                  <div className='login_lang'>
                    <Lang />
                  </div>
                </div>

                <div className='platform-title text-center'>
                  <h1>  {t("Hello!")}</h1>
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

                    <Form >
                      <Row>
                        <Col sm={12}>
                          <TextField name="UserName" type="text" placeholder={t("UserName")} icon={<FaUserAlt />} />
                        </Col>
                        <Col sm={12}>
                          <TextField name="Password" type="Password" placeholder={t("Password")} icon={<RiLockPasswordLine />} />
                        </Col>
                      </Row>
                      <div>{error && <p style={{ color: 'red' }}> {error} </p>}</div>

                      <div className="">
                        <button className="btn btn-dark mt-3"
                          type="submit"
                          style={{ width: '100%', background: '#4B77BE', border: 'none' }}>
                          {loading ? (`${t(" Loading...")}`) : (`${t("Login")}`)}
                        </button>
                      </div>
                    </Form>
                    {/* <div>{t("don't have an account?")}<span className='go_registration' onClick={() => navigate('/registration')}>{t("go to Register")} </span></div> */}
                  </div>
                )}

              </Formik>
              <footer className="footer text-center">
                <div className="support my-5">
                  <p className="text-center">
                    {t("for technical support call us on")}{' '}
                    <a className="text-center" href="/">
                      samrt@gate.com
                    </a>
                  </p>
                </div>
                <div className='footer-footer'>
                  <p>{t("All Rights Reserved by Smart Gate admin. Designed and Developed by")}</p>{' '}
                  <a href="/" style={{ color: '#095ffc' }}> Smart Gate</a>
                </div>
              </footer>
            </div>
          </Col>

          <Col md={6}>
            <div className='slider_login'>
              <Carousel />
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  )
}

export default UserDetails

