import React, { useState } from 'react'
import classes from './header.module.css';
import AccountMenu from '../../components/profile menu/ProfileMenu'

import egy from '../../assets/egypt.png'
import unitedstates from '../../assets/united-states.png'
import { FaBars } from "react-icons/fa";
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { useProSidebar } from 'react-pro-sidebar';
// redux
import { useDispatch } from 'react-redux'
import { toggleSwitchAr, toggleSwitchEn } from '../../redux/toggledirction'
import { switerSidebar } from '../../redux/switchSidebar'

import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [t, i18n] = useTranslation();

    const [openSidebar, setOpenSidebar] = useState(true);
    const { collapseSidebar } = useProSidebar();

    const toggleSidebarButton = () => {
        collapseSidebar();
        setOpenSidebar(!openSidebar)
        dispatch(switerSidebar(openSidebar)) 
    }

    const UserDropdown = (
        <>
            <AccountMenu />
        </>
    )
    return (
        <div className={classes.header}>

            <div className={classes.user} >
                <div className={classes.lang}>
                    {
                        i18n.language === 'ar' ? (
                            <img src={unitedstates}
                                alt='ar'
                                height="30px"
                                onClick={() => {
                                    i18n.changeLanguage('en');
                                    dispatch(toggleSwitchAr('en'))
                                }}
                            />
                        ) : (
                            <img src={egy}
                                alt='en'
                                height="30px"
                                onClick={() => {
                                    i18n.changeLanguage('ar');
                                    dispatch(toggleSwitchEn('ar'))
                                }}
                            />
                        )
                    }

                </div>
                <div className={classes.UserDropdown}>{UserDropdown}</div>
            </div>
            <div className={classes.menubar}>
                <button onClick={toggleSidebarButton}><FaBars /></button>
            </div>
        </div>
    )
}

export default Header