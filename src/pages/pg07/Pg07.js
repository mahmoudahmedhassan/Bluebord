import React, { useEffect, useState } from 'react';
import classes from './pg07.module.css';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import Table from "../pg07/table/Table";

function Pg07() {
    // table1
    const [tableData, setTabData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const url = "https://tstauth.smartgate-egypt.com/jobs/Pg07";
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
    const keys = ["sd", "t102", "t103", "t104"];
    const search = (data) => {
        return data.filter((item) => keys.some((key) => item[key].toString().toLowerCase().includes(query)))
    };

    return (
        <Container fluid>
            <div>
                <div className={classes.search}>
                    <span>search</span>
                    <Form.Control type="text" placeholder="search" value={query} onChange={handelQuery} />
                </div>
                <Table tableData={ tableData} loading={loading} />
            </div>
        </Container>
    )
}

export default Pg07
