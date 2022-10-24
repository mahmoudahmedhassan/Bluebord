import { React } from 'react';
// import './taple.css';
import SpinnerLoading from '../../components/sppiner/Sppiner'
import Table from 'react-bootstrap/Table';

export default function Taple({ dataTablePro, tapleDataGitAll, dataTableHid, tapleDataGitFin, tapData, loading, error }) {

    const data = () => {

        switch (tapData) {
            case "pro":
                return dataTablePro.map((el, index) => (
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
                        <td>{new Date(el.t112).toLocaleString('en-us', { month: 'short', year: 'numeric' })}</td>
                        <td>{el.t113}</td>
                        <td>{el.t114}</td>
                        <td><button>Edit</button></td>

                    </tr>
                ))

            case "all":
                return tapleDataGitAll.map((el, index) => (
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
                        <td>{new Date(el.t112).toLocaleString('en-us', { month: 'short', year: 'numeric' })}</td>
                        <td>{el.t113}</td>
                        <td>{el.t114}</td>
                        <td><button>Edit</button></td>

                    </tr>
                ))
            case "hid":

                return dataTableHid.map((el, index) => (
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
                        <td>{new Date(el.t112).toLocaleString('en-us', { month: 'short', year: 'numeric' })}</td>
                        <td>{el.t113}</td>
                        <td>{el.t114}</td>
                        <td><button>Edit</button></td>

                    </tr>
                ))

            case "fin":
                return tapleDataGitFin.map((el, index) => (
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
                        <td>{new Date(el.t112).toLocaleString('en-us', { month: 'short', year: 'numeric' })}</td>
                        <td>{el.t113}</td>
                        <td>{el.t114}</td>
                        <td><button>Edit</button></td>

                    </tr>
                ))
            default:

                return dataTablePro.map((el, index) => (
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
                        <td>{new Date(el.t112).toLocaleString('en-us', { month: 'short', year: 'numeric' })}</td>
                        <td>{el.t113}</td>
                        <td>{el.t114}</td>
                        <td><button>Edit</button></td>

                    </tr>
                ))
        }
    }




    return (
        <div className='container table text-center mb-5'>
            {loading ? (<SpinnerLoading />) : (
                <Table className='table' striped bordered hover responsive style={{ height: '600px !important' }}>
                    <thead className='text-center'>
                        <tr>
                            <th className='row-1 row-index'>index</th>
                            <th className='row-2 row-test-2'> test-1</th>
                            <th className='row-3 row-test-3'> test-2</th>
                            <th className='row-4 row-test-4'> test-3</th>
                            <th className='row-5 row-test-5'> test-4</th>
                            <th className='row-5 row-test-6'> test-5</th>
                            <th className='row-6 row-test-7'> test-6</th>
                            <th className='row-7 row-test-8'> test-7</th>
                            <th className='row-8 row-test-9'> test-8</th>
                            <th className='row-9 row-test-10'> test-9</th>
                            <th className='row-10 row-test-11'> test-10</th>
                            <th className='row-11 row-test-12'> test-11</th>
                            <th className='row-12 row-test-13'> test-12</th>
                            <th className='row-13 row-test-14'> test-13</th>
                            <th className='row-14 row-test-15'> test-14</th>
                            <th className='row-15 row-test-16'> buttons</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data()}
                    </tbody>
                </Table>
            )}

        </div>
    )
}
