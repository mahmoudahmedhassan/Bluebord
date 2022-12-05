import React, { useMemo,useState } from 'react';
import classes from './table1.module.css'
import { useTable, } from 'react-table';
import SpinnerLoading from '../../../components/sppiner/Sppiner';

function FirstTable({ dataTable, loading, }) {
    console.log('tableData',dataTable)

 
    const columns = useMemo(
        () => [
            {
                Header: 'Sd',
                accessor: "sd"
            },
            {
                Header: 'T102',
                accessor: "sdTx"
            },
            {
                Header: 'T103',
                accessor: "t2"
            },
            {
                Header: 'T104',
                accessor: "t3"
            },
        ],
        []
    )

    const data = useMemo(() => dataTable, [dataTable])
    const [rowId, setRowId] = useState(null);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
        initialState: { pageIndex: 0 },
    });

    return (
        <div>
            <div className={classes.taple_container}>
                {loading ? (<div className='text-center'><SpinnerLoading /></div>) : (
                    <table {...getTableProps()}>
                        <thead className={classes.thead} >
                            {headerGroups.map(headerGroup => (
                                <tr  {...headerGroup.getHeaderGroupProps()} >
                                    {headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody className={classes.tbody} {...getTableBodyProps()}>
                            {rows?.map((row, i) => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}
                                    className={rowId === row.cells[0].row.original.t101 ? `markRow` : ''}
                                    onClick={() =>{ setRowId(row.cells[0].row.original.t101)}}
                                    >
                                        {row.cells.map(cell => {
                                            return <td {...cell.getCellProps()} >{cell.render('Cell')}</td>
                                        })}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                )}
            </div>
            {/* {<span>rows : {data && rowsLength}</span>} */}
        </div>
    )
}

export default FirstTable