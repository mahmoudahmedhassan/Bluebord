import React, { useEffect, useState } from 'react';
import classes from './userdetails-2.module.css';
import Spinner from '../../components/sppiner/Sppiner';
import axios from 'axios';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'; // title components
import UsersTapleTow from '../../components/user details taple/UsersTaple_2';
import TapleDetailsUserTow from '../../components/user details taple/TapleDetailsUser_2';
import TapleDetailsUserTowTest from '../../components/user details taple/TapleDetailsUserTowTest'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersTapleData_2 } from '../../redux/usersTaple_2'
import fetchWitchTableDataPage3 from '../../redux/switchTableDataPage3'
 // bootstartp
import { Container, Row, Col, } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

import TableDetailsUserTow from '../../components/user details taple/App';
import PopupPG03Bt03 from '../../components/modalPage03/PopupPG03Bt03';
 
function UserDetailsTow() {
    const dispatch = useDispatch();
    // left taple
    const { usrsTapleData_2, loading } = useSelector(state => state.UsersTapleData_2Slice);
    let rowsLength = usrsTapleData_2.length;

    // right taple
    const { userTapleData_2 } = useSelector(state => state.UserTapleData_2Slice);
    // console.log('right taple', userTapleData_2[0]);
    let firstObj = userTapleData_2[0]

    // switch tableData 

    // const { switchTableData } = useSelector(state => state.switchTableDataPage3);
    // console.log('switchTableData',switchTableData)

    const [switchData,setSwitchData] =useState([])
    console.log('switchData',switchData)
    useEffect(() => {
        const fetchReasonDataSelection = async () => {
            const result = await axios(
                'https://tstauth.smartgate-egypt.com/jobs/PG04Sw01',
            );
            setSwitchData(result.data);
        };
        fetchReasonDataSelection();
    }, []);

    // switch tableData 

 
    const [query, setQuery] = useState('');
    const [switchValue, setSwitchValue] = useState(false)
    console.log(switchValue);

    useEffect(() => {
        dispatch(fetchUsersTapleData_2());
     }, [dispatch]);
   
   // checked all checkbox column t212
    const [isAllChecked, setAllChecked] = useState(false);
 
    // =================== select box =================
    const [isAppear, setAppear] = useState(false);
    const [reasonDataSelection, setReasonDataSelection] = useState([])
    const [Selection, setSelection] = useState('');
    console.log(Selection)
    useEffect(() => {
        const fetchReasonDataSelection = async () => {
            const result = await axios(
                'https://tstauth.smartgate-egypt.com/jobs/GetPG04Combo01a',
            );
            setReasonDataSelection(result.data);
        };
        fetchReasonDataSelection();
    }, []);

    const handelSubmit =()=>{

    }

    // popup apper
    const [Show, setShow] = useState(false);

    // filter search
    const keys = ["t101", "t102", "t103"];
    const search = (data) => {
        return data.filter((item) => keys.some((key) => item[key].toString().toLowerCase().includes(query)))
        //.filter(item=> item === switchValue ? item : null)
     };
    return (
        <div className={classes.userDetails_2}>
            <Container fluid> <Breadcrumbs className='mr-2' main="Grop-1" sub="Page03" /> </Container>
            <Container fluid>
                <Row>
                    {/* first col */}
                    <Col md={5}>
                        <Row>
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
                                            id='switch-SearchTaple-2'
                                            type="checkbox"
                                            name="sW_N"
                                            onChange={(e) => setSwitchValue(e.target.checked)}
                                            checked={switchValue}
                                        />
                                        <label htmlFor="switch-SearchTaple-2"></label>
                                        <span className='mx-2'>no</span>
                                    </div>
                                </Col>

                            </div>
                        </Row>

                        <div className={classes.UsersTaple}>
                            <UsersTapleTow usersTapleData={search(switchValue ? switchData : usrsTapleData_2)}  setShow={setShow} setAllChecked={setAllChecked} />
                            {
                                switchValue ? (<span>rows : {switchData && switchData.length}</span>):(<span>rows : {usrsTapleData_2 && rowsLength}</span>)
                            }
                           
                        </div>

                    </Col>
                    {/* secnd col */}
                    {!switchValue &&
                      <Col md={7}>
                      {loading ? (<div className='text-center'><Spinner /> </div>) : (

                          <div className={classes.UserTapleDetails}>
                              {/* UserTapleDetails_row_0 */}
                              <div className={classes.UserTapleDetails_row_0}>
                                  <Row>
                                      <Col lg={3}>
                                          <div className='d-flex align-items-center '>
                                              <div className={classes.UserTapleDetails_label}>pG03Lb01</div>
                                              <div className={classes.UserTapleDetails_label_api}>{firstObj ? firstObj.pG04Lb01a : "notfound"}</div>
                                          </div>
                                      </Col>
                                      <Col lg={5}>
                                          <div className='d-flex align-items-center '>
                                              <div className={classes.UserTapleDetails_label}>pG03Lb04</div>
                                              <div className={classes.UserTapleDetails_label_api}>{firstObj ? firstObj.pG04Lb04a : "notfound"}</div>
                                          </div>
                                      </Col>
                                      <Col lg={4}>
                                          <div className='d-flex align-items-center'>
                                              <div className={classes.UserTapleDetails_label}>pG03Lb05</div>
                                              <div className={classes.UserTapleDetails_label_api}>{firstObj ? firstObj.pG04Lb05a : "notfound"}</div>
                                          </div>
                                      </Col>
                                  </Row>
                              </div>

                              {/* UserTapleDetails_row_1 */}

                              <div className={classes.UserTapleDetails_row_1}>
                                  <Row>
                                      <Col lg={3}>
                                          <div className='d-flex align-items-center justify-content-between'>
                                              <div className={classes.UserTapleDetails_label}>pG03Lb02</div>
                                              <div className={classes.UserTapleDetails_label_api}>{firstObj ? firstObj.pG04Lb02a : "notfound"}</div>
                                          </div>
                                      </Col>
                                      <Col lg={6}>
                                          <div className='d-flex align-items-center justify-content-between'>
                                              <div className={classes.UserTapleDetails_label}>pG03Lb06</div>
                                              <div className={classes.UserTapleDetails_label_api}>{firstObj && firstObj.pG04Lb06a1}</div>
                                              <span> X </span>
                                              <div className={classes.UserTapleDetails_label_api}>{firstObj && firstObj.pG04Lb06a2}</div>
                                          </div>
                                      </Col>
                                      <Col lg={3}>
                                          <div className='d-flex align-items-center justify-content-between'>
                                              <div className={classes.UserTapleDetails_label}>pG04Lb07a</div>
                                              <div className={classes.UserTapleDetails_label_api}>{firstObj ? firstObj.pG04Lb07a : "notfound"}</div>
                                          </div>
                                      </Col>

                                  </Row>
                              </div>

                              {/* UserTapleDetails_row_2  */}

                              <div className={classes.UserTapleDetails_row_2}>
                                  <Row>
                                      <Col>
                                          <div className='d-flex align-items-center'>
                                              <div className={classes.UserTapleDetails_label}>pG04Lb03a</div>
                                              <div className={classes.UserTapleDetails_label_api}>{firstObj ? firstObj.pG04Lb03a : "notfound"}</div>
                                          </div>
                                      </Col>

                                  </Row>

                              </div>

                              {/* UserTapleDetails_row_3 */}

                              <div className={classes.UserTapleDetails_row_3}>
                                  <div className="d-flex">
                                      <div className={classes.UserTapleDetails_label}>pG04Tx02a</div>
                                      <div>
                                          <Form.Control
                                              type="text"
                                              placeholder="text"
                                              value={firstObj && firstObj.pG04Tx02a}
                                          />
                                      </div>
                                  </div>

                              </div>

                              <div className={classes.UsersTaple}>
                                  {/* <TapleDetailsUserTow /> */}
                                  {/* <TapleDetailsUserTowTest/> */}

                                  <div className={isAppear ? `${classes.Reason}` : `${classes.ReasonHidden}`}>
                                      <Row>
                                          <Col>
                                              <div className='d-flex align-items-center'>
                                                  <span>Reason</span>
                                                  <Form.Select aria-label="Default select example" onChange={(e) => setSelection(e.target.value)}>
                                                      <option>select</option>

                                                      {reasonDataSelection &&
                                                          reasonDataSelection.map((el )=> (
                                                          <option value={el.sd}>{el.rs}</option>
                                                           ))
                                                      }
                                                  </Form.Select>
                                              </div>
                                          </Col>
                                          <Col>
                                              <div className='d-flex align-items-center justify-content-around'>
                                                  <button onClick={handelSubmit}>PG04Buo1</button>
                                                  <button onClick={() => setAppear(false)}>PG04Buo1</button>
                                              </div>
                                          </Col>
                                      </Row>
                                   </div>
                                  <TableDetailsUserTow dataTable={ userTapleData_2} setAllChecked={setAllChecked} setAppear={setAppear} />
                              </div>

                              {/*  row-4*/}

                              <div style={{ marginTop: '20px' }}>
                                  <Row>
                                      <Col lg={8}>
                                          <div className='d-flex align-items-center '>
                                              <div className={classes.UserTapleDetails_label}>PG04Tx03</div>
                                              <div>
                                                  <Form.Control
                                                      type="text"
                                                      placeholder="text"
                                                      value={firstObj?.pG04Tx02a}
                                                  />
                                              </div>
                                          </div>

                                      </Col>

                                       <Col className="text-center" lg={4}>
                                          {
                                              isAllChecked ? (
                                                  <button className={classes.last_bun} onClick={() => setShow(true)}> PG03Bt03 </button>

                                              ) : (
                                                  <button disabled title="check last column" className={classes.last_bun}> PG03Bt03 </button>
                                              )
                                          }
                                      </Col>
                                  </Row>
                              </div>
                          </div>

                      )}

                  </Col>
                     }
                  

                </Row>
            </Container>
            <PopupPG03Bt03 Show={Show} setShow={setShow} pG04Lb01a={firstObj && firstObj.pG04Lb01a }/>
        </div >
        
    )
}

export default UserDetailsTow