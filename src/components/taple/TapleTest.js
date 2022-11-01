import { React, useMemo,useRef } from 'react';
import classes from './taple.module.css'
import { useTable, usePagination, useRowSelect } from 'react-table'
import SpinnerLoading from '../../components/sppiner/Sppiner'
import { FaBars } from "react-icons/fa";
import 'react-perfect-scrollbar/dist/css/styles.css';

import { useReactToPrint } from 'react-to-print';

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

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

//  add option button 
    const tableHooks = (hooks) => {

        hooks.visibleColumns.push((columns) => [
          ...columns,
          {
            id: "Opstions",
            Header: "Opstions",
            Cell: ({ row }) => (
              <button className={classes.openModal} onClick={() => gitSd(row.values.sd)}>
                <FaBars />
              </button>
            ),
          },
        ]);
      };

      const gitSd = (id) => {
        console.log(id)
    }

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
    // console.log("datadd", data)

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
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        gotoPage,
        setPageSize,
        prepareRow,
         state: { pageIndex, pageSize },
    } = useTable({
        columns,
        data,
        initialState: { pageIndex: 0 },
    },
        usePagination,
        useRowSelect,
        tableHooks
    );



    return (
        <>
            <div className={classes.taple_container}>
                {loading ? (<div className='text-center'><SpinnerLoading /></div>) : (

                    <table {...getTableProps()} ref={componentRef}>
                        <thead className={classes.thead} >
                            {headerGroups.map(headerGroup => (
                                <tr  {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                    ))}
                                 </tr>

                            ))}
                        </thead>
                        <tbody className={classes.tbody} {...getTableBodyProps()}>
                            {page?.map((row, i) => {
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

            <div className={classes.pagination}>
                <button className='next' onClick={() => nextPage()} disabled={!canNextPage}>next</button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage} >prev</button>
                <input
                    type="number"
                    min="1"
                    defaultValue={pageIndex + 1}
                    onChange={e => {
                        const page = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(page)
                    }}
                />
                <select
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
             </div>
             <button onClick={handlePrint}>Print</button>

        </>
    )
}

export default TapleTest