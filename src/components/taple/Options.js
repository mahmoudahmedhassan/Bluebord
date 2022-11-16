import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TableModal from './TableModal';
import { useSelector, useDispatch } from 'react-redux';

const options = [
  'data-1',
  'data-2',
];

const ITEM_HEIGHT = 30;

export default function Options({ id }) {
  const [lgShow, setLgShow] = useState(false);

  const { Show } = useSelector(state => state.stateOfMainTable)
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [rowId, setRowId] = useState()

  //   const handleChange =(e)=>{
  //     setRowId(e.target.value)

  //   }
  const handelOptionOne = () => {
    setLgShow(true)
    handleClose()
  }
  const handelOptionTow = () => {
    setLgShow(true)
    handleClose()
  }


  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      // onChange={handleChange}
      >
        <MenuItem onClick={handelOptionOne}>
          option-1
        </MenuItem>
        <MenuItem onClick={handelOptionTow}>
          option-2
        </MenuItem>
      </Menu>
      <TableModal setLgShow={setLgShow} lgShow={lgShow} />
    </div>
  );
}
