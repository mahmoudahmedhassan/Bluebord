import { React, useState, useEffect } from 'react'
import classes from './pg06.module.css';
import FirstTable from './table-1/Table1';
import Form from 'react-bootstrap/Form';
import {Container, Row, Col} from 'react-bootstrap';
function Pg06() {
  const [tableData1, setTabData] = useState([]);
  console.log(tableData1);
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
  const keys = ["sd", "t102", "t103", "t104"];
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

    </Container>
  )
}

export default Pg06