import { React, useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchTapleDataGitAll } from '../../redux/tapleDataGetAll'
import { fetchTapleDataGitHid } from '../../redux/tapleDataGetHid'
import { fetchTapleDataGitFin } from '../../redux/tapleDataGitFin'
import { fetchTapleData } from '../../redux/tapleData'
//  import './index.css'
function SelectSearch({ setTapData }) {
    const dispatch = useDispatch()

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
    }
    const getHid = (e) => {
        e.preventDefault()
        dispatch(fetchTapleDataGitHid());
        setTapData('hid')
    }
    const getFin = (e) => {
        e.preventDefault()
        dispatch(fetchTapleDataGitFin());
        setTapData('fin')
    }

    return (
        <>
            <div>
                <button onClick={getPro}>pro</button>
                <button onClick={getAll}>all</button>
                <button onClick={getHid}>hid</button>
                <button onClick={getFin}>fin</button>
            </div>
 
        </>
    )
}

export default SelectSearch