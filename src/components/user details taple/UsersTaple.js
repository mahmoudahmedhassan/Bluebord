import { React, useMemo,useState } from 'react';
import classes from './userstaple.module.css';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserDetailsTapleData } from '../../redux/userDetailsTapleData';
import SpinnerLoading from '../../components/sppiner/Sppiner';
// import Table from 'react-bootstrap/Table';
import moment from 'moment';
import { Container, Row, Col } from 'react-bootstrap';

import { useTable, usePagination } from 'react-table';

 import { SearchPagination, TablePagination } from '../table Pagination/Pagination';

function UsersTaple({ usersTapleData }) {

    // redux 
    const dispatch = useDispatch();
    const data = useMemo(() => usersTapleData, [usersTapleData])

    const { loading } = useSelector(state => state.UsersTapleDataSlice)
    const [rowId, setRowId] = useState(null);

    const columns = useMemo(
        () => [
            {
                Header: 'SD',
                accessor: "sd"
            },
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
                accessor: "t105",
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
        usePagination
    );
    const getDetailsUserData = (id) => {
         dispatch(fetchUserDetailsTapleData(id.sd));
    }
    return (
        <div className={classes.usersTaple}>

            {loading ? (<div className='text-center'> <SpinnerLoading /></div>) : (
                // <>
                // <Table className='table' striped bordered hover responsive style={{ height: '600px !important' }}>
                //     <thead className='text-center'>
                //         <tr>
                //             <th className='row-2 row-test-2'> SD</th>
                //             <th className='row-3 row-test-3'> T101</th>
                //             <th className='row-4 row-test-4'> T102</th>
                //             <th className='row-5 row-test-5'> T103 </th>
                //             <th className='row-5 row-test-6'> T104</th>
                //             <th className='row-6 row-test-7'> T105</th>
                //         </tr>
                //     </thead>
                //     <tbody >
                //         {
                //             usersTapleData.map((el, index) => (
                //                 <tr key={index} onClick={() => { getDetailsUserData(el.sd) }} >
                //                     <td>{el.sd}</td>
                //                     <td>{el.t101}</td>
                //                     <td>{el.t102}</td>
                //                     <td>{el.t103}</td>
                //                     <td>{el.t104}</td>
                //                      <td>{new Date(el.t105).toLocaleString('en-us', { month: 'short', year: 'numeric', day: 'numeric'})}</td>
                //                     {/* <td>{ moment(el.t105).format("MMM Do YY")}</td> */}
                //                 </tr>
                //             ))
                //         }
                //     </tbody>
                // </Table>
                // </>


                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page?.map((row, i) => {
                            prepareRow(row)
                            return (
                                <tr key={i} {...row.getRowProps()} className={rowId === row.cells[0].row.original.t101 ? `${classes.markRow}`: ''}   onClick={() =>{ getDetailsUserData(row.cells[0].row.original); setRowId(row.cells[0].row.original.t101)}} >
                                    {row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )}

            <Container fluid>
                <Row className='align-items-center'>
                    <Col lg={4}>
                        <SearchPagination
                            gotoPage={gotoPage}
                            nextPage={nextPage}
                            setPageSize={setPageSize}
                            pageSize={pageSize}
                            loading={loading}
                        />
                    </Col>
                    <Col lg={8}>
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

export default UsersTaple