import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import SpinnerLoading from '../../components/sppiner/Sppiner'

function TapleDetailsUser() {
  const { userTapleData, loading, error } = useSelector(state => state.UserTapleDataSlice)
 
  return (
    <div>
    {loading ? (<div className='text-center'><SpinnerLoading /></div>) : (
        <Table className='table' striped bordered hover responsive style={{ height: '600px !important' }}>
            <thead className='text-center'>
                <tr>
                    <th className='row-2 row-test-2'> tableIndex</th>
                    <th className='row-3 row-test-3'> T101</th>
                    <th className='row-4 row-test-4'> T102</th>
                    <th className='row-5 row-test-5'> T103 </th>
                    <th className='row-5 row-test-6'> T104</th>
                    <th className='row-6 row-test-7'> T105</th>
                  </tr>
            </thead>
            <tbody >
                {
                    userTapleData.map((el, index) => (
                        <tr key={index} >
                            <td>{el.tableIndex}</td>
                            <td>{el.t201}</td>
                            <td>{el.t202}</td>
                            <td>{el.t203}</td>
                            <td>{el.t204}</td>
                            <td>{el.t205}</td>
                          </tr>
                    ))
                }
            </tbody>
        </Table>
    )}
</div>  )
}

export default TapleDetailsUser