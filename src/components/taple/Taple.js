import { React } from 'react';
// import './taple.css';
import SpinnerLoading from '../../components/sppiner/Sppiner'
import Table from 'react-bootstrap/Table';
import { FaUser, FaRegSun, FaBars } from "react-icons/fa";

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
                        <td><FaBars/></td>

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
                        <td><FaBars/></td>

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
                        <td><FaBars/></td>

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
                        <td><FaBars/></td>

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
                             <th className='row-2 row-test-2'> SD</th>
                            <th className='row-3 row-test-3'> t102</th>
                            <th className='row-4 row-test-4'> t103</th>
                            <th className='row-5 row-test-5'> t104</th>
                            <th className='row-5 row-test-6'> t105</th>
                            <th className='row-6 row-test-7'> t106</th>
                            <th className='row-7 row-test-8'> t107</th>
                            <th className='row-8 row-test-9'> t108</th>
                            <th className='row-9 row-test-10'> t109</th>
                            <th className='row-10 row-test-11'> t110</th>
                            <th className='row-11 row-test-12'> t111</th>
                            <th className='row-12 row-test-13'> t112</th>
                            <th className='row-13 row-test-14'> t113</th>
                            <th className='row-14 row-test-15'> t114</th>
                            <th className='row-15 row-test-16'> options</th>

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
