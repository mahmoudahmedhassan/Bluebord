import { React, useState, useEffect } from 'react';

// components
import './entrydata.css';
import EntryPopupData from '../../components/entrypopup/EntryPopupData';
import TapleTest from '../../components/taple/TapleTest'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'; // title components
import SelectSearch from '../../components/dropdwon/SelectSearch'

// bootstartp
import { Container, Row, Col, } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchTapleData } from '../../redux/tapleData'

// =====================================================
function EntryData() {
  // redux
  const dispatch = useDispatch()
  const { tapleData, loading, error } = useSelector(state => state.tapleDataSlice)
  const { tapleDataGitAll, loadingGitAll, errorGitAll } = useSelector(state => state.tapleDataGetAllSlice);
  const { tapleDataGitHid, loadingGitHid, errorGitHid } = useSelector(state => state.tapleDataGetHidSlice);
  const { tapleDataGitFin, } = useSelector(state => state.tapleDataGetFinSlice);

  // Collapse
  const [open, setOpen] = useState(false);

  const [tapData, setTapData] = useState(1);


  // search state
  const [query, setQuery] = useState('');

  // fetch dispatch data 
  useEffect(() => {
    dispatch(fetchTapleData())
  }, [dispatch])

  const [switchValue, setSwitchValue] = useState({
    sW_N: false,
    sW_S: true,
    sW_R: false,
    sw_ST: false
  })
  console.log(switchValue)

  const handleChangeSwitch = ({ target }) => {
    setSwitchValue({
      ...switchValue,
      [target.name]: target.checked,
    });
  }
  // filter search
  const keys = ["sd", "t102", "t103", "t104"];
  const keysSlection = ['sW_N', 'sW_S', 'sW_R', 'sw_ST'];

  const search = (data) => {
    return data.filter((item) => keys.some((key) => item[key].toString().toLowerCase().includes(query)))
      .filter((item) => keysSlection.some((keySw) => item[keySw] !== switchValue))
    // .filter((item) => keysSlection.some((key) => item[key].includes(switchValue) ))
  };

  return (
    <div style={{ marginBottom: '30px' }}>
      <Container>
        <Breadcrumbs className='mr-3' main="Grop-1" sub="Page01" />
      </Container>

      <Container>
        <EntryPopupData />

        <button variant="primary" className='searchTaple_but'
          onClick={() => setOpen(!open)}

        >search</button>

        <Collapse in={open}>
          <form className="form" style={{ backgroundColor: 'white' }}>
            <Row>
              <Col md={12} lg={6}>

                <div className="section_1 " >
                  <Row>
                    <Col>
                      <div>
                        <Form.Control
                          type="text"
                          placeholder="search"
                          onChange={e => setQuery(e.target.value)}
                        />
                      </div>
                    </Col>
                    <Col>
                      <SelectSearch setTapData={setTapData} />

                    </Col>
                  </Row>
                </div>

              </Col>

              <Col md={12} lg={6}>
                <div className="section_2">

                  <div className='d-flex align-items-center mb-2'>
                    <span className='mx-2'>yes</span>
                    <input
                      id='switch-11'
                      type="checkbox"
                      name="sW_N"
                      onChange={handleChangeSwitch}
                      checked={switchValue.sW_N}
                    />
                    <label htmlFor="switch-11"></label>
                    <span className='mx-2'>no</span>
                  </div>

                  <div className='d-flex align-items-center mb-2'>
                    <span className='mx-2'>yes</span>
                    <input
                      id='switch-22'
                      type="checkbox"
                      name="sW_S"
                      onChange={handleChangeSwitch}
                      checked={switchValue.sW_S}


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
                      name="sW_R"
                      onChange={handleChangeSwitch}
                      checked={switchValue.sW_R}
                    />
                    <label htmlFor="switch-33"></label>
                    <span className='mx-2'>no</span>
                  </div>

                  <div className='d-flex align-items-center mb-2'>
                    <span className='mx-2'>yes</span>
                    <input
                      id='switch-44'
                      type="checkbox"
                      name="sw_ST"
                      onChange={handleChangeSwitch}
                      checked={switchValue.sw_ST}
                    />
                    <label htmlFor="switch-44"></label>
                    <span className='mx-2'>no</span>
                  </div>


                </div>
              </Col>

            </Row>
          </form>
        </Collapse>

        {
          <TapleTest
            dataTablePro={search(tapleData)}
            dataTableHid={search(tapleDataGitHid)}
            tapleDataGitAll={search(tapleDataGitAll)}
            tapleDataGitFin={search(tapleDataGitFin)}
            tapData={tapData}
            loading={loading} error={error}
          />}

      </Container>

      {/* {<Taple
        dataTablePro={search(tapleData)}
        dataTableHid={search(tapleDataGitHid)}
        tapleDataGitAll={search(tapleDataGitAll)}
        tapleDataGitFin={search(tapleDataGitFin)}
        tapData={tapData}
        loading={loading} error={error}
         />} */}

    </div>
  )
}

export default EntryData