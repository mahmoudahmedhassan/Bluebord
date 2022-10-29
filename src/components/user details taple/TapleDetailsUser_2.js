import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import SpinnerLoading from '../../components/sppiner/Sppiner'

function TapleDetailsUserTow() {
  const { userTapleData, loading, error } = useSelector(state => state.UserTapleDataSlice)
 
  return (
    <div>
    {loading ? (<div className='text-center'><SpinnerLoading /></div>) : (
        <Table className='table' striped bordered hover responsive style={{ height: '600px !important' }}>
            <thead className='text-center'>
                <tr>
                    <th className='row-2 row-test-2'> SD</th>
                    <th className='row-3 row-test-3'> T101</th>
                    <th className='row-4 row-test-4'> T102</th>
                    <th className='row-5 row-test-5'> T103 </th>
                    <th className='row-5 row-test-6'> T104</th>
                    <th className='row-6 row-test-7'> T105</th>
                    <th className='row-6 row-test-7'> T106</th>
                  </tr>
            </thead>
            <tbody >
                {
                    userTapleData.map((el, index) => (
                        <tr key={index} >
                            <td>{el.sd}</td>
                            <td>{el.t101}</td>
                            <td>{el.t102}</td>
                            <td>{el.t103}</td>
                            <td>{el.t104}</td>
                            <td>{el.t105}</td>
                            <td>{el.t106}</td>
                          </tr>
                    ))
                }
            </tbody>
        </Table>
    )}
</div>  )
}

export default TapleDetailsUserTow