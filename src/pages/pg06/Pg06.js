import { React, useState, useEffect } from 'react'
import classes from './pg06.module.css';
import FirstTable from './table-1/Table1';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Table2 from './table-2/Table2';

let DropDwon = () => {
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
    <Form.Select aria-label="Floating label select example" placeholder="PG2md03" name='PG2Md01Comb1'>

      {dropdownData &&
        dropdownData.map((el) => (
          <option key={el.cid} value={el.cid}>{el.pG2Md01Comb1}</option>
        ))
      }
    </Form.Select>
  )
}

function Pg06() {
  const { Pg06Bt01Data } = useSelector(state => state.Pg06Bt01DataSlice)

  // table1
  const [tableData1, setTabData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const url = "https://tstauth.smartgate-egypt.com/jobs/PG06Tb1";
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
  }, []);

  // search state
  const [query, setQuery] = useState('');
  const handelQuery = (e) => {
    setQuery(e.target.value)

  }

  // filter search
  const keys = ["t101", "t102", "t103", "t104"];
  const search = (data) => {
    return data.filter((item) => keys.some((key) => item[key].toString().toLowerCase().includes(query)))
  };


  return (
    <Container fluid>
      <div>
        <div className={classes.search}>
          <span>search</span>
          <Form.Control type="text" placeholder="search" value={query} onChange={handelQuery} />
        </div>
        <FirstTable tableData={tableData1} loading={loading} />
      </div>

      <div style={{ margin: "20px 0" }}>
        <Row>
          <Col>
            <div className={classes.table_2}>
              <div className='d-flex align-items-center'>
                <span>Pg06Ch01</span>
                <input type='checkbox' name='Pg06Ch01' className={classes.checkbox} />
              </div>
              <DropDwon />
            </div>

          </Col>
          <Col>
            <div className={classes.button}>
              <button>
                Pg06Bt01
              </button>
            </div>
          </Col>
        </Row>

        <Row>
          <Table2 tableData={(Pg06Bt01Data)} style={{ marginBottom: '40px' }} />
        </Row>
        <Row>
          <Col>
            <div className={classes.Pg06Ch}>
              <div className='d-flex align-items-center'>
                <span> Pg06Ch02</span>
                <input type="checkbox" className={classes.checkbox} />
              </div>
              <div className='d-flex align-items-center'>
                <span> Pg06Ch03</span>
                <input type="checkbox" className={classes.checkbox} />
              </div>

            </div>
          </Col>
          <Col>
            <div className={classes.button_submit}><button  >submit</button></div>
          </Col>
        </Row>
      </div>



    </Container>
  )
}

export default Pg06