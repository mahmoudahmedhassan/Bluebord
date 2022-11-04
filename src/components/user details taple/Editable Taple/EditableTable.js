import React, { ReactText, useRef, useState } from "react";
import DataTable, { TableColumn, TableProps } from "react-data-table-component";


const getDataFromSelector =(
  row,
  rowIndex,
  col
) => {
  if (!col.selector) {
    return "";
  } else if (typeof col.selector !== "function") {
    // the ReactDataTable API allows the use of a string as the selector
    // but has deprecated it. We will disallow it.
    throw new Error("selector must be a a function (e.g. row => row.field");
  } else {
    return col.selector(row, rowIndex) ;
  }
};

/**
 * A basic EditableCell for a ReactDataTable. Assumptions are made
 * around the type of the data in the cell, namely that it is
 * string data.
 */
const EditableCell = ({
  row,
  rowIndex,
  col,
  onChange,
  columnKey
}) => {
  const [value, setValue] = useState(
    getDataFromSelector(row, rowIndex, col)
  );
  const [editing, setEditing] = useState(false);

  const onBlur = () => {
    onChange(row, columnKey, value);
    setEditing(false);
  };

  if (editing) {
    return (
      <input
        autoFocus
        data-tag="allowRowEvents"
        type={"text"}
        className="form-control"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onBlur={onBlur}
        value={value}
      />
    );
  }

  return (
    <div className="editable-table-cell" onClick={() => setEditing(true)}>
      {getDataFromSelector(row, rowIndex, col)}
    </div>
  );
};



// adding this to see about hacking in a work around
const EditableTable =(props) => {
  const [selected, setSelected] = useState(new Set());
  const [toggleCleared, setToggleCleared] = useState(false);
  const newId = useRef(-1);

  // const deleteSelected = () => {
  //   const d = props.data.filter((a) => !selected.has(a.id));
  //   setSelected(new Set());
  //   setToggleCleared(!toggleCleared);
  //   props.update(d);
  // };

  // const add = () => {
  //   const d = [...props.data];
  //   d.push({
  //     ...props.createEmpty(),
  //     id: newId.current
  //   });
  //   newId.current = newId.current - 1;
  //   props.update(d);
  // };

  const update = (m, field, value) => {
    const editData = { ...m, [field]: value };
    const d = props.data.map((d) => (d.id === editData?.id ? editData : d));
    props.update(d);
  };

  const onSelectionChange = (selected) => {
    const selection = new Set(selected.selectedRows.map((r) => r.id));
    setSelected(selection);
  };

  // const contextActions = (
  //   <>
  //     <button key="delete" onClick={deleteSelected}>
  //       Delete
  //     </button>
  //   </>
  // );

  const editCell = (
    row,
    rowIndex,
    column,
    id
  ) => {
    return (
      <EditableCell
        row={row}
        col={column}
        rowIndex={rowIndex}
        onChange={update}
        columnKey={column.editKey}
      />
    );
  };

  const editableColumns = () => {
    return props.columns.map((col) =>
      col.editKey ? { ...col, cell: editCell } : col
    );
  };

  return (
    <DataTable
      {...props}
      columns={editableColumns()}
      data={props.data}
      selectableRows
      onSelectedRowsChange={onSelectionChange}
      clearSelectedRows={toggleCleared}
      // actions={<button onClick={add}>Add New</button>}
      // contextActions={contextActions}
    />
  );
};

export default EditableTable;