import React, { useEffect, useState } from 'react';
import classes from './userdetails-2.module.css'

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'; // title components
import UsersTaple from '../../components/user details taple/UsersTaple';
import TapleDetailsUser from '../../components/user details taple/TapleDetailsUser';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersTapleData_2 } from '../../redux/usersTaple_2'

// bootstartp
import { Container, Row, Col, } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function UserDetailsTow() {
    const dispatch = useDispatch();
    const { usrsTapleData_2 } = useSelector(state => state.UsersTapleData_2Slice)
    const [query, setQuery] = useState('');
    const [switchValue,setSwitchValue] = useState(false)
    console.log('switchValue',switchValue)

    useEffect(() => {
        dispatch(fetchUsersTapleData_2())
    }, [dispatch]);

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
                    <Col>
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
                                            onChange={(e)=>setSwitchValue(e.target.checked)}
                                            checked={switchValue}
                                        />
                                        <label htmlFor="switch-SearchTaple-2"></label>
                                        <span className='mx-2'>no</span>
                                    </div>
                                </Col>

                            </div>
                        </Row>

                        <div className={classes.UsersTaple}>
                            <UsersTaple usersTapleData={search(usrsTapleData_2)} />
                        </div>

                    </Col>
                    {/* secnd col */}
                    <Col>
                        <div className={classes.UserTapleDetails}>

                            {/* UserTapleDetails_row_0 */}
                            <div className={classes.UserTapleDetails_row_0}>
                                <Row>
                                    <Col lg={4}>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div className={classes.UserTapleDetails_label}>pG03Lb02</div>
                                            <div className={classes.UserTapleDetails_label_api}>pG03Lb02</div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div className={classes.UserTapleDetails_label}>pG03Lb02</div>
                                            <div className={classes.UserTapleDetails_label_api}>pG03Lb02</div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div className={classes.UserTapleDetails_label}>pG03Lb02</div>
                                            <div className={classes.UserTapleDetails_label_api}>pG03Lb02</div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            {/* UserTapleDetails_row_1 */}

                            <div className={classes.UserTapleDetails_row_1}>
                                <Row>
                                    <Col lg={5}>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div className={classes.UserTapleDetails_label}>pG03Lb02</div>
                                            <div className={classes.UserTapleDetails_label_api}>pG03Lb02</div>
                                        </div>
                                    </Col>
                                    <Col lg={7}>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div className={classes.UserTapleDetails_label}>pG03Lb02</div>
                                            <div className={classes.UserTapleDetails_label_api}>pG03Lb02</div>
                                            <span> X </span>
                                            <div className={classes.UserTapleDetails_label_api}>pG03Lb02</div>
                                        </div>
                                    </Col>

                                </Row>
                            </div>

                            {/* UserTapleDetails_row_2  */}

                            <div className={classes.UserTapleDetails_row_2}>
                                <Row>
                                    <Col>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div className={classes.UserTapleDetails_label}>pG03Lb02</div>
                                            <div className={classes.UserTapleDetails_label_api}>pG03Lb02</div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div className={classes.UserTapleDetails_label}>pG03Lb02</div>
                                            <div className={classes.UserTapleDetails_label_api}>pG03Lb02</div>
                                        </div>
                                    </Col>
                                </Row>

                            </div>

                            {/* UserTapleDetails_row_3 */}

                            <div className={classes.UserTapleDetails_row_3}>
                                <div className="d-flex">
                                    <div className={classes.UserTapleDetails_label}>label-6</div>
                                    <div>
                                        <Form.Control
                                            type="text"
                                            placeholder="text"
                                        />
                                    </div>
                                </div>

                            </div>

                            <div className={classes.UsersTaple}>
                                <TapleDetailsUser />
                            </div>

                            {/*  row-4*/}

                            <div>
                                <Row>
                                    <Col lg={8}>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div className={classes.UserTapleDetails_label}>label-11</div>
                                        <div>
                                            <Form.Control
                                                type="text"
                                                placeholder="text"
                                            />
                                        </div> 
                                        </div>
                                       
                                    </Col>

                                    <Col className="text-center" lg={4}>
                                        <button > button </button>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default UserDetailsTow