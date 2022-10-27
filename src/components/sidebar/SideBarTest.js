import React from 'react'
import './sidebar.css'
function SideBarTest() {
  return (
    <div>
      <div>
        <div className="menu-container">
          <div classNameName="menu">
            <span classNameName="icon"><i className="fa fa-home" aria-hidden="true"></i></span>
            <a href="#"><span className="text">HOME</span></a>
          </div>
          <div className="menu">
            <span className="icon"><i className="fa fa-tachometer" aria-hidden="true"></i></span>
            <a href="#"><span className="text">DASHBOARD</span></a>
          </div>
          <div className="menu">
            <span className="icon"><i className="fa fa-address-book" aria-hidden="true"></i></span>
            <a href="#"><span className="text">ADDRESS BOOK</span></a>
          </div>
          <div className="menu">
            <span className="icon"><i className="fa fa-id-card" aria-hidden="true"></i></span>
            <a href="#"><span className="text">ID CARD</span></a>
          </div>
          <div className="menu">
            <span className="icon"><i className="fa fa-database" aria-hidden="true"></i></span>
            <a href="#"><span className="text">DATABASE</span></a>
          </div>
          <div className="menu">
            <span className="icon"><i className="fa fa-calendar" aria-hidden="true"></i></span>
            <a href="#"><span className="text">CALENDER</span></a>
          </div>
          <div className="menu">
            <span className="icon"><i className="fa fa-shopping-basket" aria-hidden="true"></i></span>
            <a href="#"><span className="text">SHOPPING</span></a>
          </div>
          <div className="menu">
            <span className="icon"><i className="fa fa-battery-half" aria-hidden="true"></i></span>
            <a href="#"><span className="text">BATTERY</span></a>
          </div>
          <div className="menu">
            <span className="icon"><i className="fa fa-camera" aria-hidden="true"></i></span>
            <a href="#"><span className="text">CAMERA</span></a>
          </div>
          <div className="menu">
            <span className="icon"><i className="fa fa-cogs" aria-hidden="true"></i></span>
            <a href="#"><span className="text">SETTING</span></a>
          </div>
        </div>
       </div>
    </div>
  )
}

export default SideBarTest