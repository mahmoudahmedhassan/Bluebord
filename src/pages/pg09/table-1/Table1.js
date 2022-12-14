import React, {useMemo,useState } from 'react';
import classes from './table1.module.css'
import { useTable,  } from 'react-table';
 import SpinnerLoading from '../../../components/sppiner/Sppiner';
import {fetchPG09T2Data} from '../../../redux/Pg09T2';
import {useDispatch} from 'react-redux'
 function FirstTable({ tableData, loading,}) {
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
                                    <tr 
                                    className={rowId === row.cells[0].row.original.t102 ? `markRow` : ''}
                                    {...row.getRowProps()} 
                                    onDoubleClick={() =>{ gitId(row.cells[0].row.original);setRowId(row.cells[0].row.original.t102)}}>
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