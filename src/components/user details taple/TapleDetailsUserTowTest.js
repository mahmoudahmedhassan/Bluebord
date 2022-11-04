import { React, useState } from 'react';
import classes from './TapleDetailsUserTowTest.module.css';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import SpinnerLoading from '../../components/sppiner/Sppiner';
import { useTable } from 'react-table';

function TapleDetailsUserTowTest() {
    const { userTapleData_2, loading } = useSelector(state => state.UserTapleData_2Slice);
    console.log('userTapleData_2 hey', userTapleData_2)
    const [checkboxValue, setCheckboxValue] = useState({})

    const handleChange = ({ target }) => {
        if (target.checked) {
            setCheckboxValue({
                ...checkboxValue,
                [target.name]: target.value
            });
        } else {
            let newSET = checkboxValue;
            delete newSET[target.name];
            setCheckboxValue({ ...newSET });
        }
    };
 
    return (
        <div>
            <Table striped bordered hover responsive>
                <thead className='text-center'>
                    <tr>
                        <th className='row-2 row-test-2'> SD</th>
                        <th className='row-3 row-test-3'> t102</th>
                        <th className='row-4 row-test-4'> t103</th>
                        <th className='row-5 row-test-5' colspan="2"> t104</th>
                        <th className='row-5 row-test-6'> t105</th>
                        <th className='row-6 row-test-7'> t106</th>
                        <th className='row-7 row-test-8' colspan="2"> t107</th>
                        <th className='row-8 row-test-9'> t108</th>
                        <th className='row-9 row-test-10' colspan="2">  t109</th>
                        <th className='row-10 row-test-11'> t110</th>
                        <th className='row-11 row-test-12'> t111</th>
                        <th className='row-12 row-test-13' colspan="2"> t112</th>

                    </tr>
                </thead>
                <tbody>
                    {userTapleData_2.map((el, index) => (
                        <tr key={el.tableIndex}>
                            <td>{el.t201}</td>
                            <td>{el.t202}</td>
                            <td>{el.t203}</td>
                            <td> <input className={classes.input_checkbox} value={`${index}t204tx`} checked={checkboxValue[`${index}t204tx`] === `${index}t204tx`} onChange={handleChange} name={`${index}t204tx`} type="checkbox" /></td>
                            <td><input className={classes.input_value_checkbox} type='text' value={el.t204tx} /></td>
                            <td> <input className={classes.input_checkbox} value={`${index}t205tx`} checked={checkboxValue[`${index}t205tx`] === `${index}t205tx`} onChange={handleChange} name={`${index}t205tx`} type="checkbox" /></td>
                            <td> <input className={classes.input_checkbox} value={`${index}t206tx`} checked={checkboxValue[`${index}t206tx`] === `${index}t206tx`} onChange={handleChange} name={`${index}t206tx`} type="checkbox" /></td>
                            <td><input className={classes.input_checkbox} value={`${index}t207tx`} checked={checkboxValue[`${index}t207tx`] === `${index}t207tx`} onChange={handleChange} name={`${index}t207tx`} type="checkbox" /></td>
                            <td> <input className={classes.input_value_checkbox} value={el.t207tx} type="text" /></td>
                            <td> <input className={classes.input_checkbox} value={`${index}t204tx`} checked={checkboxValue[`${index}t204tx`] === `${index}t204tx`} onChange={handleChange} name={`${index}t204tx`} type="checkbox" /></td>
                            <td><input className={classes.input_checkbox} value={`${index}t209tx`} checked={checkboxValue[`${index}t209tx`] === `${index}t209tx`} onChange={handleChange} name={`${index}t209tx`} type="checkbox" /></td>
                            <td> <input className={classes.input_value_checkbox} value={el.t209tx} type="text" /></td>
                            <td> <input className={classes.input_checkbox} value={`${index}t204tx`} checked={checkboxValue[`${index}t204tx`] === `${index}t204tx`} onChange={handleChange} name={`${index}t204tx`} type="checkbox" /></td>
                            <td> <input className={classes.input_checkbox} value={`${index}t204tx`} checked={checkboxValue[`${index}t204tx`] === `${index}t204tx`} onChange={handleChange} name={`${index}t204tx`} type="checkbox" /></td>
                            <td><input className={classes.input_checkbox} value={`${index}t212tx`} checked={checkboxValue[`${index}t212tx`] === `${index}t212tx`} onChange={handleChange} name={`${index}t212tx`} type="checkbox" /></td>
                            <td> <input className={classes.input_value_checkbox} value={el.t212tx} type="text" /></td>
                        </tr>
                    ))}

                </tbody>
            </Table>

        </div>
    )
}

export default TapleDetailsUserTowTest