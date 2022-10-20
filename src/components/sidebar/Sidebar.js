import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { FaUser, FaRegSun } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { NavLink } from "react-router-dom";

import "./sidebar.css";
import { useSelector } from 'react-redux'

function SidebarMenu() {
  const { rtl } = useProSidebar();
  // let lng = localStorage.getItem("xx-l");
  const { dirction } = useSelector(state => state.dirction);
  const dir = dirction && rtl;

  return (
    <div
      className="sidebar"

      style={{ display: 'flex', minHeight: '100vh', }
      }>
      <Sidebar backgroundColor="#4B77BE" dir >
        <Menu>
          <p className="logo">logo</p>
             <MenuItem ><NavLink  to='./'><span style={{color:'#fff'}}>Main page</span> </NavLink> </MenuItem>
          <SubMenu icon={<FaUser />} label="Grop-1">
            <MenuItem><NavLink to='./entryData'> Grop-1 page01 </NavLink></MenuItem>
            <MenuItem> Grop-1 page02</MenuItem>
            <MenuItem> Grop-1 page03</MenuItem>
          </SubMenu>
          <SubMenu icon={<FaUser />} label="Maps">
            <MenuItem> Google maps</MenuItem>
            <MenuItem> Open street maps</MenuItem>
          </SubMenu>
          <SubMenu icon={<FaUser />} label="Theme">
            <MenuItem> Dark</MenuItem>
            <MenuItem> Light</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>

    </div>
  );
}

export default SidebarMenu