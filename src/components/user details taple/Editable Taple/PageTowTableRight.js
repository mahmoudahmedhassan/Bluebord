import { useState, useMemo, useEffect } from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import EditableTable from './EditableTable';
import { useSelector } from 'react-redux';

import DataTable from "react-data-table-component";

// const movies = [
//   {
//     id: 1,
//     title: "Conan the Barbarian",
//     year: "1982"
//   },
//   {
//     id: 2,
//     title: "Terminator",
//     year: "1984"
//   }
// ];
function findById(array, id) {
  return array.findIndex((d) => d.id === id);
}
function PageTowTableRight() {
  const { userTapleData, loading, error } = useSelector(state => state.UserTapleDataSlice);
  console.log(userTapleData)


  const [data, setData] = useState(userTapleData);
  useEffect(() => {
    setData(userTapleData)
  }, [userTapleData])
  // const columns = [
  //   {
  //     name: "Title",
  //     selector: (m) => m.title,
  //     // sortable: true,
  //     editKey: "title"
  //   },
  //   {
  //     name: "Year",
  //     selector: (m) => m.year,
  //     // sortable: true,
  //     editKey: "year"
  //   }
  // ];

  //   const columns = [

  //     {      
  //         selector: (m) => m.t201,
  //         editKey: "t201",
  //         name: 'T201',

  //         // validator: (newValue, row, column) => {
  //         //     if (isNaN(newValue)) {
  //         //         return {
  //         //             valid: false,
  //         //             message: 'Price should be numeric'
  //         //         };
  //         //     }
  //         //     return true;

  //         // }
  //     },
  //     {
  //       selector: (m) => m.t202,
  //       editKey: "t202",
  //       name: 'T202',

  //     },
  //     {
  //       selector: (m) => m.t203,
  //       editKey: "t203",
  //       name: 'T203',

  //         // validator: (newValue, row, column) => {
  //         //     if (isNaN(newValue)) {
  //         //         return {
  //         //             valid: false,
  //         //             message: 'Price should be numeric'
  //         //         };
  //         //     }
  //         //     return true;

  //         // }
  //     },
  //     {
  //       selector: (m) => m.t204,
  //       editKey: "t204",
  //       name: 'T204',

  //         // validator: (newValue, row, column) => {
  //         //     if (isNaN(newValue)) {
  //         //         return {
  //         //             valid: false,
  //         //             message: 'Price should be numeric'
  //         //         };
  //         //     }
  //         //     return true;
  //         // }
  //     },
  //     {
  //       selector: (m) => m.t205,
  //       editKey: "t205",
  //       name: 'T205',

  //         // validator: (newValue, row, column) => {
  //         //     if (isNaN(newValue)) {
  //         //         return {
  //         //             valid: false,
  //         //             message: 'Price should be numeric'
  //         //         };
  //         //     }
  //         //     return true;
  //         // }
  //     },
  // ];

  const columns = useMemo(() => {
    const handleTitleEditable = (field) => (row) => (e) => {
      const newRow = { ...row };
      newRow[field] = e.target.innerText;

      const newData = data.slice(0);

      newData[findById(data, row.id)] = newRow;
      // update your data model here in state, POST or whatever
      // this will re-render and update the data that is passed to DataTable
      setData(newData);
    };

    return [
      {
        id: 1,
        name: "T201",
        selector: (row) => row.t201,
        // sortable: true,
        reorder: true,
        cell: (row) => (
          <div
            contentEditable
            suppressContentEditableWarning={true}
            onBlur={handleTitleEditable("t201")(row)}
          >
            {row.t201}
          </div>
        )
      },
      {
        id: 2,
        name: "T202",
        selector: (row) => row.t202,
        // sortable: true,
        reorder: true,
        cell: (row) => (
          <div
            contentEditable
            suppressContentEditableWarning={true}
            onBlur={handleTitleEditable("t202")(row)}
          >
            {row.t202}
          </div>
        )
      },
      {
        id: 3,
        name: "T203 (m)",
        selector: (row) => row.t203,
        // sortable: true,
        right: true,
        reorder: true,
        cell: (row) => (
          <div
            contentEditable
            suppressContentEditableWarning={true}
            onBlur={handleTitleEditable("t203")(row)}
          >
            {row.t203}
          </div>
        )
      }
    ];
  }, [data]);

  return (
    <DataTable
      columns={columns}
      data={data}
      defaultSortFieldId={1}
    // sortIcon={<SortIcon />}
    // pagination
    // selectableRows
    />
  );
}

export default PageTowTableRight;
