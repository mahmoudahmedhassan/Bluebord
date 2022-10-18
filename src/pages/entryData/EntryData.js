import { React, useState, useEffect } from 'react';
import './entrydata.css';
import Taple from '../../components/taple/Taple'
import EntryPopupData from '../../components/entrypopup/EntryPopupData';
import { Container, Row, Col, FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import axios from 'axios';


function EntryData() {
  const url = 'https://tstm.smartgate-egypt.com/api/Values/GAJ'
  const [data, setData] = useState([]);
  console.log(data ? data : null)



  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url,
           {
          mode: 'no-cors',
          method: 'GET',
          body: JSON.stringify(),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
        );

        console.log(res)

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
                  <Form.Control type="text" placeholder="text" />
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
      <Taple/>
    </div>
  )
}

export default EntryData