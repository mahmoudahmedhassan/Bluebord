import React, { useEffect, useState, forwardRef } from 'react';
import classes from './pg08.module.css'
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Table from './table/Table';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment';

export default function Pg08() {
    let initialDate = new Date();
        initialDate.setHours(8,0,0);
     
    const [startDate, setStartDate] =useState(initialDate);
    const [endDate, setEndDate] = useState(new Date());
    console.log(startDate);


    // table1
    const [tableData, setTabData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const url = "https://tstauth.smartgate-egypt.com/jobs/PG08";
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
    const keys = ["t102", "t103", "t104", "t105"];
    const search = (data) => {
        console.log(data,startDate);
        return data.filter((item) => keys.some((key) => item[key].toString().toLowerCase().includes(query)))
        .filter((item) =>  moment(item.t116).format('DD/MM/YYYY h:mm:ss').toString().toLowerCase().includes(moment(startDate).format('DD/MM/YYYY h:mm:ss') ))
        .filter((item) =>  moment(item.t116).format('DD/MM/YYYY h:mm:ss').toString().toLowerCase().includes(moment(endDate).format('DD/MM/YYYY h:mm:ss') ))
    };
    // const filterPassedTime = (time) => {
    //     const currentDate = new Date();
    //     const selectedDate = new Date(time);
    
    //     return currentDate.getTime() < selectedDate.getTime();
    //   };
    
    return (
        <Container fluid>
            <div>
                <div className={classes.search}>
                    <div className='d-flex align-items-center'>
                        <span>search</span>
                        <Form.Control type="text" placeholder="search" value={query} onChange={handelQuery} />
                    </div>
                    <div className={classes.datePickerWrapper}>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            timeCaption="time"
                            dateFormat="MMMM d, yyyy h:mm aa"
                            // filterTime={filterPassedTime}


                            // dateFormat="dd/MM/yyyy"
                         />
                     </div>
                    <div className={classes.datePickerWrapper}>
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            timeCaption="time"
                            dateFormat="MMMM d, yyyy h:mm aa"
                        />
                     </div>
                 </div>
                <Table tableData={search(tableData)} loading={loading} />
            </div>
        </Container>
    )
}
