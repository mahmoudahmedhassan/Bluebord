import React, { useEffect, useState } from 'react';
import classes from './Pg12.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
 
import { useSelector } from 'react-redux';
import InputGroup from 'react-bootstrap/InputGroup';
import Collapse from 'react-bootstrap/Collapse';

let InputField = (props) => (
    <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">{props.label}</InputGroup.Text>
        <Form.Control
            placeholder="text"
            name={props.label}
        />
    </InputGroup>
)

function Pg12() {
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
            <div style={{ marginBottom: '40px' }}>
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
 
                </div>
            </Container>


            </div>
        </div>
    )
}

export default Pg12