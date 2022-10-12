import React from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

function SidebarMenu (){
 
    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar>
          <Menu>
            <MenuItem> Documentation</MenuItem>
            <MenuItem> Calendar</MenuItem>
            <MenuItem> E-commerce</MenuItem>
          </Menu>
        </Sidebar>

      </div>
    );
  }
 
export default SidebarMenu