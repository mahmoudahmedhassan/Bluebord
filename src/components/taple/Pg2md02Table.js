import { useEffect, useState } from 'react';
import DataTable from "react-data-table-component";

let CheckInput = (props) => {
    return (
        <input
            style={{ visibility: "visible", height: "12px", width: "12px", cursor: "pointer" }}
            id={props.id}
            disabled={props.disabled}
            type="checkbox"
            checked={props.check}
            onChange={e => props.onChange(e, props.rowID, props.id)}
        />
    )
}
function Pg2md02Table({ dataTable }) {

    const [data, setData] = useState(dataTable);
    useEffect(() => {
        let newArr = dataTable.map(item => {
            return {
                id: item.id,
                t202: item.t202,
                t203: item.t203,
                t204: item.t204,
                t205: item.t205,
                t206: item.t206,
            }
        });
        setData(newArr)
    }, [dataTable]);

    const columns = [

        {
            name: 'T202',
            selector: row => <span>{row.t202}</span>
        },
        {
            name: 'T203',
            selector: row => <span>{row.t203}</span>
        },
        {
            name: 'T204',
            selector: row => <span>{row.t204}</span>
        },
  
        {
            name: 'T205',
            selector: row => row.t205,
            cell: (row) => <CheckInput rowID={row.id}/>
        },
        {
            name: 'T206',
            selector: row => row.t206,
            cell: (row) => <CheckInput rowID={row.id}   />
        },

    ]

    const customStyles = {
        rows: {
            style: {
                minHeight: '30px', // override the row height

            },
        },
        headCells: {
            style: {
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px',
            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
            },
        },
    };
    return (
        <DataTable
            keyField="id"
            columns={columns}
            customStyles={customStyles}
            data={data}
        />
    )
}

export default Pg2md02Table