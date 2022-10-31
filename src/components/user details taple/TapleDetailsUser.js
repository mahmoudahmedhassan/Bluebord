import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import SpinnerLoading from '../../components/sppiner/Sppiner'
import { useTable } from 'react-table';

// Create an editable cell renderer
const EditableCell = ({
    value: initialValue,
    row: { index },
    column: { id },
    updateMyData, // This is a custom function that we supplied to our table instance
}) => {
    // We need to keep and update the state of the cell normally
    const [value, setValue] = useState(initialValue);
    console.log('value',value)

    const onChange = e => {
        setValue(e.target.value)
    }

    // We'll only update the external data when the input is blurred
    const onBlur = () => {
        updateMyData(index, id, value)
    }
    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    return <input value={value} onChange={onChange} onBlur={onBlur} />
}
// Set our editable cell renderer as the default Cell renderer
const defaultColumn = {
    Cell: EditableCell,
}

// taple function
function Tablee({ columns, data, updateMyData, skipPageReset }) {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        rows,

    } = useTable(
        {
            columns,
            data,
            defaultColumn,
            // use the skipPageReset option to disable page resetting temporarily
            autoResetPage: !skipPageReset,

            updateMyData,
        },
    )

    // Render the UI for your table
    return (
        <>
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
                    {rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </>
    )
}
//   taple function

function TapleDetailsUser() {
    const { userTapleData, loading, error } = useSelector(state => state.UserTapleDataSlice)
    console.log('het',userTapleData)
    const columns = React.useMemo(
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
        ],
        []
    )
    const [data, setData] = useState(() => userTapleData)
    const [originalData] = useState(data)
    const [skipPageReset, setSkipPageReset] = useState(false)

    const updateMyData = (rowIndex, columnId, value) => {
        // We also turn on the flag to not reset the page
        setSkipPageReset(true)
        setData(old =>
            old.map((row, index) => {
                if (index === rowIndex) {
                    return {
                        ...old[rowIndex],
                        [columnId]: value,
                    }
                }
                return row
            })
        )
    }
    useEffect(() => {
        setSkipPageReset(false)
    }, [data])
    const resetData = () => setData(originalData)


    return (
        <div>
            {loading ? (<div className='text-center'><SpinnerLoading /></div>) : (
                // <Table className='table' striped bordered hover responsive style={{ height: '600px !important' }}>
                //     <thead className='text-center'>
                //         <tr>
                //             <th className='row-2 row-test-2'> tableIndex</th>
                //             <th className='row-3 row-test-3'> T101</th>
                //             <th className='row-4 row-test-4'> T102</th>
                //             <th className='row-5 row-test-5'> T103 </th>
                //             <th className='row-5 row-test-6'> T104</th>
                //             <th className='row-6 row-test-7'> T105</th>
                //         </tr>
                //     </thead>
                //     <tbody >
                //         {
                //             userTapleData.map((el, index) => (
                //                 <tr key={index} >
                //                     <td>{el.tableIndex}</td>
                //                     <td>{el.t201}</td>
                //                     <td>{el.t202}</td>
                //                     <td>{el.t203}</td>
                //                     <td>{el.t204}</td>
                //                     <td>{el.t205}</td>
                //                 </tr>
                //             ))
                //         }
                //     </tbody>
                // </Table>
                <>
                    <button onClick={resetData}>Reset Data</button>
                    <Tablee
                        columns={columns}
                        data={data}
                        updateMyData={updateMyData}
                        skipPageReset={skipPageReset}
                    />
                </>
            )}
        </div>)
}

export default TapleDetailsUser