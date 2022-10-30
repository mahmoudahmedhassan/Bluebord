import { React, useMemo } from 'react';
import classes from './taple.module.css'
import { useTable, usePagination } from 'react-table'
import SpinnerLoading from '../../components/sppiner/Sppiner'
import { FaBars } from "react-icons/fa";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'


function TapleTest(
    { dataTablePro,
        tapleDataGitAll,
        dataTableHid,
        tapleDataGitFin,
        tapData,
        loading,
        error
    }
) {


    const data = useMemo(() => {
        if (tapData === "all") {
            return tapleDataGitAll;
        } else if (tapData === "pro") {
            return dataTablePro;
        } else if (tapData === "hid") {
            return dataTableHid;
        } else if (tapData === "fin") {
            return tapleDataGitFin;
        } else {
            return dataTablePro;

        }
    }, [tapData, tapleDataGitAll, dataTablePro, dataTableHid, tapleDataGitFin]);
    console.log(data)
    const columns = useMemo(
        () => [
            {
                Header: 'SD',
                accessor: "sd"
            },
            {
                Header: 'T102',
                accessor: "t102"
            },
            {
                Header: 'T103',
                accessor: "t103"
            },
            {
                Header: 'T104',
                accessor: "t104"
            },


            {
                Header: 'T105',
                accessor: "t105"
            },
            {
                Header: 'T106',
                accessor: "t106"
            },

            {
                Header: 'T107',
                accessor: "t107"
            },
            {
                Header: 'T108',
                accessor: "t108"
            },
            {
                Header: 'T109',
                accessor: "t109"
            },
            {
                Header: 'T110',
                accessor: "t110"
            },
            {
                Header: 'T111',
                accessor: "t111"
            },
            {
                Header: 'T112',
                accessor: "t112"
            },
            {
                Header: 'T113',
                accessor: "t113"
            },
            {
                Header: 'T114',
                accessor: "t114"
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
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
    } = useTable({
        columns,
        data,
        usePagination
    });

    return (
             <div className={classes.taple_container}>
                {loading ? (<div className='text-center'><SpinnerLoading /></div>) : (

                    <table {...getTableProps()}>
                        <thead className={classes.thead} >
                            {headerGroups.map(headerGroup => (
                                <tr  {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                    ))}
                                    <th>opstions</th>
                                </tr>

                            ))}
                        </thead>
                        <tbody className={classes.tbody} {...getTableBodyProps()}>
                            {rows?.map((row, i) => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map(cell => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })}
                                        <td><FaBars /></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                )}
            </div>
     )
}

export default TapleTest