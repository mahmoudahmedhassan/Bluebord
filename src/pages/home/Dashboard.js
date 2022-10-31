import React, { useEffect, useState } from 'react';
import './dashbord.css';
import Spinner from '../../components/sppiner/Sppiner';
 
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
  const [loading,setLoading] = useState(true);
   useEffect(() => {
    axios.get("https://tstAuth.smartgate-egypt.com/Jobs/GetDash",{
      headers: {
        DataType: "JSON",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("access-token")),
        mode: 'cors',
        Accept: 'application/json',
      },
    })
      .then(res => {
        let chartData = [];
        const data = res.data;
        setLoading(false)
        data.forEach(element => {
          chartData.push({
            labels: [element.t202Lb+":"+element.t202,element.t203Lb+":"+element.t203,element.t204Lb+":"+element.t204],
            datasets: [{
              data: [element.t202, element.t203, element.t204,],
             
              backgroundColor: [
                 "#e9c46a",
                "#f4a261",
                "#2a9d8f",
              ],
              borderColor: "black",
              borderWidth: 2,
            }],
            all: element.t201,
            title:element.title
          })
        })
        setDashboards(chartData)
      })
  }, [])

  return (
    <Container>
      <h1 className='text-bb text-center m-2'>welcome</h1>
       <Row>
        {loading ? <div className='text-center'><Spinner/></div>:
         dashbords.map((item,index) => (
           <Col md={12} lg={4} key={index}>
            <div className="counter-main">
              <div className="counter-container" >
                <div>
                  <h3>{item.title}</h3>
                  <CountUp
                    className="counter"
                    start={0}
                    end={item.all}
                    duration={3}
                  ></CountUp>
                </div>
                <p><BsCalendarDateFill className='icondate'/></p>
              
              </div>

              <div className='chart'>
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