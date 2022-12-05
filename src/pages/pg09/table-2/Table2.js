import React, { useMemo , useState} from 'react';
import classes from './table2.module.css';
import { useTable } from 'react-table';
import SpinnerLoading from '../../../components/sppiner/Sppiner';
import { useSelector } from 'react-redux';
import * as moment from 'moment';

function Table2({ tableData }) {
    const { loading } = useSelector(state => state.PG09T2DataSlice)
    const data = useMemo(() => tableData, [tableData])
    const [rowId, setRowId] = useState(null);

    const columns = useMemo(
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
                accessor: "t204"
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
                accessor: "t207"
            },
            {
                Header: 'T208',
                accessor: "t108",
                Cell: props => <div> {moment(props.value).format('DD/MM/YYYY')} </div>
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
        initialState: { pageIndex: 0 },
    },
    );
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
                                    className={rowId === row.cells[0].row.original.t201 ? `markRow` : ''}
                                     onClick={() =>{ setRowId(row.cells[0].row.original.t201)}}
                                    >
                                        {row.cells.map(cell => {
                                            return <td className='text-center' {...cell.getCellProps()}>{cell.render('Cell')}</td>
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

export default Table2
