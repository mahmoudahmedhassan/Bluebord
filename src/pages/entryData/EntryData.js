import { React, useState, useEffect } from 'react';

// components
import './entrydata.css';
import EntryPopupData from '../../components/entrypopup/EntryPopupData';
import Taple from '../../components/taple/Taple';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'; // title components
import SelectSearch from '../../components/dropdwon/SelectSearch'

// bootstartp
import { Container, Row, Col, FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


// redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchTapleData } from '../../redux/tapleData'

function EntryData() {

  const dispatch = useDispatch()
  const { tapleData, loading, error } = useSelector(state => state.tapleDataSlice)

  // search state
  const [query, setQuery] = useState('');
  // select state
  const [selected, setSelection] = useState('');
  console.log(selected);

  // fetch dispatch data 
  useEffect(() => {
    dispatch(fetchTapleData())
  }, [dispatch])

  // filter search
  const keys = ["sd", "oj", "odt", "ofn", "ofce", "ocy", "oprty", "ostl", "ohg"];
  const keysSlection = ["oj", "odt", "ofn"];
  const search = (data) => {
    return data.filter((item) => keys.some((key) => item[key].toString().toLowerCase().includes(query)))
      .filter((item) => keysSlection.some((key) => item[key]===(selected === '' ? item[key] : selected)))
  };

  return (
    <div>
      <Container>
        <Breadcrumbs className='mr-3' main="Grop-1" sub="Page01" />
      </Container>

      <Container>
        <EntryPopupData />

        <form className="form">
          <Row>
            <Col md={12} lg={6}>
              <div className="section_1 " >
                <div>
                  <Form.Control
                    type="text"
                    placeholder="search"
                    onChange={e => setQuery(e.target.value)}
                  />
                </div>
                <SelectSearch setSelection={setSelection} selected={selected} />
              </div>
            </Col>

            <Col md={12} lg={6}>
              <div className="section_2">

                <div className='d-flex align-items-center mb-2'>
                  <span className='mx-2'>yes</span>
                  <input
                    id='switch-11'
                    type="checkbox"
                    name="check_2"

                  />
                  <label htmlFor="switch-11"></label>
                  <span className='mx-2'>no</span>
                </div>

                <div className='d-flex align-items-center mb-2'>
                  <span className='mx-2'>yes</span>
                  <input
                    id='switch-22'
                    type="checkbox"
                    name="check_2"
                  />
                  <label htmlFor="switch-22"></label>
                  <span className='mx-2'>no</span>
                </div>
              </div>

              <div className="section_2">

                <div className='d-flex align-items-center mb-2'>
                  <span className='mx-2'>yes</span>
                  <input
                    id='switch-33'
                    type="checkbox"
                    name="check_2"
                  />
                  <label htmlFor="switch-33"></label>
                  <span className='mx-2'>no</span>
                </div>

                <div className='d-flex align-items-center mb-2'>
                  <span className='mx-2'>yes</span>
                  <input
                    id='switch-44'
                    type="checkbox"
                    name="check_2"
                  />
                  <label htmlFor="switch-44"></label>
                  <span className='mx-2'>no</span>
                </div>


              </div>
            </Col>

          </Row>
        </form>
      </Container>

      {<Taple dataTable={search(tapleData)} loading={loading} error={error} />}
    </div>
  )
}

export default EntryData