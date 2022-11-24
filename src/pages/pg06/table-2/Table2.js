import React, { useMemo } from 'react';
import classes from './table2.module.css';
import { useTable } from 'react-table';
import SpinnerLoading from '../../../components/sppiner/Sppiner';
import { useSelector } from 'react-redux';
import { AiFillDelete } from "react-icons/ai";

function Table2({ tableData }) {
    // console.log(tableData)
    //  const data = useMemo(() => tableData, [tableData])
     const [data, setData] = React.useState(React.useMemo(() => tableData, []));

    const {loading } = useSelector(state => state.Pg06Bt01DataSlice)
 
    const deleteRow = (id) => {
        setData(current =>
          current.filter(employee => {
            return employee.t201 !== id;
          }),
        );
      }

    const tableHooks = (hooks) => {
        hooks.visibleColumns.push((columns) => [
            ...columns,
            {
                id: "Opstions",
                Header: "Delete",
                Cell: ({ row }) => (
                    <span style={{fontSize: '18px' }} className={classes.openModal} onClick={()=>deleteRow(row.values.t201)}>
                          <AiFillDelete/>
                    </span>
                 ),
            },
        ]);
    };    const columns = useMemo(
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
                accessor: "t208"
            },
            // {
            //     Header: "Delete",
            //     id: "delete",
            //     accessor: (str) => "delete",
        
            //     Cell: (tableProps) => (
            //       <span
            //         style={{
            //           cursor: "pointer",
            //           color: "blue",
            //           textDecoration: "underline"
            //         }}
            //         onClick={() => {
            //           // ES6 Syntax use the rvalue if your data is an array.
            //           const dataCopy = [...data];
            //           // It should not matter what you name tableProps. It made the most sense to me.
            //           dataCopy.splice(tableProps.row.index, 1);
            //           setData(dataCopy);
            //         }}
            //       >
            //         Delete
            //       </span>
            //     )
            //   }
            
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
    tableHooks
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
                                    <tr {...row.getRowProps()}>
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