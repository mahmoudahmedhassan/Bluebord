import { React } from 'react'
// import './taple.css';
import Table from 'react-bootstrap/Table';
 
export default function Taple({dataTable}) {
  
    return (
        <div className='container table'>
            <Table className='table' striped bordered hover responsive>
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
                        <th> buttons</th>
 
                    </tr>
                </thead>
                <tbody>

                    {dataTable &&
                    dataTable.map((el, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{el.sd}</td>
                            <td>{el.oj}</td>
                            <td>{el.odt}</td>
                            <td>{el.ofn}</td>
                            <td>{el.ocir}</td>
                            <td>{el.ofce}</td>
                            <td>{el.ocy}</td>
                            <td>{el.oprty}</td>
                            <td>{el.ostl}</td>
                            <td>{el.ohg}</td>
                            <td>{el.oComDt}</td>
                            <td><button>Edit</button></td>

                        </tr>
                    ))}

                </tbody>
            </Table>
        </div>
    )
}
