import React, { useEffect, useState } from 'react';
import classes from './Pg11.module.css';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import Collapse from 'react-bootstrap/Collapse';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPG11TbData } from '../../redux/pg11';
import FirstTable from './table-1/Table1';

let InputField = (props) => (
    <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">{props.label}</InputGroup.Text>
        <Form.Control
            placeholder="text"
            name={props.label}
        />
    </InputGroup>
)
let DropDwon = ({ setComValeu }) => {
    const [dropdownData, setDropdownData] = useState([]);
    useEffect(() => {
        const url = "https://tstauth.smartgate-egypt.com/jobs/PG09";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setDropdownData(data)
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);
    return (
        <Form.Select aria-label="Floating label select example" style={{ marginBottom: "20px" }} placeholder="PG2md03" name='PG2Md01Comb1' onChange={(e) => setComValeu(e.target.value)}>
            {/* <option>select</option> */}
            {dropdownData &&
                dropdownData.map((el) => (
                    <option key={el.sd} value={el.sd} >{el.sdTx}</option>
                ))
            }
        </Form.Select>
    )
}
function Pg11() {
    const dispatch = useDispatch()
    const { PG11TbData } = useSelector(state => state.PG11TbDataSlice);
    console.log(PG11TbData)
    const [comValeu, setComValeu] = useState(1)
    console.log(comValeu)

    useEffect(() => {
        dispatch(fetchPG11TbData(comValeu))
    }, [dispatch, comValeu])


    const [open, setOpen] = useState(false);

    // search state
    const [query, setQuery] = useState('');
    const handelQuery = (e) => {
        setQuery(e.target.value)
    }
    // filter search
    const keys = ["sd", "t101", "t102", "t103"];
    const search = (data) => {
        return data.filter((item) => keys.some((key) => item[key].toString().toLowerCase().includes(query)))
    };

    return (
        <div>
            <Container fluid>
                <button
                    className={classes.collapse}
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    {/* <GrAddCircle/> */}
                    Add
                </button>
                <Collapse in={open}>
                    <div className={classes.insert}>
                        <form>
                            <Row>
                                <Col><DropDwon setComValeu={setComValeu} /></Col>
                            </Row>
                            <Row>
                                <Col><InputField label='Pg09Tx02' /></Col>
                                <Col> <InputField label='Pg09Tx03' /></Col>
                            </Row>
                            <Row>
                                <Col><InputField label='Pg09Tx04' /></Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className={classes.button}><button onClick={() => setOpen(!open)}>Submit</button></div>
                                </Col>
                                <Col>
                                    <div className={classes.button}><button onClick={() => setOpen(!open)}>Rest</button></div>
                                </Col>
                            </Row>
                        </form>
                    </div>
                </Collapse>

                <div style={{ marginBottom: '40px' }}>
                    <div className={classes.search}>
                        <span>search</span>
                        <Form.Control type="text" placeholder="search" value={query} onChange={handelQuery} />
                    </div>
                    <FirstTable dataTable={search(PG11TbData)} />
                </div>
            </Container>

        </div>
    )
}

export default Pg11