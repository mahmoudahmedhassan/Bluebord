import { React, useMemo } from 'react';
import classes from './userstaple_2.module.css'
// redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserDetailsTapleData_2 } from '../../redux/userDetailsTapleData_2'
import SpinnerLoading from '../../components/sppiner/Sppiner'
import Table from 'react-bootstrap/Table';
import { useTable, usePagination } from 'react-table';

function UsersTapleTow({ usersTapleData }) {
    // console.log("sgadgjskajkasbkjwdu", usersTapleData)
    // redux 
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.UsersTapleDataSlice)

    const getDetailsUserData = (id) => {
        dispatch(fetchUserDetailsTapleData_2(id));
    }
    const styleTaple = {
        overflow: 'auto',
         height: '700px'
    }


//  react table library

    // const data = useMemo(() => usersTapleData, [usersTapleData])
    // const columns = useMemo(
    //     () => [
    //         {
    //             Header: 'SD',
    //             accessor: "sd"
    //         },
    //         {
    //             Header: 'T101',
    //             accessor: "t101"
    //         },
    //         {
    //             Header: 'T102',
    //             accessor: "t102"
    //         },
    //         {
    //             Header: 'T103',
    //             accessor: "t103"
    //         },
    //         {
    //             Header: 'T104',
    //             accessor: "t104"
    //         },
    //         {
    //             Header: 'T105',
    //             accessor: "t105"
    //         },

    //     ],
    //     []
    // )

    // const {
    //     getTableProps,
    //     getTableBodyProps,
    //     headerGroups,
    //     rows,
    //     page,
    //     nextPage,
    //     previousPage,
    //     canNextPage,
    //     canPreviousPage,
    //     gotoPage,
    //     setPageSize,
    //     prepareRow,
    //     state: { pageIndex, pageSize },

    // } = useTable({
    //     columns,
    //     data,
    //     initialState: { pageIndex: 0 },
    // },
    //     usePagination
    // );

    return (
        <div className={classes.UsersTapleTow} style={styleTaple}>
            {loading ? (<div className='text-center'> <SpinnerLoading /></div>) : (

                // native taple
                <Table className='table' striped bordered hover responsive style={{ height: '600px !important',overflow:'auto',width:'800px' }}>
                    <thead className='text-center'>
                        <tr>
                            <th className='row-2 row-test-2'> SD</th>
                            <th className='row-3 row-test-3'> T101</th>
                            <th className='row-4 row-test-4'> T102</th>
                            <th className='row-5 row-test-5'> T103 </th>
                            <th className='row-5 row-test-6'> T104</th>
                            <th className='row-6 row-test-7'> T105</th>
                            <th className='row-6 row-test-7'> T106</th>
                         </tr>
                    </thead>
                    <tbody >
                        {
                            usersTapleData.map((el, index) => (
                                <tr key={index} onClick={() => { getDetailsUserData(el.sd) }} >
                                    <td>{el.sd}</td>
                                    <td>{el.t101}</td>
                                    <td>{el.t102}</td>
                                    <td>{el.t103}</td>
                                    <td>{el.t104}</td>
                                    <td>{el.t105}</td>
                                    <td>{el.t106} </td>
                                  </tr>
                            ))
                        }
                    </tbody>
                </Table>

            //   react taple library

                // <table {...getTableProps()}>
                //     <thead>
                //         {headerGroups.map(headerGroup => (
                //             <tr {...headerGroup.getHeaderGroupProps()}>
                //                 {headerGroup.headers.map(column => (
                //                     <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                //                 ))}
                //             </tr>
                //         ))}
                //     </thead>
                //     <tbody {...getTableBodyProps()}>
                //         {page?.map((row, i) => {
                //             prepareRow(row)
                //             return (
                //                 <tr key={i} {...row.getRowProps()} >
                //                     {row.cells.map(cell => {
                //                         // console.log('cell', cell.render('Cell'))
                //                         return <td  {...cell.getCellProps()}>{cell.render('Cell')}</td>
                //                     })}
                //                 </tr>
                //             )
                //         })}
                //     </tbody>
                // </table>
            )}
            {/* <div className='pagination'>
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
            </div> */}
        </div>
    )
}

export default UsersTapleTow