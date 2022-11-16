import React, { useEffect, useState } from 'react';
import classes from './userdetails.module.css'
import Spinner from '../../components/sppiner/Sppiner';
import axios from 'axios';

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'; // title components g2K 
import UsersTaple from '../../components/user details taple/UsersTaple';
import TapleDetailsUser from '../../components/user details taple/TapleDetailsUser';
import TapleDetailsUserTest from '../../components/user details taple/TapleDetailsUserTest';
import PageTowTableRight from '../../components/user details taple/Editable Taple/PageTowTableRight';
import Test from '../../components/user details taple/Editable Taple/Apprr';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersTapleData } from '../../redux/usersTaple'

// bootstartp
import { Container, Row, Col, } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default function UserDetails() {

  // redux
  const dispatch = useDispatch();
  const { usrsTapleData, loading } = useSelector(state => state.UsersTapleDataSlice);
  let rowsLength = usrsTapleData.length;


  //  search
  const [query, setQuery] = useState('');

  const [dataTable, setDataTable] = useState('');

  // fetch dispatch data 
  useEffect(() => {
    dispatch(fetchUsersTapleData())
  }, [dispatch]);

  const { userTapleData } = useSelector(state => state.UserTapleDataSlice);
  let firstObj = userTapleData[0]

  const logDataTable = (data) => {
    setDataTable(data)
  }

  // switch tableData 

  const [switchValue, setSwitchValue] = useState(false)
  const [switchData, setSwitchData] = useState([])
  console.log('switchData', switchData)
  useEffect(() => {
    const fetchReasonDataSelection = async () => {
      const result = await axios(
        'https://tstauth.smartgate-egypt.com/jobs/GetFinPress',
      );
      setSwitchData(result.data);
    };
    fetchReasonDataSelection();
  }, []);

  // switch tableData 


  // filter search
  const keys = ["t101", "t102", "t103"];

  const search = (data) => {
    return data.filter((item) => keys.some((key) => item[key].toString().toLowerCase().includes(query)))
  };
  return (
    <div className={classes.userDetails}>
      <Container fluid>
        <Breadcrumbs className='mr-2' main="Grop-1" sub="Page02" />
      </Container>

      <Container fluid className={classes.main_container}>
        <Row>
          <Col>

            <div className={classes.SearchTaple}>
              <Col>
                <div>
                  <Form.Control
                    type="text"
                    placeholder="search"
                    onChange={e => { setQuery(e.target.value) }}
                  />
                </div>
              </Col>
              <Col>
                <div className='d-flex align-items-center justify-content-center mb-2'>
                  <span className='mx-2'>yes</span>
                  <input
                    id='switch-1111'
                    type="checkbox"
                    name="sW_N"
                    onChange={(e) => setSwitchValue(e.target.checked)}

                  />
                  <label htmlFor="switch-1111"></label>
                  <span className='mx-2'>no</span>
                </div>
              </Col>

            </div>

            <div className={classes.UsersTaple}>
              <UsersTaple usersTapleData={search(switchValue ? switchData : usrsTapleData)} />
              {
                switchValue ? (<span>rows : {switchData && switchData.length}</span>) : (<span>rows : {usrsTapleData && rowsLength}</span>)
              }

            </div>
          </Col>

          <Col>
            {loading ? (<div className='d-flex justify-content-center align-items-center '><Spinner /> </div>) : (
              <div className={classes.UserTapleDetails}>

                {/* UserTapleDetails_row_0 */}
                <div className={classes.UserTapleDetails_row_0}>
                  <Row className='align-items-center'>
                    <Col sm={12} md={8} className='d-flex justify-content-between'>
                      <div className={classes.UserTapleDetails_label}>pG03Lb02</div>
                      <div>
                        <Form.Control
                          type="text"
                          placeholder={firstObj ? firstObj.pG03Tx02a : "notfound"}
                          name='pG03Lb02a'
                        // value={pG03Tx02a?.pG03Tx02a}
                        />
                      </div>
                    </Col>
                    <Col className='text-center' md={4}> <button>Button-1</button></Col>
                  </Row>
                </div>

                {/* UserTapleDetails_row_1 */}

                <div className={classes.UserTapleDetails_row_1}>
                  <Row>
                    <Col md={2} className='d-flex'>
                      <div className={classes.UserTapleDetails_label}>label-2</div>
                    </Col>
                    <Col md={4} className='d-flex'>
                      <div className={`${classes.UserTapleDetails_label} ${classes.UserTapleDetails_label_api} `}>{firstObj ? firstObj.pG03Lb02a : "notfound"}</div>
                    </Col>
                    <Col md={2} className='d-flex'>
                      <div className={classes.UserTapleDetails_label}>label-3</div>
                    </Col>
                    <Col md={4}>
                      <div>
                        <Form.Control
                          type="text"
                          placeholder={firstObj ? firstObj.G03Tx02a : "notfound"}
                        // value={G03Tx02a?.G03Tx02a}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>

                {/* UserTapleDetails_row_2  */}


                <div className={classes.UserTapleDetails_row_2}>

                  <Row>
                    <Col md={2}>
                      <div className={classes.UserTapleDetails_label}>label-4</div>
                    </Col>

                    <Col md={3}>
                      <div className={`${classes.UserTapleDetails_label} ${classes.UserTapleDetails_label_api} `}>{firstObj ? firstObj.pG03Lb04a : "notfound"}</div>
                    </Col>

                    <Col md={2} className='d-flex'>
                      <div className={classes.UserTapleDetails_label}>label-8</div>
                    </Col>

                    <Col md={2} className='d-flex'>
                      <div className={`${classes.UserTapleDetails_label} ${classes.UserTapleDetails_label_api} `}>{firstObj ? firstObj.pG03Lb07a : "pG03Lb07a"}</div>
                    </Col>
                    <Col md={1} className='d-flex'>
                      <div className={classes.multiplie}>X</div>
                    </Col>

                    <Col md={2} className='d-flex'>
                      <div className={`${classes.UserTapleDetails_label} ${classes.UserTapleDetails_label_api} `}>{firstObj ? firstObj.pG03Lb08a : 'notfound'}</div>
                    </Col>
                  </Row>
                </div>

                {/* UserTapleDetails_row_3 */}
                <div className={classes.UserTapleDetails_row_3}>
                  <Row>

                    <Col md={2} className='d-flex'>
                      <div className={classes.UserTapleDetails_label}>label-6</div>
                    </Col>
                    <Col md={10} className='d-flex'>
                      <div className={`${classes.UserTapleDetails_label} ${classes.UserTapleDetails_label_api} `}> {firstObj ? firstObj.pG03Lb05a : "notfound"}</div>
                    </Col>
                  </Row>

                </div>

                {/* taple */}

                <div className={classes.UsersTaple}>
                  {/* <TapleDetailsUser /> */}
                  <TapleDetailsUserTest logDataTable={logDataTable} />
                  {/* <PageTowTableRight/> */}
                  {/* <Test logDataTable={logDataTable} /> */}
                </div>

                {/*  row-4*/}
                <div className={classes.UserTapleDetails_textarea}>
                  <textarea placeholder="text area" disabled value={firstObj ? firstObj.pG03Tx05a : 'notfound'} />
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
                          checked={firstObj?.pG03Sw02}
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
                          checked={firstObj?.pG03Sw03}
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
                      placeholder={firstObj ? firstObj.G03Tx06 : "notfound"}
                      value={firstObj?.G03Tx06}
                    />
                  </div>

                </div>

              </div>
            )}

          </Col>

        </Row>
      </Container>


    </div>
  )
}
