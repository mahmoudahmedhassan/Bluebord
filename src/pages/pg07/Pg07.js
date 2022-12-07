import React, { useEffect, useState } from 'react';
import classes from './pg07.module.css';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import Table from "../pg07/table/Table";
import {useDispatch, useSelector} from 'react-redux';
import {fetchPG07Data} from '../../redux/PG07Slice';
import InsertRow from '../../components/insertTablePg07/InsertRow';
import { useTranslation } from 'react-i18next';

function Pg07() {
    const [t] = useTranslation();
    const dispatch = useDispatch()
    // table1
 
    const{PG07Data, loading}= useSelector(state => state.PG07DataSlice)
    console.log('PG07DataPG07Data',PG07Data)

    useEffect(() => {
        dispatch(fetchPG07Data())
    }, [dispatch]);

    // search state
    const [query, setQuery] = useState('');
    const handelQuery = (e) => {
        setQuery(e.target.value)
    }
    // filter search
    const keys = ["t101", "t102", "t103", "t104"];
    const search = (data) => {
         return data.filter((item) => keys.some((key) => item[key].toString().toLowerCase().includes(query)))
    };

    return (
        <Container fluid>
            <div>
                <div className={classes.search}>
                    <span>{t("search")}</span>
                    <Form.Control type="text" placeholder={t("search")} value={query} onChange={handelQuery} />
                </div>
                <div><InsertRow/></div>

                <Table tableData={search(PG07Data)} loading={loading} />
            </div>
        </Container>
    )
}

export default Pg07
