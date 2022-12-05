import React, { useMemo,useState } from 'react';
import classes from './table.module.css';
import { useTable, usePagination } from 'react-table';
import SpinnerLoading from '../../../components/sppiner/Sppiner';
import { Container, Row, Col } from 'react-bootstrap';
import { Pagination, SearchPagination, TablePagination } from '../../../components/table Pagination/Pagination';
 import * as moment from 'moment';
function Table({ tableData, loading }) {

    const data = useMemo(() => tableData, [tableData])
    const [rowId, setRowId] = useState(null);

    const columns = useMemo(
        () => [

            {
                Header: 'T102',
                accessor: "t102"
            },
            {
                Header: 'T103',
                accessor: "t103",
                Cell: props => <div> {moment(props.value).format('DD/MM/YYYY')} </div>
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
            {
                Header: 'T115',
                accessor: "t115"
            },
            {
                Header: 'T116',
                accessor: "t116",
                Cell: props => <div> {moment(props.value).format('DD/MM/YYYY')} </div>
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
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
                                    className={rowId === row.cells[0].row.original.t102 ? `markRow` : ''}
                                    onClick={() => { setRowId(row.cells[0].row.original.t102) }}                                    >
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