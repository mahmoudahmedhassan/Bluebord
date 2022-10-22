import React, { useEffect, useState } from 'react';
import './dashbord.css'
import UseFetch from '../../customHooks/UseFetch'

// chart js 
import PieChart from '../../components/dashbords/PieChart';
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

// bootstrap 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import axios from 'axios';
import { BsCalendarDateFill } from "react-icons/bs";
import CountUp from 'react-countup';

function Dashboard() {
  const [dashbords, setDashboards] = useState([]);
  console.log(dashbords);
  useEffect(() => {
    axios.get("https://tstAuth.smartgate-egypt.com/Jobs/GetDash")
      .then(res => {
        let chartData = [];
        const data = res.data;
        data.forEach(element => {
          chartData.push({
            labels: ['t202', 't203', 't204'],
            datasets: [{
              data: [element.t202, element.t203, element.t204,],
              backgroundColor: [
                "#FFAFCD",
                "#FFC8DD",
                "#CDB4DC",
              ],
              borderColor: "black",
              borderWidth: 2,
            }],
            all: element.t201
          })
        })
        setDashboards(chartData)
      })
  }, [])

  return (
    <Container>
      <h1 className='text-bb text-center m-2'>welcome</h1>

      <Row>
        {dashbords.map(item => (
          <Col lg={4}>
            <div className="counter-main">
              <div className="counter-container" >
                <div>
                  <h3>title</h3>
                  <CountUp
                    className="counter"
                    start={0}
                    end={item.all}
                    duration={3}
                  ></CountUp>
                </div>
                <p><BsCalendarDateFill className='icondate'/></p>
              
              </div>

              <div style={{ width: 300 }} className='chart'>
                <PieChart chartData={item} />
              </div>

            </div>

          </Col>
        ))}

      </Row>



    </Container>
  )
}

export default Dashboard