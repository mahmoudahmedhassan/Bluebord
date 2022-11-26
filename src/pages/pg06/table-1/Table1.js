import React, { useEffect, useState, useMemo } from 'react';
import classes from './table1.module.css'
import { useTable, usePagination } from 'react-table';
import { Container, Row, Col } from 'react-bootstrap';
import SpinnerLoading from '../../../components/sppiner/Sppiner';
import { useDispatch } from 'react-redux';
import { fetchPg06Bt01Data } from '../../../redux/Pg06Bt01TableSlice';
import { SearchPagination, TablePagination } from '../../../components/table Pagination/Pagination';

function FirstTable({ tableData, loading, setAddRow }) {
 
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
                accessor: "t112"
            },
            {
                Header: 'T113',
                accessor: "t113"
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
     const [rowId, setRowId] = useState(null);
 
    const gitId = (id) => {
        let t101 = id.t101;
        let t103 = id.t103;
        setAddRow({t101, t103})

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
                            {page?.map((row, i) => {
                                prepareRow(row)
                                return (
                                    <tr className={rowId === row.cells[0].row.original.t101 ? `${classes.markRow}`: ''}  {...row.getRowProps()} onClick={() =>{ gitId(row.cells[0].row.original); setRowId(row.cells[0].row.original.t101)}} >
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

export default FirstTable