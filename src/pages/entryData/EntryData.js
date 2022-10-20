import { React, useState, useEffect } from 'react';
import './entrydata.css';
import Taple from '../../components/taple/Taple'
import EntryPopupData from '../../components/entrypopup/EntryPopupData';
import { Container, Row, Col, FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import {useSelector} from 'react-redux';
import {fetchTapleData} from '../../redux/tapleData'

function EntryData() {
  const {tapleData,loading,cc}= useSelector(state => state.tapleData)
  console.log('cc ' ,tapleData)


  const url = 'https://tstm.smartgate-egypt.com/api/Values/GAJ'
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(()=>{
    fetchTapleData()
  },[])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (res.status === 200) {
          const data = await res.json();
          return setData(data)
        } else {
          console.log('not 200')
        }

      } catch (e) {
        return console.log(e.message);
      }
    }
    fetchData();

  }, []);

  const keys = ["sd", "oj", "odt","ofn","ofce","ocy","oprty","ostl","ohg"];
  const search = (data) => {
     return data.filter((item) => keys.some((key) => item[key].toString().toLowerCase().includes(query))
    );
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
            <Col>
              <div className="section_1">
                <div>
                  <Form.Control
                    type="text"
                    placeholder="search"
                    onChange={e => setQuery(e.target.value)}

                  />
                </div>

                <div>
                  <Form.Select aria-label="Floating label select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>

              </div>

            </Col>

            <Col>
              <div className="section_2">
                <div>
                  <span>no</span>
                  <Form.Check
                    className="switch"
                    type="switch"
                    id="custom-switch"
                  />
                  <span>yse</span>
                </div>

                <div>
                  <span>no</span>
                  <Form.Check
                    className="switch"
                    type="switch"
                    id="custom-switch"
                  />
                  <span>yes</span>
                </div>

              </div>
            </Col>

          </Row>
        </form>
      </Container>

      {<Taple dataTable={search(data)} />}
    </div>
  )
}

export default EntryData