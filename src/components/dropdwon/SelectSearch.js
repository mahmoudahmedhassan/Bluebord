import { React, useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchTapleDataGitAll } from '../../redux/tapleDataGetAll'

function SelectSearch() {
    const dispatch = useDispatch()
    const { tapleDataGitAll, loading, error } = useSelector(state => state.tapleDataGetAllSlice);
    // fetch dispatch data 
    useEffect(() => {
        dispatch(fetchTapleDataGitAll())
    }, [dispatch])

    console.log('tapleDataGitAll', tapleDataGitAll)
    return (
        <div>
            <Form.Select aria-label="Floating label select example">
                <option>Open this select menu</option>
                <option value="oj">git all data</option>
                <option value="odt">odt</option>
                <option value="ofn">ofn</option>
                <option value="ofn">ofn</option>
            </Form.Select>
        </div>
    )
}

export default SelectSearch