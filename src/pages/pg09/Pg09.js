import React, { useEffect, useState } from 'react';
import classes from './pg09.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FirstTable from './table-1/Table1';
import Table2 from './table-2/Table2';
import { useSelector } from 'react-redux';
import InputGroup from 'react-bootstrap/InputGroup';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

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
    <Form.Select aria-label="Floating label select example" placeholder="PG2md03" name='PG2Md01Comb1' onChange={(e) => setComValeu(e.target.value)}>
      {/* <option>select</option> */}
      {dropdownData &&
        dropdownData.map((el) => (
          <option key={el.sd} value={el.sd} >{el.sdTx}</option>
        ))
      }
    </Form.Select>
  )
}
let DropDwon1 = ({ setComValeu }) => {
  const [dropdownData, setDropdownData] = useState([]);
  useEffect(() => {
    const url = "https://tstauth.smartgate-egypt.com/jobs/GetImTy";

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
    <Form.Select aria-label="Floating label select example" placeholder="PG2md03" name='PG2Md01Comb1' onChange={(e) => setComValeu(e.target.value)}>
      <option>select</option>
      {dropdownData &&
        dropdownData.map((el) => (
          <option key={el.sd} value={el.sd} >{el.ty01}</option>
        ))
      }
    </Form.Select>
  )
}
let InputField = (props) => (
  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">{props.label}</InputGroup.Text>
    <Form.Control
      placeholder="text"
      name={props.label}
    />
  </InputGroup>
)

function Pg09() {

  const [comValeu, setComValeu] = useState(1)
  console.log(comValeu)
  const { PG09T2Data } = useSelector(state => state.PG09T2DataSlice)
  console.log('PG09T2Data', PG09T2Data)

  // table1
  const [tableData, setTabData] = useState([]);
  // console.log('tableData',tableData)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://tstauth.smartgate-egypt.com/jobs/PG09Ch01/${comValeu}`;
    const fetchdataTable1 = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setTabData(data);
        setLoading(false)
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchdataTable1();
  }, [comValeu]);

  const [open, setOpen] = useState(false);

  // search state
  const [query, setQuery] = useState('');
  const handelQuery = (e) => {
    setQuery(e.target.value)
  }
  // filter search
  const keys = ["t101", "t102", "t103",];
  const search = (data) => {
    return data.filter((item) => keys.some((key) => item[key].toString().toLowerCase().includes(query)))
  };
  return (
    <div style={{marginBottom: '40px'}}>
      <Container fluid>
        <Row>
          {/* table-1 */}
          <Col lg={4}>
            <div className={classes.section_1}>
              <div className={classes.comValeu}>{comValeu && comValeu}</div>
              <DropDwon setComValeu={setComValeu} />
              <div className={classes.search}>
                <span>search</span>
                <Form.Control type="text" placeholder="search" value={query} onChange={handelQuery} />
              </div>
              <div><FirstTable tableData={search(tableData)} loading={loading} /></div>
            </div>
          </Col>

          {/* table-2 */}
          <Col lg={8}>
            <button
            className={classes.collapse}
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              +
            </button>
            <Collapse in={open}>
              <div className={classes.insert}>
                <Row>
                  <Col><InputField label='Pg09Tx02' /></Col>
                  <Col> <InputField label='Pg09Tx03' /></Col>
                </Row>
                <Row>
                  <Col><InputField label='Pg09Tx04' /></Col>
                  <Col><InputField label='Pg09Tx05' /></Col>
                </Row>
                <Row>
                  <Col><DropDwon1 /></Col>
                </Row>
                <Row>
                  <Col>
                    <div className={classes.button}><button>Submit</button></div>
                  </Col>
                  <Col>
                    <div className={classes.button}><button>Rest</button></div>
                  </Col>
                </Row>
              </div>
            </Collapse>



            <div>
              <div className={classes.search}>
                <span>search</span>
                <Form.Control type="text" placeholder="search" value={query} onChange={handelQuery} />
              </div>
              <Table2 tableData={(PG09T2Data)} />
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Pg09