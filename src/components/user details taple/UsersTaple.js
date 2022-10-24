import { React, useEffect, useState } from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchTapleData } from '../../redux/tapleData'
import SpinnerLoading from '../../components/sppiner/Sppiner'
import Table from 'react-bootstrap/Table';

function UsersTaple() {
    const dispatch = useDispatch()
    const { tapleData, loading, error } = useSelector(state => state.tapleDataSlice)



    return (
        <div>
            {loading ? (<SpinnerLoading />) : (
                <Table className='table' striped bordered hover responsive style={{ height: '600px !important' }}>
                    <thead className='text-center'>
                        <tr>
                            <th className='row-1 row-index'>index</th>
                            <th className='row-2 row-test-2'> SD</th>
                            <th className='row-3 row-test-3'> T102</th>
                            <th className='row-4 row-test-4'> T103</th>
                            <th className='row-5 row-test-5'>T104 </th>
                            <th className='row-5 row-test-6'> T105</th>
                            <th className='row-6 row-test-7'> T106</th>
                             <th className='row-15 row-test-16'> buttons</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            tapleData.map((el, index) => (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{el.sd}</td>
                                    <td>{el.t102}</td>
                                    <td>{el.t103}</td>
                                    <td>{el.t104}</td>
                                    <td>{el.t105}</td>
                                    <td>{new Date(el.t112).toLocaleString('en-us', { month: 'short', year: 'numeric' })}</td>
                                     <td><button>Edit</button></td>

                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            )}
        </div>
    )
}

export default UsersTaple