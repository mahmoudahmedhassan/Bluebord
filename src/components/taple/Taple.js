import { React } from 'react';
// import './taple.css';
import SpinnerLoading from '../../components/sppiner/Sppiner'
import Table from 'react-bootstrap/Table';

export default function Taple({ dataTable, loading, error }) {

    return (
        <div className='container table text-center mb-5'>
            {loading ? (<SpinnerLoading />) : (
                <Table className='table' striped bordered hover responsive style={{ height: '600px !important' }}>
                    <thead className='text-center'>
                        <tr>
                            <th>index</th>
                            <th> test-1</th>
                            <th> test-2</th>
                            <th> test-3</th>
                            <th> test-4</th>
                            <th> test-5</th>
                            <th> test-6</th>
                            <th> test-7</th>
                            <th> test-8</th>
                            <th> test-9</th>
                            <th> test-10</th>
                            <th> test-11</th>
                            <th> test-12</th>
                            <th> test-13</th>
                            <th> test-14</th>
                            <th> buttons</th>

                        </tr>
                    </thead>
                    <tbody>

                        {dataTable &&
                            dataTable.map((el, index) => (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{el.sd}</td>
                                    <td>{el.t102}</td>
                                    <td>{el.t103}</td>
                                    <td>{el.t104}</td>
                                    <td>{el.t105}</td>
                                    <td>{el.t106}</td>
                                    <td>{el.t107}</td>
                                    <td>{el.t108}</td>
                                    <td>{el.t109}</td>
                                    <td>{el.t110}</td>
                                    <td>{el.t111}</td>
                                    <td>{el.t112}</td>
                                    <td>{el.t113}</td>
                                    <td>{el.t114}</td>
                                    <td><button>Edit</button></td>

                                </tr>
                            ))}

                    </tbody>
                </Table>
            )}

        </div>
    )
}
