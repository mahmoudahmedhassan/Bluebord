import React, { useEffect, useState } from 'react'
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

import CountUp from 'react-countup';

function Dashboard() {
  const [dashbords, setDashboards] = useState([]);
  console.log(dashbords);
  const { data, error, loading } = UseFetch('url',)
  const chartData =
    [
      {
        id: 1,
        year: 2016,
        userGain: 80000,
        userLost: 823,
      },
      {
        id: 2,
        year: 2017,
        userGain: 45677,
        userLost: 345,
      },
      {
        id: 3,
        year: 2018,
        userGain: 78888,
        userLost: 555,
      },
      {
        id: 4,
        year: 2019,
        userGain: 90000,
        userLost: 4555,
      },
      {
        id: 5,
        year: 2020,
        userGain: 4300,
        userLost: 234,
      },

    ]

  const x = {
    labels: chartData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: chartData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  }

  useEffect(() => {
    axios.get("https://tstAuth.smartgate-egypt.com/Jobs/GetDash")
      .then(res => {
        let chartData = [];
        const data = res.data;
        data.forEach(element => {
          chartData.push({
            labels: ['t202', 't203','t204'],
            datasets: [{
              data: [element.t202, element.t203, element.t204,],
              backgroundColor: [
                "rgba(75,192,192,1)",
                "#f3ba2f",
                "#2a71d0",
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
          <Col md={4}>
            <div>
              <div className="text-center">
                <CountUp
                  className="counter"
                  start={0}
                  end={item.all}
                  duration={3}
                ></CountUp>
              </div>

              <div style={{ width: 300 }}>
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