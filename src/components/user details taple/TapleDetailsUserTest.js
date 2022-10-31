import React from 'react';
import { useSelector } from 'react-redux';

import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';


function TapleDetailsUserTest() {
    const { userTapleData, loading, error } = useSelector(state => state.UserTapleDataSlice);
    console.log(userTapleData)

    const columns = [
 
    {
        text: 'T201',
        dataField: "t201"
    },
    {
        text: 'T202',
        dataField: "t202"
    },
    {
        text: 'T203',
        dataField: "t203"
    },
    {
        text: 'T204',
        dataField: "t204"
    },
    {
        text: 'T205',
        dataField: "t205"
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