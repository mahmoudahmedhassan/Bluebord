import { React, useEffect, useState } from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersTapleData } from '../../redux/usersTaple'
import SpinnerLoading from '../../components/sppiner/Sppiner'
import Table from 'react-bootstrap/Table';
import { FaUser, FaRegSun, FaBars } from "react-icons/fa";

function UsersTaple() {
    const dispatch = useDispatch();
    const { usrsTapleData, loading, error } = useSelector(state => state.UsersTapleDataSlice)
    console.log('usrsTapleData' , usrsTapleData);
  // fetch dispatch data 
  useEffect(() => {
    dispatch(fetchUsersTapleData())
  }, [dispatch])

 
    return (
        <div>
            {loading ? (<SpinnerLoading />) : (
                <Table className='table' striped bordered hover responsive style={{ height: '600px !important' }}>
                    <thead className='text-center'>
                        <tr>
                            <th className='row-2 row-test-2'> SD</th>
                            <th className='row-3 row-test-3'> T101</th>
                            <th className='row-4 row-test-4'> T102</th>
                            <th className='row-5 row-test-5'> T103 </th>
                            <th className='row-5 row-test-6'> T104</th>
                            <th className='row-6 row-test-7'> T105</th>
                            <th className='row-15 row-test-16'> option</th>
                         </tr>
                    </thead>
                    <tbody>
                        {
                            usrsTapleData.map((el, index) => (
                                <tr key={index}>
                                    <td>{el.sd}</td>
                                    <td>{el.t101}</td>
                                    <td>{el.t102}</td>
                                    <td>{el.t103}</td>
                                    <td>{el.t104}</td>
                                    <td>{new Date(el.t105).toLocaleString('en-us', { month: 'short', year: 'numeric' })}</td>
                                    <td> <FaBars/> </td>
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