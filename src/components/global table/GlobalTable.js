import React, {useMemo } from 'react';
import classes from './table1.module.css'
import { useTable,  } from 'react-table';
 import SpinnerLoading from '../../../components/sppiner/Sppiner';
import {fetchPG09T2Data} from '../../../redux/Pg09T2';
import {useDispatch} from 'react-redux'

 function GlobalTable({ tableData, loading}) {

    const dispatch = useDispatch()
 
    const columns = useMemo(
        () => [
            {
                Header: 'T101',

                accessor: "t101"
            },
            {
                Header: 'T102',
                accessor: "t102"
            },
            {
                Header: 'T103',
                accessor: "t103"
            },
        ],
        []
    )
    const data = useMemo(() => tableData, [tableData])

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
    },
         
    );
    const gitId = (id) => {
        let sd = id.sd;
        let t101 = id.t101;
        
        dispatch(fetchPG09T2Data({sd,t101}))
    }
  
 
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
                                    <tr {...row.getRowProps()}   onDoubleClick={() =>{ gitId(row.cells[0].row.original)}}>
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
 
        </div>
    )
}

export default GlobalTable