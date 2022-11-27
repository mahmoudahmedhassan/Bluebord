import React, { useEffect, useState } from 'react';
import classes from './userdetails.module.css'
import Spinner from '../../components/sppiner/Sppiner';
import axios from 'axios';

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'; // title components g2K 
import UsersTaple from '../../components/user details taple/UsersTaple';
import TapleDetailsUserTest from '../../components/user details taple/TapleDetailsUserTest';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersTapleData } from '../../redux/usersTaple'

// bootstartp
import { Container, Row, Col, } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

// ================ table info ===============================

const Div = (props) => (
  <div className={classes.labels}>
    <div className={classes.label}>{props.label}</div>
    <div className={classes.label_api}>{props.label_api}  {props.label_api2 && 'X' + props.label_api2}</div>
  </div>
)

const InputField = (props) => {
  return (
    <div className={classes.labels}>
      <div className={classes.label}>{props.label}</div>
      <Form.Control
        type="text"
        placeholder={props.label_api}
        name='pG03Lb02a'
        value={props.label_api}
      />
    </div>

  )
}

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
                  <Row>
                    <Col>
                      <InputField label='pG03Lb02' label_api={firstObj?.pG03Tx02a} />
                    </Col>
                    <Col className='text-center' md={4}> <button>Button-1</button></Col>
                  </Row>
                </div>

                {/* UserTapleDetails_row_1 */}

                <div className={classes.UserTapleDetails_row_1}>
                  <Row>
                    <Col lg={4}>
                      <Div label='label-2' label_api={firstObj?.pG03Lb02a} />
                    </Col>

                    <Col lg={8}>
                      <InputField label='pG03Lb02' label_api={firstObj?.G03Tx02a} />
                    </Col>
                  </Row>
                </div>

                {/* UserTapleDetails_row_2  */}


                <div className={classes.UserTapleDetails_row_2}>

                  <Row>
                    <Col lg={4}>
                      <Div label='label-4' label_api={firstObj?.pG03Lb04a} />
                    </Col>
                    <Col lg={8}>
                      <Div label='label-8' label_api={firstObj?.pG03Lb07a} label_api2={firstObj?.pG03Lb08a} />
                    </Col>

                  </Row>
                </div>

                {/* UserTapleDetails_row_3 */}
                <div className={classes.UserTapleDetails_row_3}>
                  <Row>
                    <Col>
                      <Div label='label-6' label_api={firstObj?.pG03Lb05a} />
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
                          // checked={firstObj?.pG03Sw02}
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
                          // checked={firstObj?.pG03Sw03}
                        />
                        <label htmlFor="pG03Sw03"></label>
                        <span className='mx-2'>no</span>
                      </div>
                    </Col>

                  </Row>

                </div>
                {/*  row-6*/}

                <div>
                  {/* <div>
                    <Form.Control
                      type="text"
                      placeholder={firstObj ? firstObj.G03Tx06 : "notfound"}
                      value={firstObj?.G03Tx06}
                    />
                  </div> */}
                        <InputField label='pG03Lb06' label_api={firstObj?.G03Tx06} />


                </div>

              </div>
            )}

          </Col>

        </Row>
      </Container>


    </div>
  )
}
