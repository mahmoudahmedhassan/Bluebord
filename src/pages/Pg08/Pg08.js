import React, { useEffect, useState, useRef } from 'react';
import classes from './pg08.module.css'
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Table from './table/Table';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

export default function Pg08() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    console.log(startDate);
    const forwardRef = useRef();

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
        return data.filter((item) => keys.some((key) => item[key].toString().toLowerCase().includes(query)))
    };
    let style = {
        width: '250px',
        height: '38px',
        border: '1px solid #ddd',
        padding: '10px',
        borderRadius: '5px',
    };


    // const CustomInput = forwardRef((props: any, ref) => {
    //     return <Input {...props} ref={ref} />;
    // });
    return (
        <Container fluid>
            <div>
                <div className={classes.search}>
                    <div className='d-flex align-items-center'>
                        <span>search</span>
                        <Form.Control type="text" placeholder="search" value={query} onChange={handelQuery} />
                    </div>
                    <div>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            timeCaption="time"
                            dateFormat="MMMM d, yyyy h:mm aa"
                            // customInput={<CustomInput inputRef={inputRef} />}
                        //    style={style}

                        />

                    </div>
                    <div>
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
