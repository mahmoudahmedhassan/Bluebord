import React, { useEffect, useState } from 'react';
import classes from './Pg10.module.css';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import Collapse from 'react-bootstrap/Collapse';
import { useSelector, useDispatch} from 'react-redux';
import {fetchPG10TbData} from '../../redux/pg10';
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
function PG10() {
    const dispatch = useDispatch()
    const { PG10TbData } = useSelector(state => state.PG10TbDataSlice);
    console.log(PG10TbData)
    useEffect(() => {
        dispatch(fetchPG10TbData())
    },[dispatch])

    const [open, setOpen] = useState(false);

    // search state
    const [query, setQuery] = useState('');
    const handelQuery = (e) => {
        setQuery(e.target.value)
    }
    // filter search
    const keys = ["sd", "sdTx", "t2", "t104"];
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

                <div>
                    <div className={classes.search}>
                        <span>search</span>
                        <Form.Control type="text" placeholder="search" value={query} onChange={handelQuery} />
                    </div>
                    <FirstTable dataTable={search(PG10TbData)}/>

                </div>
            </Container>
        </div>
    )
}

export default PG10