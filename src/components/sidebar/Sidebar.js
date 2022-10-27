import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { FaUser, FaRegSun } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { RiDashboardFill,RiPagesFill } from "react-icons/ri";

import { NavLink } from "react-router-dom";
import logo from '../../assets/Sg.ico'
import "./sidebar.css";
import { useSelector } from 'react-redux'
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'

function SidebarMenu() {
  const { rtl } = useProSidebar();
  // let lng = localStorage.getItem("xx-l");
  const { dirction } = useSelector(state => state.dirction);
  const dir = dirction && rtl;
  let activeStyle = {
     color: "#000"
  };
  return (
    <PerfectScrollbar>
      <div className="sidebar" style={{ display: 'flex', minHeight: '100vh', }}>

        <Sidebar
          backgroundColor="#222E3C"
          className="sidebar-container"
          width='200px'
        >
          <Menu>
            <p className="logo"> <img src={logo} alt='logo' height='50px' /> </p>
            
            <MenuItem icon={<RiDashboardFill />}><NavLink to='./'><span style={{ color: '#fff' }}>Main page</span> </NavLink> </MenuItem>
            <SubMenu icon={<RiPagesFill />} label="Grop-1">
              <NavLink to='./entryData' style={({ isActive }) =>
                isActive ? activeStyle : undefined}
              > <MenuItem>Grop-1 page01
              </MenuItem></NavLink>
              <NavLink to='./userDetails'> <MenuItem> Grop-1 page02 </MenuItem></NavLink>
              <NavLink to='./userDetails_2'> <MenuItem>  Grop-1 page03 </MenuItem></NavLink>
            </SubMenu>

            <SubMenu icon={<FaRegSun />} label="Maps">
              <MenuItem> Google maps</MenuItem>
              <MenuItem> Open street maps</MenuItem>
            </SubMenu>
            <SubMenu icon={<BiLogOut />} label="Theme">
              <MenuItem> Dark </MenuItem>
              <MenuItem> Light </MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>

      </div>
    </PerfectScrollbar>
  );
}

export default SidebarMenu