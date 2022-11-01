import React from 'react';
import classes from './TapleDetailsUserTowTest.module.css';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import SpinnerLoading from '../../components/sppiner/Sppiner';
import { useTable } from 'react-table';

function TapleDetailsUserTowTest() {
    const { userTapleData_2, loading } = useSelector(state => state.UserTapleData_2Slice);
    console.log('userTapleData_2 hey',userTapleData_2)

    return (
        <div>
            <Table striped bordered hover responsive>
                <thead className='text-center'>
                    <tr>
                        <th className='row-2 row-test-2'> SD</th>
                        <th className='row-3 row-test-3'> t102</th>
                        <th className='row-4 row-test-4'> t103</th>
                        <th className='row-5 row-test-5'> t104</th>
                        <th className='row-5 row-test-5'></th>
                        <th className='row-5 row-test-6'> t105</th>
                        <th className='row-6 row-test-7'> t106</th>
                        <th className='row-7 row-test-8'> t107</th>
                        <th className='row-7 row-test-8'> </th>

                        <th className='row-8 row-test-9'> t108</th>
                        <th className='row-9 row-test-10'>  t109</th>
                        <th className='row-7 row-test-8'>  </th>

                        <th className='row-10 row-test-11'> t110</th>
                        <th className='row-11 row-test-12'> t111</th>
                        <th className='row-12 row-test-13'> t112</th>
                        <th className='row-7 row-test-8'> </th>

                    </tr>
                </thead>
                <tbody>
                    {userTapleData_2.map((el) =>(
                    <tr key={el.tableIndex}>
                        <td>{el.t201}</td>
                        <td>{el.t202}</td>
                        <td>{el.t203}</td>
                        <td> <input className={classes.input_checkbox}  type="checkbox" /></td>
                        <td><input className={classes.input_value_checkbox}type='text' value={el.t204tx} /></td>
                        <td>{el.t205}</td>
                        <td>{el.t206}</td>
                        <td><input  className={classes.input_checkbox} type="checkbox"/></td>
                        <td> <input className={classes.input_value_checkbox} value={el.t207tx} type="text" /></td>
                        <td>{el.t208}</td>
                        <td><input  className={classes.input_checkbox} type="checkbox"/></td>
                        <td> <input className={classes.input_value_checkbox} value={el.t209tx}  type="text" /></td>
                        <td>{el.t210}</td>
                        <td>{el.t211}</td>
                        <td><input  className={classes.input_checkbox}type="checkbox"/></td>
                        <td> <input className={classes.input_value_checkbox}value={el.t212tx}  type="text" /></td>
  
                    </tr>  
                    ))}

                </tbody>
            </Table>

        </div>
    )
}

export default TapleDetailsUserTowTest