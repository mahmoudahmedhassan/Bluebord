import { React, useEffect, useState } from 'react';
import DataTable from "react-data-table-component";
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { deleteRow } from '../../../redux/PG5MdSlice'
let CheckInput = (props) => {
  return (
    <input
      style={{ visibility: "visible", height: "12px", width: "12px", cursor: "pointer" }}
      id={props.id}
      type="checkbox"
      checked={props.value}
    // onChange={e => props.onChange(e, props.rowID, props.id)}
    />
  )
}

let DropDwon3 = (props) => {
  console.log("ghfhffjj", props.value && props.value)
  const [dropdownData, setDropdownData] = useState([]);
  useEffect(() => {
    const url ="https://tstauth.smartgate-egypt.com/jobs/GetPG05Cmb01a";
 
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setDropdownData(data)
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Form.Select aria-label="Floating label select example" value={props.value} placeholder="PG2md03" name='PG2Md01Comb1'>

      {dropdownData &&
        dropdownData.map((el) => (
          <option value={el.sd}>{el.ity}</option>  

        ))
      }
    </Form.Select>
  )
}
let DropDwon6= (props) => {
  console.log("ghfhffjj", props.value && props.value)
  const [dropdownData, setDropdownData] = useState([]);
  useEffect(() => {
    const url = "https://tstauth.smartgate-egypt.com/jobs/GetPG04Combo01a";
 
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setDropdownData(data)
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Form.Select aria-label="Floating label select example" value={props.value} placeholder="PG2md03" name='PG2Md01Comb1'>

      {dropdownData &&
        dropdownData.map((el) => (
           <option value={el.sd}>{el.rs}</option>

        ))
      }
    </Form.Select>
  )
}



function PopupTable({ tableData }) {
  const [data, setData] = useState(tableData);


  useEffect(() => {
    let newArr = tableData.map(item => {
      return {
        id: item.t101,
        t101: item.t101,
        t102: item.t102,
        chk04: item.chk04,
        chk05: item.chk05,
        cmb03: item.cmb03,
        cmb06: item.cmb06,
      }
    });
    setData(newArr)
  }, [tableData]);

  const columns = [

    {
      name: 'T101',
      selector: row => <span>{row.t101}</span>
    },
    {
      name: 'T102',
      selector: row => <span>{row.t102}</span>
    },
    {
      name: 'cpm3',
      selector: row => row.cmb03,
      cell: (row) => <DropDwon3 rowID={row.id} value={row.cmb03} />
    },
    {
      name: 'check5',
      selector: row => row.chk04,
      cell: (row) => <CheckInput rowID={row.id} value={row.chk05} />
    },

    {
      name: 'check6',
      selector: row => row.chk05,
      cell: (row) => <CheckInput rowID={row.id} value={row.chk06} />
    },
    {
      name: 'com6',
      selector: row => row.t206,
      cell: (row) => <DropDwon6 rowID={row.id} value={row.cmb06} />
    },
    {
      name: 'delete',
      cell: (row) => <button rowID={row.id} onClick={() =>deleteRow(row.id)}>delete</button>
    },
  ]

  const deleteRow =(id)=>{
     setData(current =>
      current.filter(employee => {
        return employee.id !== id;
      }),
    );
  }

  return (
    <div>

      <DataTable
        keyField="id"
        columns={columns}
        data={data}
      />
    </div>
  )
}

export default PopupTable