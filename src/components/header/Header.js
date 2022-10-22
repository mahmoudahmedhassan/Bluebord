import React, { useEffect, useState } from 'react'
import classes from './header.module.css';

import saudiFlag from '../../pages/auth/login/assets/saudi-arabia.png';
import unitedFlag from '../../pages/auth/login/assets/united-kingdom.png';

import Dropdown from 'react-bootstrap/Dropdown';
import { FaUser, FaRegSun, FaBars } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

import i18n from 'i18next';

import { useTranslation } from 'react-i18next';

import { useProSidebar } from 'react-pro-sidebar';
// redux
import { useDispatch, useSelector } from 'react-redux'
import { toggleSwitchAr, toggleSwitchEn } from '../../redux/toggledirction'
import { switerSidebar } from '../../redux/switchSidebar'

import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { users} = useSelector(state => state.users)

    const [t, i18n] = useTranslation();

    const [openSidebar, setOpenSidebar] = useState(true);
    const { collapseSidebar } = useProSidebar();
    const toggleSidebarButton = () => {
        collapseSidebar();
        setOpenSidebar(!openSidebar)
        dispatch(switerSidebar(openSidebar))
    }

    const logOut =()=>{
        localStorage.removeItem("current-user");
        window.location.reload();
        localStorage.removeItem('access-token');
        navigate('/');
    }
   
    const UserDropdown = (
        <>
            <Dropdown right>
                <Dropdown.Toggle variant="success" id="dropdown-basic"   >
                {users && users.email}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1"><FaUser /> <span>{users && users.username} </span></Dropdown.Item>
                    <Dropdown.Item href="#/action-2"><FaRegSun /> <span>{t("settings")}</span></Dropdown.Item>
                    <Dropdown.Item href="#/action-3" onClick={logOut}><BiLogOut /><span > {t("logout")}</span></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            {/* <nav>
                <ul>
                    <li> Style 1
                        <ul className={`${classes.drop_menu} ${classes.menu_1}`}>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum.</li>
                        </ul>
                    </li>
                </ul>
            </nav> */}
        </>
    )
    return (
        <div className={classes.header}>
            <div className={classes.menubar}>
                <button onClick={toggleSidebarButton}><FaBars /></button>
            </div>

            <div className={classes.user} >
                <div className={classes.lang}>
                    {
                        i18n.language === 'en' ? (
                            <img src={saudiFlag}
                                alt='ar'
                                height="30px"
                                onClick={() => {
                                    i18n.changeLanguage('ar');
                                    dispatch(toggleSwitchAr('ar'))
                                }}
                            />
                        ) : (
                            <img src={unitedFlag}
                                alt='en'
                                height="30px"
                                onClick={() => {
                                    i18n.changeLanguage('en');
                                    dispatch(toggleSwitchEn('en'))
                                }}
                            />
                        )
                    }

                </div>
                <div className={classes.UserDropdown}>{UserDropdown}</div>
            </div>
        </div>
    )
}

export default Header