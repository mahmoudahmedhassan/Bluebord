import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';

let DropDwon = (props) => {
    const [dropdownData, setDropdownData] = useState([]);
    useEffect(() => {
        const url = "https://tstauth.smartgate-egypt.com/jobs/GetCname";

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
        <Form.Select aria-label="Floating label select example" placeholder="PG2md03" name='PG2Md01Comb1' onChange={props.onChange}>

            {dropdownData &&
                dropdownData.map((el) => (
                    <option key={el.cid} value={el.cid}>{el.pG2Md01Comb1}</option>
                ))
            }
        </Form.Select>
    )
}
let DropDwon1 = (props) => {
    const [dropdownData, setDropdownData] = useState([]);
    useEffect(() => {
        const url = "https://tstauth.smartgate-egypt.com/jobs/GetPG05Cmb01a";

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
        <Form.Select aria-label="Floating label select example" placeholder="PG2md03" name='PG2Md01Comb2' onChange={props.onChange}>

            {dropdownData &&
                dropdownData.map((el) => (
                    <option key={el.sd} value={el.sd}>{el.ity}</option>
                ))
            }
        </Form.Select>
    )
}

function InsertRow() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let initialValues = {
        t101: '',
        t102: '',
        t103: '',
        t104: '',
        t105:'',
        t106:'',
        t107:new Date()
    };
    const [values, setValues] = useState(initialValues);
 
    const handleChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })

    }
    const handelClick = () => {
        console.log(values)
        handleClose()
    }

    return (
        <div>
            <Button variant="primary" onClick={handleShow} className='mb-3'>
                Add New Row
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <DropDwon className="mb-3" onChange={handleChange}/>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Pg06Md01Lb01</InputGroup.Text>
                            <Form.Control
                                placeholder="Pg06Md01Lb02"
                                name="Pg06Md01Lb01"
                                aria-describedby="basic-addon1"
                                onChange={handleChange}

                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Pg06Md01Lb02</InputGroup.Text>
                            <Form.Control
                                placeholder="Pg06Md01Lb02"
                                name="Pg06Md01Lb02"
                                aria-describedby="basic-addon1"
                                onChange={handleChange}

                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Pg06Md01Lb03</InputGroup.Text>
                            <Form.Control
                                placeholder="Pg06Md01Lb03"
                                name="Pg06Md01Lb03"
                                aria-describedby="basic-addon1"
                                onChange={handleChange}

                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Pg06Md01Lb04</InputGroup.Text>
                            <Form.Control
                                placeholder="Pg06Md01Lb04"
                                name="Pg06Md01Lb04"
                                aria-describedby="basic-addon1"
                                onChange={handleChange}

                            />
                        </InputGroup>
                        <DropDwon1 className="mb-3"onChange={handleChange} />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handelClick} >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default InsertRow