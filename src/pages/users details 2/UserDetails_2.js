import React, { useEffect, useState } from 'react';
import classes from './userdetails-2.module.css';
import { useTranslation } from 'react-i18next';

// components
import Spinner from '../../components/sppiner/Sppiner';
import UsersTapleTow from '../../components/user details taple/UsersTaple_2';
import TableDetailsUserTow from '../../components/user details taple/App';
import PopupPG03Bt03 from '../../components/modalPage03/PopupPG03Bt03';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

import axios from 'axios';
//  redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersTapleData_2 } from '../../redux/usersTaple_2'
// bootstartp
import { Container, Row, Col, } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


// ================ table info ===============================

const Div = (props) => (
    <div className={classes.labels}>
        <div className={classes.label}>{props.label}</div>
        <div className={classes.label_api}>{props.label_api}  {props.label_api2 && 'X' +props.label_api2}</div>
    </div>
)


function UserDetailsTow() {
    const [t] = useTranslation();
    const dispatch = useDispatch();
    // left taple
    const { usrsTapleData_2, loading } = useSelector(state => state.UsersTapleData_2Slice);
    let rowsLength = usrsTapleData_2.length;

    // right taple
    const { userTapleData_2 } = useSelector(state => state.UserTapleData_2Slice);
    let firstObj = userTapleData_2[0]

    // switch tableData 

    const [switchData, setSwitchData] = useState([])
    console.log('switchData', switchData)
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
    console.log('switchValue',switchValue);

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

    const handelSubmit = () => {

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
            <Container fluid> <Breadcrumbs className='mr-2' main={t("Grop-1")} sub={t("Page03")} /> </Container>
            <Container fluid>
                <Row>
                    {/* first col */}
                    <Col md={4}>
                        <Row>
                            <div className={classes.SearchTaple}>
                                <Col>
                                    <div>
                                        <Form.Control
                                            type="text"
                                            placeholder={t("search")}
                                            onChange={e => { setQuery(e.target.value) }}
                                        />
                                    </div>
                                </Col>
                                <Col>
                                    <div className='d-flex align-items-center justify-content-center mb-2'>
                                        <span className='mx-2'>{t("yes")}</span>
                                        <input
                                            id='switch-SearchTaple-2'
                                            type="checkbox"
                                            name="sW_N"
                                            onChange={(e) => setSwitchValue(e.target.checked)}
                                            checked={switchValue}
                                        />
                                        <label htmlFor="switch-SearchTaple-2"></label>
                                        <span className='mx-2'>{t("no")}</span>
                                    </div>
                                </Col>

                            </div>
                        </Row>

                        <div className={classes.UsersTaple}>
                            <UsersTapleTow usersTapleData={search(switchValue ? switchData : usrsTapleData_2)} setShow={setShow} setAllChecked={setAllChecked} switchValue={switchValue} />
                            {
                                switchValue ? (<span> rows : {switchData && switchData.length}</span>) : (<span>rows : {usrsTapleData_2 && rowsLength}</span>)
                            }

                        </div>

                    </Col>
                    {/* secnd col */}
                    {!switchValue &&
                        <Col md={8}>
                            {loading ? (<div className='text-center'><Spinner /> </div>) : (

                                <div className={classes.UserTapleDetails}>
                                    {/* UserTapleDetails_row_0 */}
                                    <div className={classes.UserTapleDetails_row_0}>
                                        <Row>
                                            <Col lg={3}>
                                        
                                                <Div label={t('pG03Lb01')} label_api={firstObj?.pG04Lb01a} />

                                            </Col>

                                            <Col lg={5}>
                                            
                                                <Div label={t('pG03Lb04')}   label_api={firstObj?.pG04Lb04a} />

                                            </Col>
                                            <Col lg={4}>
                                                
                                                <Div label={t('pG03Lb05')} label_api={firstObj?.pG04Lb05a} />

                                            </Col>
                                        </Row>
                                    </div>

                                    {/* UserTapleDetails_row_1 */}

                                    <div className={classes.UserTapleDetails_row_1}>
                                        <Row>
                                            <Col lg={3}>
                                             
                                                <Div label={t('pG03Lb02')} label_api={firstObj?.pG04Lb02a} />

                                            </Col>
                                            <Col lg={5}>
                                              
                                                <Div label={t('pG03Lb06')} label_api={firstObj?.pG04Lb06a1} label_api2={firstObj?.pG04Lb06a2} />

                                            </Col>
                                            <Col lg={4}>
                                             
                                                <Div label={t('pG04Lb07a')} label_api={firstObj?.pG04Lb07a} />

                                            </Col>

                                        </Row>
                                    </div>

                                    {/* UserTapleDetails_row_2  */}

                                    <div className={classes.UserTapleDetails_row_2}>
                                        <Row>
                                            <Col>
                                             
                                                <Div label={t('pG04Lb03a')} label_api={firstObj?.pG04Lb03a} />

                                            </Col>

                                        </Row>

                                    </div>

                                    {/* UserTapleDetails_row_3 */}

                                    <div className={classes.UserTapleDetails_row_3}>
                                        <div className="d-flex align-items-center">
                                            <div className={classes.label}>{t('pG04Tx02a')}</div>
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
                                                            <option> {t('select')}</option>

                                                            {reasonDataSelection &&
                                                                reasonDataSelection.map((el) => (
                                                                    <option value={el.sd}>{el.rs}</option>
                                                                ))
                                                            }
                                                        </Form.Select>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className='d-flex align-items-center justify-content-around'>
                                                        <button onClick={handelSubmit}> {t('PG04Buo1')}</button>
                                                        <button onClick={() => setAppear(false)}> {t('PG04Buo1')}</button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <TableDetailsUserTow dataTable={userTapleData_2} setAllChecked={setAllChecked} setAppear={setAppear} />
                                    </div>

                                    {/*  row-4*/}

                                    <div style={{ marginTop: '20px' }}>
                                        <Row>
                                            <Col lg={8}>
                                                <div className='d-flex align-items-center '>
                                                    <div className={classes.label}> {t("PG04Tx03")}</div>
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
                                                        <button className={classes.last_bun} onClick={() => setShow(true)}> {t("PG03Bt03")} </button>

                                                    ) : (
                                                        <button disabled title="check last column" className={classes.last_bun}>{t('PG03Bt03')} </button>
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
            <PopupPG03Bt03 Show={Show} setShow={setShow} pG04Lb01a={firstObj && firstObj.pG04Lb01a} />
        </div >

    )
}

export default UserDetailsTow