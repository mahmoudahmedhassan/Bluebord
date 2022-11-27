import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';

function TapleDetailsUserTest({ logDataTable }) {

    const { userTapleData, loading, error } = useSelector(state => state.UserTapleDataSlice);
    const [dataTable, setDataTable] = useState([]);
    const [newTable, setNewTable] = useState([]);

    useEffect(() => {
        logDataTable(newTable)
    }, [newTable, logDataTable])
 
    useEffect(() => {
        let newArr = userTapleData.map(item => {
            return {
                id: item.tableIndex,
                t201: item.t201,
                t202: item.t202,
                t203: item.t203,
                t204: item.t204,
                t205: item.t205,
            }
        });
        setDataTable(newArr);
        setNewTable(newArr);
    }, [userTapleData])

     const columns = [
        {
            dataField: "t201",
            text: 'T201',

            validator: (newValue, row, column) => {

                if (isNaN(newValue)) {
                    return {
                        valid: false,
                        message: 'Price should be numeric'
                    };
                }
                return true;

            }
        },
        {
            dataField: "t202",
            text: 'T202',

        },
        {
            dataField: "t203",
            text: 'T203',
            validator: (newValue, row, column) => {
                if (isNaN(newValue)) {
                    return {
                        valid: false,
                        message: 'Price should be numeric'
                    };
                }
                return true;

            }
        },
        {
            dataField: "t204",
            text: 'T204',
            validator: (newValue, row, column) => {
                if (isNaN(newValue)) {
                    return {
                        valid: false,
                        message: 'Price should be numeric'
                    };
                }
                return true;
            }
        },
        {
            dataField: "t205",
            text: 'T205',

            validator: (newValue, row, column) => {
                if (isNaN(newValue)) {
                    return {
                        valid: false,
                        message: 'Price should be numeric'
                    };
                }
                return true;
            }
        },
    ];

 
    function beforeSaveCell(oldValue, newValue, row, column, done) {
        let newData = newTable.filter(item => item.id !== row.id);
        setNewTable([...newData, row]);
        console.log(row)
    }
 
    useEffect(() => {
        console.log(newTable)
    }, [newTable])
 
    return (
        <div>
            <BootstrapTable
                keyField="id"
                data={dataTable}
                columns={columns}
                cellEdit={cellEditFactory({
                    mode: 'click',
                    blurToSave: true,
                    beforeSaveCell
                })}
            />
        </div>
    )
}
 
export default TapleDetailsUserTest
