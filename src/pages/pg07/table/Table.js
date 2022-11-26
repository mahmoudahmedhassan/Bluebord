import React,{useMemo} from 'react';
import classes from './table.module.css';
import { useTable, usePagination } from 'react-table';
import SpinnerLoading from '../../../components/sppiner/Sppiner';
import {Container, Row, Col} from 'react-bootstrap';
import { AiFillDelete } from "react-icons/ai";
import {useDispatch} from 'react-redux';
import {deleteRow} from '../../../redux/PG07Slice'
import { SearchPagination, TablePagination } from '../../../components/table Pagination/Pagination';

function Table({tableData,loading}) {
    const dispatch = useDispatch()

    const data = useMemo(() => tableData, [tableData])

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
      
        ],
        []
    )
 
    const tableHooks = (hooks) => {

        hooks.visibleColumns.push((columns) => [
            ...columns,
            {
                id: "Opstions",
                Header: "Opstions",
                Cell: ({ row }) => (
                    <span style={{fontSize: '18px' }} className={classes.openModal} onClick={() =>dispatch(deleteRow(row.values.t106)) }>
                          <AiFillDelete/>
                    </span>
                 ),
            },
        ]);
    };

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
        pageCount,
        pageOptions,
        state: { pageIndex, pageSize },
    } = useTable({
        columns,
        data,
        initialState: { pageIndex: 0 },
    },
        usePagination,
        tableHooks
    );

    return (
        <div>
            <div className={classes.taple_container}>
                {loading ? (<div className='text-center'><SpinnerLoading /></div>) : (

                    <table {...getTableProps()}>
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
                                    <tr {...row.getRowProps()}
                                        // onClick={() => gitId(row.cells[0].row.original)}
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
            {/* {<span>rows : {data && rowsLength}</span>} */}

            <Container fluid>
                    <Row className='align-items-center'>
                        <Col>
                            <SearchPagination
                                gotoPage={gotoPage}
                                nextPage={nextPage}
                                setPageSize={setPageSize}
                                pageSize={pageSize}
                                loading={loading}
                            />
                        </Col>
                        <Col>
                            <TablePagination
                                gotoPage={gotoPage}
                                previousPage={previousPage}
                                canPreviousPage={canPreviousPage}
                                pageIndex={pageIndex}
                                pageOptions={pageOptions}
                                nextPage={nextPage}
                                canNextPage={canNextPage}
                                pageCount={pageCount}
                                loading={loading}
                              />

                        </Col>
                    </Row>
                </Container>
        </div>
    )
}

export default Table