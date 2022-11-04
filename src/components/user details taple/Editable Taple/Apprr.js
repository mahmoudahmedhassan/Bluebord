import React, { ReactText, useRef, useState, useEffect } from "react";
import { useSelector } from 'react-redux';

import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import EditableTable from './EditableTable';

const dataTable = [
  {
    id: 1,
    t101: "20-027-22-1150-8 ",
    t102: "Cn 35114Cn 35114Cn 35114 ",

  },
  {
    id: 2,
    t101: "20-027-22-1148-8 ",
    t102: "Cn 35113Cn 35113Cn 35113 ",

  },
  {
    id: 3,
    t101: "20-059-22-1451-7",
    t102: "Cn 35112Cn 35112Cn 35112 ",

  },
  {
    id: 4,

    t101: "",
    t102: "Cn 35111Cn 35111Cn 35111 ",

  },
];


function Test({logDataTable}) {
  const { userTapleData, loading, error } = useSelector(state => state.UserTapleDataSlice);
  console.log(userTapleData);

  const [data, setData] = useState(userTapleData);
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
    setData(newArr)
  }, [userTapleData])

useEffect(() => {
  logDataTable(data)
}, [data,logDataTable])

  const columns = [
    {
      name: "T201",
      selector: (m) => m.t201,
      editKey: "t201"
    },
    {
      name: "T202",
      selector: (m) => m.t202,
      editKey: "t202"
    },
    {
      name: "T203",
      selector: (m) => m.t203,
      editKey: "t203"
    },
    {
      name: "T204",
      selector: (m) => m.t204,
      editKey: "t204"
    },
    {
      name: "T205",
      selector: (m) => m.t205,
      editKey: "t205"
    }
    ];
  


  console.log('data',data);

  return (
    <EditableTable
      columns={columns}
      data={data}
      // createEmpty={() => ({ id: 0, title: "", year: "" })}
      update={setData}
    />
  );
}

export default Test;
