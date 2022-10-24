import { React, useState, useEffect } from 'react';
import classes from './selectsearch.module.css'
import Form from 'react-bootstrap/Form';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchTapleDataGitAll } from '../../redux/tapleDataGetAll'
import { fetchTapleDataGitHid } from '../../redux/tapleDataGetHid'
import { fetchTapleDataGitFin } from '../../redux/tapleDataGitFin'
import { fetchTapleData } from '../../redux/tapleData'
//  import './index.css'
function SelectSearch({ setTapData }) {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    console.log(show)


    // fetch dispatch data 
    // useEffect(() => {
    //     dispatch(fetchTapleDataGitAll())
    //     dispatch(fetchTapleDataGitHid())
    // }, [dispatch])

    const getPro = (e) => {
        e.preventDefault()
        dispatch(fetchTapleData())
        setTapData('pro')
    }

    const getAll = (e) => {
        e.preventDefault()
        dispatch(fetchTapleDataGitAll());
        setTapData('all')
        setShow(false)
    }
    const getHid = (e) => {
        e.preventDefault()
        dispatch(fetchTapleDataGitHid());
        setTapData('hid')
        setShow(false)

    }
    const getFin = (e) => {
        e.preventDefault()
        dispatch(fetchTapleDataGitFin());
        setTapData('fin')
        setShow(false)

    }

    return (
        <>
            {/* <div>
                <button onClick={getPro}>pro</button>
                <button onClick={getAll}>all</button>
                <button onClick={getHid}>hid</button>
                <button onClick={getFin}>fin</button>
            </div> */}

            <div className={classes.drpdowndown}>
                <div className={classes.container}>
                    <div className={classes.labal} onClick={() => setShow(!show)}>select</div>
                    <ul className={show ? classes.showw : ''}>
                        <li> <button onClick={getPro}>pro</button></li>
                        <li>  <button onClick={getAll}>all</button></li>
                        <li>  <button onClick={getHid}>hid</button></li>
                        <li> <button onClick={getFin}>fin</button></li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default SelectSearch