import React, { useEffect, useState } from 'react'
import classes from './header.module.css';

import saudiFlag from '../../pages/auth/login/assets/saudi-arabia.png';
import unitedFlag from '../../pages/auth/login/assets/united-kingdom.png';

import Dropdown from 'react-bootstrap/Dropdown';
import { FaUser, FaRegSun } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

import i18n from 'i18next';

import { useTranslation } from 'react-i18next';

import { useProSidebar } from 'react-pro-sidebar';
// redux
import { useDispatch, useSelector } from 'react-redux'
import {openSidebar} from '../../redux/togglesidebar'

function Header() {
    const dispatch = useDispatch();
    const {toggle} = useSelector(state => state.toggle);

    const [t, i18n] = useTranslation();

    const { collapseSidebar } = useProSidebar();

    const toggleSidebarButton = () => {
        collapseSidebar();
        dispatch(openSidebar());
    }

    console.log(toggle)


    const UserDropdown = (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic"   >
                    User
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1"><FaUser /> <span>{t("profile")} </span></Dropdown.Item>
                    <Dropdown.Item href="#/action-2"><FaRegSun /> <span>{t("settings")}</span></Dropdown.Item>
                    <Dropdown.Item href="#/action-3"><BiLogOut /><span> {t("logout")}</span></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
    return (
        <div className={classes.header}>
            <div className={classes.logo}>
                logo
                <main>
                    <button onClick={toggleSidebarButton}>Cole</button>
                </main>
            </div>

            <div className={classes.user} >
                <div className={classes.lang}>
                    {
                        i18n.language === 'en' ? (
                            <img src={saudiFlag}
                                alt='ar'
                                height="30px"
                                onClick={() => { i18n.changeLanguage('ar') }}
                            />
                        ) : (
                            <img src={unitedFlag}
                                alt='en'
                                height="30px"
                                onClick={() => { i18n.changeLanguage('en') }}
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