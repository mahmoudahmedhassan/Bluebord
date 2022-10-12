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


import CountUp from 'react-countup';

function Dashboard(){
  const {data, error, loading }=UseFetch('url',)
 
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

  return (
    <Container>
      <h1 className='text-bb text-center m-2'>welcome</h1>
      <Row>
        <Col>
          <div className="text-center m-5">
            <CountUp
              className="counter"
              start={0}
              end={1000}
              duration={3}
            ></CountUp>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div style={{ width: 300 }} >
            <PieChart chartData={x} />
          </div>
        </Col>
        <Col>
          <div style={{ width: 300 }} >
            <PieChart chartData={x} />
          </div>
        </Col>
      </Row>



    </Container>
  )
}

export default Dashboard