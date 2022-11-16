import { React, useState, useEffect } from 'react';
// import classes from './selectsearch.module.css';
import Form from 'react-bootstrap/Form';
 
// redux
import {  useDispatch } from 'react-redux';
 
import { fetchEntryDatatablePG05Tp01 } from '../../redux/entryData2PG05Tp01';
import { fetchEntryDatatable_PG05Ch01 } from '../../redux/entryData2PG05Ch01';
import { fetchEntryDatatable_PG05Ch02 } from '../../redux/entryData2PG05Ch02';
import { fetchEntryDatatable_PG05Ch03 } from '../../redux/entryData2PG05Ch03';
 
function DropDwon({ setTapData }) {

    const dispatch = useDispatch();
    const [select, setSelect] = useState('')
    console.log(select)

    const handleChange = (event) => {
        setSelect(event.target.value);
    };

    useEffect(() => {
        if (select === "PG05Tp01") {
            getPG05Tp01()
        } else if (select === 'PG05Ch01') {
            getPG05Ch01()
        } else if (select === 'PG05Ch02') {
            getPG05Ch02()
        } else if (select === 'PG05Ch03') {
            getPG05Ch03()
        }
    }, [select])

    const getPG05Tp01 = (e) => {
        dispatch(fetchEntryDatatablePG05Tp01())
        setTapData('PG05Tp01');
    }

    const getPG05Ch01 = (e) => {
        dispatch(fetchEntryDatatable_PG05Ch01());
        setTapData('PG05Ch01');
 

    }
    const getPG05Ch02 = (e) => {
        dispatch(fetchEntryDatatable_PG05Ch02());
        setTapData('PG05Ch02');
      


    }
    const getPG05Ch03 = (e) => {
        dispatch(fetchEntryDatatable_PG05Ch03());
        setTapData('PG05Ch03');
        
    }

    return (
        <div>
            <div className='mb-2'>
                <Form.Select aria-label="Floating label select example" placeholder="drop" name='dropdown' onChange={handleChange}>
                    <option><button onClick={getPG05Tp01}>PG05Tp01</button></option>
                    <option><button onClick={getPG05Ch01}>PG05Ch01</button></option>
                    <option><button onClick={getPG05Ch02}>PG05Ch02</button></option>
                    <option><button onClick={getPG05Ch03}>PG05Ch03</button></option>
                </Form.Select>
            </div>

        </div>
    )
}

export default DropDwon