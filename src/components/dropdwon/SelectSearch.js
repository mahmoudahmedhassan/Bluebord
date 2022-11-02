import { React, useState, useEffect } from 'react';
// import classes from './selectsearch.module.css';
import Form from 'react-bootstrap/Form';
 
// redux
import {  useDispatch } from 'react-redux';
import { fetchTapleDataGitAll } from '../../redux/tapleDataGetAll'
import { fetchTapleDataGitHid } from '../../redux/tapleDataGetHid'
import { fetchTapleDataGitFin } from '../../redux/tapleDataGitFin'
import { fetchTapleData } from '../../redux/tapleData'
 
function SelectSearch({ setTapData, setToggleSwitches }) {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    console.log(show)
    const [select, setSelect] = useState('')
    console.log(select)

    const handleChange = (event) => {
        setSelect(event.target.value);
    };

    useEffect(() => {
        if (select === "pro") {
            getPro()
        } else if (select === 'all') {
            getAll()
        } else if (select === 'hid') {
            getHid()
        } else if (select === 'fin') {
            getFin()
        }
    }, [select])

    const getPro = (e) => {
        dispatch(fetchTapleData())
        setTapData('pro');
        setShow(false);
        setToggleSwitches(0);

    }

    const getAll = (e) => {
        dispatch(fetchTapleDataGitAll());
        setTapData('all');
        setShow(false);
        setToggleSwitches(0);

    }
    const getHid = (e) => {
        dispatch(fetchTapleDataGitHid());
        setTapData('hid');
        setShow(false);
        setToggleSwitches(0);


    }
    const getFin = (e) => {
        dispatch(fetchTapleDataGitFin());
        setTapData('fin');
        setShow(false);
        setToggleSwitches(0);
    }

    return (
        <div>
            <div className='mb-2'>
                <Form.Select aria-label="Floating label select example" placeholder="drop" name='dropdown' onChange={handleChange}>
                    <option><button onClick={getPro}>pro</button></option>
                    <option><button onClick={getAll}>all</button></option>
                    <option><button onClick={getHid}>hid</button></option>
                    <option><button onClick={getFin}>fin</button></option>
                </Form.Select>
            </div>

        </div>
    )
}

export default SelectSearch