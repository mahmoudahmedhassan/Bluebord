
import DataTable from "react-data-table-component";

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

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

let NumberInput = (props) => {
  // const [valid, setIsValid] = useState(null);
  // useEffect(() => {
  //   if (props.value < 0) {
  //     setIsValid(true)
  //   } else {
  //     setIsValid(false)
  //   }
  // }, [props.value])

  return (
    <div style={{ display: "flex" }}>
      <input
        id={props.id}
        disabled={props.disabled}
        type="number" min="0"
        value={props.value}
        onChange={e => props.onChange(e, props.rowID, props.id)}
        style={{ width: '35px' }} />
      {/* {
        valid && <div style={{ position: "absolute", top: '30px', color: "red" }}>should be greeter than 0</div>
      } */}
    </div>
  )
}

function TableDetailsUserTow({ setAllChecked, setAppear }) {
  const { userTapleData_2, loading } = useSelector(state => state.UserTapleData_2Slice);
  const [data, setData] = useState(userTapleData_2);
  // const [isAllChecked, setAllChecked] = useState(false);

  useEffect(() => {
    let newArr = userTapleData_2.map(item => {
      return {
        id: item.tableIndex,
        t201: item.t201,
        t202: item.t202,
        t203: item.t203,
        t204: item.t204,
        t204tx: item.t204tx,
        t205: item.t205,
        t206: item.t206,
        t207: item.t207,
        t207tx: item.t207tx,
        t208: item.t208,
        t209: item.t209,
        t209tx: item.t209tx,
        t210: item.t210,
        t211: item.t211,
        t212: item.t212,
        t212tx: item.t212tx,
      }
    });
    setData(newArr)
  }, [userTapleData_2]);

  useEffect(() => {
    let AllChecked = true;
    data.forEach((item) => {
      AllChecked = item.t212 && AllChecked;
    });
    if (AllChecked) {
      setAllChecked(AllChecked);
    }
  }, [data, setAllChecked])


  console.log('data', userTapleData_2)

  // const [data, setData] = useState(userTapleData_2);

  const onCheck = (e, rowId, selector) => {

    console.log('===>CHECK ', e.target.checked, rowId, selector)
    let newRow = data.find(row => row.id === rowId);
    // console.log("newRow", newRow)
    let nodeIndex = data.findIndex(row => row.id === rowId)
    newRow[selector] = e.target.checked;

    if (nodeIndex === data.length - 1) {
      for (let item in newRow) {
        if (item === selector) break;
        if (newRow[item] === false)
          newRow[item] = null;
      }
    }
    let newData = [...data]
    newData[nodeIndex] = newRow
    setData([...newData])

    let nextIndex = Object.keys(newRow).findIndex(item => item == selector) + 1;
    let nextSelector = Object.keys(newRow)[nextIndex];

    if (typeof newRow[nextSelector] !== "boolean") {
      // make an api call with new updated value
      let obj = {
        id: newRow.id,
        [nextSelector]: newRow[nextSelector],
        [selector]: newRow[selector]
      };

      console.log(obj)
    } else {
      // make an api call with new updated value
      let obj = {
        id: newRow.id,
        [selector]: newRow[selector]
      };
      console.log(obj)
    }
  }


  const onNumberChange = (e, rowId, selector) => {
    console.log('N===> ', e.target.value, rowId, selector)
    let newRow = data.find(row => row.id === rowId)
    let nodeIndex = data.findIndex(row => row.id === rowId)
    newRow[selector] = e.target.value
    let newData = [...data]
    newData[nodeIndex] = newRow
    setData([...newData])
  }

  const columns = [

    {
      name: 'T201',
      selector: row => <span style={{ cursor: "pointer" }} onDoubleClick={() => setAppear(true)}>{row.t201}</span>
    },
    {
      name: 'T203',
      selector: row => <span style={{ cursor: "pointer" }} onDoubleClick={() => setAppear(true)}>{row.t203}</span>
    },
    {
      name: 'T204',
      selector: row => row.t204,
      cell: (row) => <CheckInput rowID={row.id} id={'t204'} onChange={onCheck} check={row.t204} disabled={row.t204 || row.t204 == null} />
    },
    {
      name: 'T204',
      selector: row => row.t204tx,
      cell: (row) => <NumberInput rowID={row.id} id={'t204tx'} onChange={onNumberChange} row={row} value={row.t204tx} disabled={row.t204} />
    },

    {
      name: 'T205',
      selector: row => row.t205,
      cell: (row) => <CheckInput rowID={row.id} id={'t205'} onChange={onCheck} check={row.t205} disabled={row.t205 || row.t205 == null} />
    },
    {
      name: 'T206',
      selector: row => row.t206,
      cell: (row) => <CheckInput rowID={row.id} id={'t206'} check={row.t206} onChange={onCheck} row={row} value={row.t206} disabled={row.t206 || row.t206 == null} />
    },
    {
      name: 'T207',
      selector: row => row.t207,
      cell: (row) => <CheckInput rowID={row.id} id={'t207'} onChange={onCheck} check={row.t207} disabled={row.t207 || row.t207 == null} />
    },
    {
      name: 'T207',
      selector: row => row.t207tx,
      cell: (row) => <NumberInput rowID={row.id} id={'t207tx'} onChange={onNumberChange} row={row} value={row.t207tx} disabled={row.t207} />
    },
    {
      name: 'T208',
      selector: row => row.t208,
      cell: (row) => <CheckInput rowID={row.id} id={'t208'} onChange={onCheck} check={row.t208} disabled={row.t208 || row.t208 == null} />
    },
    {
      name: 'T209',
      selector: row => row.t209,
      cell: (row) => <CheckInput rowID={row.id} id={'t209'} onChange={onCheck} check={row.t209} disabled={row.t209 || row.t209 == null} />
    },
    {
      name: 'T209',
      selector: row => row.t209tx,
      cell: (row) => <NumberInput rowID={row.id} id={'t209tx'} onChange={onNumberChange} row={row} value={row.t209tx} disabled={row.t209} />
    },
    {
      name: 'T210',
      selector: row => row.t210,
      cell: (row) => <CheckInput rowID={row.id} id={'t210'} onChange={onCheck} check={row.t210} disabled={row.t210 || row.t210 == null} />
    },
    {
      name: 'T211',
      selector: row => row.t211,
      cell: (row) => <CheckInput rowID={row.id} id={'t211'} onChange={onCheck} check={row.t211} disabled={row.t211 || row.t211 == null} />
    },
    {
      name: 'T212',
      selector: row => row.t212,
      cell: (row) => <CheckInput rowID={row.id} id={'t212'} onChange={onCheck} check={row.t212} disabled={row.t212 || row.t212 == null} />
    },
    {
      name: 'T209',
      selector: row => row.t212tx,
      cell: (row) => <NumberInput rowID={row.id} id={'t212tx'} onChange={onNumberChange} row={row} value={row.t212tx} disabled={row.t212} />
    },

  ]
  return (
    <DataTable
      keyField="id"
      columns={columns}
      data={data}
    />
  )
}

export default TableDetailsUserTow;
