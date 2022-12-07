import { React, useState, useEffect } from 'react'
import classes from './pg06.module.css';
import FirstTable from './table-1/Table1';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Table2 from './table-2/Table2';
import { fetchPg06Bt01Data } from '../../redux/Pg06Bt01TableSlice';
import InsertRow from '../../components/insertTablePg07/InsertRow';
import { useTranslation } from 'react-i18next';

let DropDwon = ({ isAppearCom }) => {
  console.log(isAppearCom)

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
    <Form.Select aria-label="Floating label select example" placeholder="PG2md03" name='PG2Md01Comb1' className={isAppearCom ? `${classes.apper}` : `${classes.hide}`}>

      {dropdownData &&
        dropdownData.map((el) => (
          <option key={el.cid} value={el.cid}>{el.pG2Md01Comb1}</option>
        ))
      }
    </Form.Select>
  )
}

function Pg06() {
  const [t] = useTranslation();
  const dispatch = useDispatch()
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

  const [isAppearCom, setAppearCom] = useState(false)
  const [isAppearFeild, setAppearFeild] = useState(false)
  const [addRows, setAddRow] = useState({})
 
  return (
    <Container fluid>
      <div>
        <Row>
          <Col>
            <div className={classes.search}>
              <span>search</span>
              <Form.Control type="text" placeholder={t("search")} value={query} onChange={handelQuery} />
            </div>
          </Col>
          <Col>
            <InsertRow />
          </Col>
        </Row>



        <FirstTable tableData={tableData1} loading={loading} setAddRow={setAddRow} />
      </div>

      <div style={{ margin: "20px 0" }}>
        <Row>
          <Col>
            <div className={classes.table_2}>
              <div className='d-flex align-items-center'>
                <span>{t("Pg06Ch01")}</span>
                <input type='checkbox' name='Pg06Ch01' className={classes.checkbox} onChange={() => setAppearCom(!isAppearCom)} />
              </div>

              <DropDwon isAppearCom={isAppearCom} />
            </div>

          </Col>
          <Col>
            <div className={classes.button}>

              {Object.keys(addRows).length > 0 ? (
                <button onClick={() => dispatch(fetchPg06Bt01Data(addRows))}>
                  {t("Pg06Bt01 ")}
                </button>
              ) : (
                <button disabled>
                 {t("Pg06Bt01 ")}
                </button>
              )}

            </div>
          </Col>
        </Row>

        <Row>
          <Table2 tableData={(Pg06Bt01Data)} style={{ marginBottom: '40px' }} />
        </Row>
        <Row>
          <Col lg={2}>
            <div className={classes.Pg06Ch}>
              <div>{t("Pg06lb")}</div>
            </div>
          </Col>
          <Col lg={6}>
            <div className='d-flex align-items-center justify-content-around' style={{ margin: "20px 0" }}>
              <div className='d-flex align-items-center '>
                <span className={classes.Pg06Ch02}> {t("Pg06Ch02")}</span>
                <input type="checkbox" className={classes.checkbox} onChange={() => setAppearFeild(!isAppearFeild)} />
                <Form.Control
                  type="text"
                  id="Pg06Bt02"
                  aria-describedby="passwordHelpBlock"
                  placeholder="Pg06Bt02"
                  className={isAppearFeild ? `${classes.apper}` : `${classes.hide}`}
                />

              </div>
              <div className='d-flex align-items-center'>
                <span className={classes.Pg06Ch02}> {t("Pg06Ch03")}</span>
                <input type="checkbox" className={classes.checkbox} />
              </div>
            </div>

          </Col>
          <Col lg={4}>
            <div className={classes.button_submit}> <button>{t("submit")}</button></div>
          </Col>
        </Row>
      </div>

    </Container>
  )
}

export default Pg06