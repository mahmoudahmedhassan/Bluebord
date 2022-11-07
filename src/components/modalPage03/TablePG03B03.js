import {React,useState} from 'react';
import classes from './index.module.css';

import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';

const columns = [
    {
        dataField: "t307",
        text: 'T307',
    },
    {
        dataField: "t308",
        text: 'T308',

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
        dataField: "t301",
        text: 'T301',
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
        dataField: "t302",
        text: 'T301',
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
        dataField: "t303",
        text: 'T301',
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
        dataField: "t304",
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
    {
        dataField: "t305",
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
    {
        dataField: "t306",
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
function TablePG03B03({modalData}) {
    // const [dataTable, setDataTable] = useState([]);
    const [newTable, setNewTable] = useState([]);

    function beforeSaveCell(oldValue, newValue, row, column, done) {
        let newData = newTable.filter(item => item.id !== row.id);
        setNewTable([...newData, row]);
        console.log(row)
    }

    return (
        <div>
            <BootstrapTable
                keyField="id"
                data={modalData}
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

export default TablePG03B03