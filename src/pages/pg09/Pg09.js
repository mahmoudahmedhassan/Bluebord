import React, { useEffect, useState } from 'react';
import classes from './pg09.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FirstTable from './table-1/Table1';
import Table2 from './table-2/Table2';
import { useSelector } from 'react-redux';
import InputGroup from 'react-bootstrap/InputGroup';
import Collapse from 'react-bootstrap/Collapse';
import { useTranslation } from 'react-i18next';

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

let Search = (props) => {
  const search5 = (data) => {
    return data.filter((item) => props.key.some((key) => item[key].toString().toLowerCase().includes(props.value)))
  };
  return (
    <div className={classes.search}>
      <span>search</span>
      <Form.Control type="text" placeholder="search" value={props.value}
      //  onChange={() => handelQuery(e.target.value)}
      />
    </div>
  )
}


function Pg09() {
  const [t] = useTranslation();

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
  const [queryT1, setQueryT1] = useState('');
  const [queryT2, setQueryT2] = useState('');

  const handelQuery = (e) => {
    setQueryT1(e.target.value)
  }
  // filter search
  const keysT1 = ["t101", "t102", "t103",];
  const keysT2 = ["t201", "t202", "t203",];

  const search = (data, key) => {
    return data.filter((item) => key.some((key) => item[key].toString().toLowerCase().includes(queryT1)))
  };

  return (
    <div style={{ marginBottom: '40px' }}>
      <Container fluid>
        <Row>
          {/* table-1 */}
          <Col lg={4}>
            <div className={classes.section_1}>
              <div className={classes.comValeu}>{comValeu && comValeu}</div>
              <DropDwon setComValeu={setComValeu} />
              <div className={classes.search}>
                <span>{t("search")}</span>
                <Form.Control type="text" placeholder={t("search")} value={queryT1} onChange={handelQuery} />
              </div>
              <div><FirstTable tableData={search(tableData, keysT1)} loading={loading} /></div>
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
              {/* <GrAddCircle/> */}
              {t("Add")}
            </button>
            <Collapse in={open}>
              <div className={classes.insert}>
                <form>
                  <Row>
                    <Col><InputField label={t('Pg09Tx02')} /></Col>
                    <Col> <InputField label={t('Pg09Tx03')} /></Col>
                  </Row>
                  <Row>
                    <Col><InputField label={t('Pg09Tx04')}/></Col>
                    <Col><InputField label={t('Pg09Tx05')} /></Col>
                  </Row>
                  <Row>
                    <Col><DropDwon1 /></Col>
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
                <span>{t("search")}</span>
                <Form.Control type="text" placeholder={t("search")} value={queryT1} onChange={handelQuery} />
              </div>

              {/* <Search key={keysT2} value={queryT2} /> */}
              <Table2 tableData={search(PG09T2Data, keysT2)} />
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Pg09