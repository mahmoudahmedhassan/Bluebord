import React from 'react';
import { useSelector } from 'react-redux';

import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory, {type} from 'react-bootstrap-table2-editor';


function TapleDetailsUserTest() {
    const { userTapleData, loading, error } = useSelector(state => state.UserTapleDataSlice);
    console.log(userTapleData)

    const columns = [
 
    {
        text: 'T201',
        dataField: "t201",
        validator: (newValue, row, column) => {
            if (isNaN(newValue)) {
              return {
                valid: false,
                message: 'Price should be numeric'
              };
            }
            }
    },
    {
        text: 'T202',
        dataField: "t202",
        validator: (newValue, row, column) => {
            if (isNaN(newValue)) {
              return {
                valid: false,
                message: 'Price should be numeric'
              };
            }
            }
    },
    {
        text: 'T203',
        dataField: "t203",
        validator: (newValue, row, column) => {
            if (isNaN(newValue)) {
              return {
                valid: false,
                message: 'Price should be numeric'
              };
            }
            }
    },
    {
        text: 'T204',
        dataField: "t204",
        validator: (newValue, row, column) => {
            if (isNaN(newValue)) {
              return {
                valid: false,
                message: 'Price should be numeric'
              };
            }
            }
    },
    {
        text: 'T205',
        dataField: "t205",
        validator: (newValue, row, column) => {
            if (isNaN(newValue)) {
              return {
                valid: false,
                message: 'Price should be numeric'
              };
            }
            }
    },
    ];
    return (
        <div>
            <BootstrapTable
                keyField="tableIndex"
                data={userTapleData}
                columns={columns}
                cellEdit={cellEditFactory({
                    mode: 'click',
                 })}
            />

        </div>
    )
}

export default TapleDetailsUserTest