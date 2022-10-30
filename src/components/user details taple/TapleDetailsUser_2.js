import React from 'react';
import './index.css'
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import SpinnerLoading from '../../components/sppiner/Sppiner'
import { useTable } from 'react-table'

function TapleDetailsUserTow() {
    const { userTapleData_2, loading } = useSelector(state => state.UserTapleData_2Slice);
    console.log('userTapleData', userTapleData_2)


    const data = React.useMemo(() => userTapleData_2, [userTapleData_2])

    const columns = React.useMemo(
        () => [
            {
                Header: 'T201',
                accessor: "t201"
            },
            {
                Header: 'T202',
                accessor: "t202"
            },
            {
                Header: 'T203',
                accessor: "t203"
            },

            {
                Header: 'T204',
                columns: [
                    {
                        Header: 'T204',
                        accessor: 't204',
                    },
                    {
                        Header: 'T204tx',
                        accessor: 't204tx',
                    },
                ],
            },
            {
                Header: 'T205',
                accessor: "t205"
            },
            {
                Header: 'T206',
                accessor: "t206"
            },


            {
                Header: 'T207',
                columns: [
                    {
                        Header: 'T207',
                        accessor: 't207',
                    },
                    {
                        Header: 'T207tx',
                        accessor: 't207tx',
                    },
                ],
            },
            {
                Header: 'T208',
                columns: [
                    {
                        Header: 'T208',
                        accessor: 't208',
                    },
                    {
                        Header: 'T208tx',
                        accessor: 't208tx',
                    },
                ],
            },
            {
                Header: 'T209',
                columns: [
                    {
                        Header: 'T209',
                        accessor: 't209',
                    },
                    {
                        Header: 'T209tx',
                        accessor: 't209tx',
                    },
                ],
            },

            {
                Header: 'T210',
                accessor: "t210"
            },
            {
                Header: 'T211',
                accessor: "t211"
            },
            {
                Header: 'T212',
                columns: [
                    {
                        Header: 'T212',
                        accessor: 't212',
                    },
                    {
                        Header: 'T212tx',
                        accessor: 't212tx',
                    },
                ],
            },

        ],
        []
    )
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    });

    const styleTaple ={
        overflow: 'auto',
        width:' 530px',
    }

    return (
        <div style={styleTaple}>
            {loading ? (<div className='text-center'><SpinnerLoading /></div>) : (
            
                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row, i) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )}
        </div>)
}

export default TapleDetailsUserTow