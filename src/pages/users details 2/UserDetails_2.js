import React, { useEffect, useState } from 'react';
import classes from './userdetails-2.module.css'
import Spinner from '../../components/sppiner/Sppiner';

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'; // title components
import UsersTapleTow from '../../components/user details taple/UsersTaple_2';
import TapleDetailsUserTow from '../../components/user details taple/TapleDetailsUser_2';
import TapleDetailsUserTowTest from '../../components/user details taple/TapleDetailsUserTowTest'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersTapleData_2 } from '../../redux/usersTaple_2'

// bootstartp
import { Container, Row, Col, } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

import TableDetailsUserTow from '../../components/user details taple/App';

function UserDetailsTow() {
    const dispatch = useDispatch();
    // left taple
    const { usrsTapleData_2, loading } = useSelector(state => state.UsersTapleData_2Slice);

    // right taple
    const { userTapleData_2 } = useSelector(state => state.UserTapleData_2Slice);
    // console.log('right taple', userTapleData_2[0]);
    let firstObj = userTapleData_2[0]
 
    const [query, setQuery] = useState('');
    const [switchValue, setSwitchValue] = useState(false)

    useEffect(() => {
        dispatch(fetchUsersTapleData_2())
    }, [dispatch]);

    const [isAllChecked, setAllChecked] = useState(false);
  
    console.log('isAllChecked',isAllChecked)


    // filter search
    const keys = ["t101", "t102", "t103"];
    const search = (data) => {
        return data.filter((item) => keys.some((key) => item[key].toString().toLowerCase().includes(query)))
        // .filter(item=> item === switchValue ? item : null)
    };
    return (
        <div className={classes.userDetails_2}>
            <Container> <Breadcrumbs className='mr-2' main="Grop-1" sub="Page03" /> </Container>
            <Container>
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
                            <UsersTapleTow usersTapleData={search(usrsTapleData_2)} />
                        </div>

                    </Col>
                    {/* secnd col */}
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
                                    <TableDetailsUserTow setAllChecked={setAllChecked}/>
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
                                                    <button className={classes.last_bun}> PG03Bt03 </button>

                                                ): (
                                                    <button disabled title="check last column" className={classes.last_bun}> PG03Bt03 </button>
                                                )
                                            }
                                        </Col>
                                    </Row>
                                </div>
                            </div>

                        )}

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default UserDetailsTow