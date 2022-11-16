import React, { useEffect, useState } from 'react';
import classes from './index.module.css'
// redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchEntryDatatablePG05Tp01 } from '../../redux/entryData2PG05Tp01';
 
// bootstrap 
import { Container, Row, Col, } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import DropDwon from './DropDwon';
import Taple from './Taple';

function EntryDataTow() {
  const dispatch = useDispatch()
  const { tableDataPG05Tp01, loading, error } = useSelector(state => state.entryDatatablePG05Tp01Slice);
  const { tableData_PG05Ch01 } = useSelector(state => state.entryDatatable_PG05Ch01Slice);
  const { tableData_PG05Ch02 } = useSelector(state => state.entryDatatable_PG05Ch02Slice);
  const { tableData_PG05Ch03 } = useSelector(state => state.entryDatatable_PG05Ch03Slice);

  console.log('tableDataPG05Tp01', tableDataPG05Tp01)

  // fetch dispatch data 
  useEffect(() => {
    dispatch(fetchEntryDatatablePG05Tp01());
  }, [dispatch])
    // search state
    const [tapData, setTapData] = useState(1);

    const [query, setQuery] = useState('');
    const handelQuery = (e) => {
      setQuery(e.target.value)
     }
  // filter search
  const keys = ["t101", "t102", "t103"];
   const search = (data) => {
       return data.filter((item) => keys.some((key) => item[key].toString().toLowerCase().includes(query)))
    } 
   return (
    <div>
      <Container fluid >
        <Row>
          <Col>
            <div className="d-flex align-items-center">
              <span className='mx-2'>PG05Lb1</span>
              <Form.Control
                type="text"
                placeholder="search"
                onChange={handelQuery}
              />
            </div>
          </Col>
          <Col>
          <DropDwon setTapData={setTapData} tapData={tapData}/>
          </Col>
          <Col className="">
             <button className={classes.PG05Bt01}>PG05Bt01</button>
          </Col>
        </Row>
        <Row>
          <Col>
          <Taple 
           tableDataPG05Tp01={search(tableDataPG05Tp01)}
           tableData_PG05Ch01={search(tableData_PG05Ch01)}
           tableData_PG05Ch02={search(tableData_PG05Ch02)}
           tableData_PG05Ch03={search(tableData_PG05Ch03)}
           tapData={tapData}
           loading={loading} error={error}
          />
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default EntryDataTow