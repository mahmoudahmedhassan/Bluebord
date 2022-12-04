import React from 'react'
import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenuf";
import { useSelector } from 'react-redux';
import logo from '../../assets/Sg.ico'

const routes = [
    {
        path: "/",
        name: "Dashboard",
        icon: <FaHome />,
    },
    {
        name: "Grop-1",
        icon: <FaUser />,
        subRoutes: [
            {
                path: "entryData",
                name: "Grop-1 page01 ",
                icon: <FaUser />,
            },
            {
                path: "/entryDataTow",
                name: "Grop-1 page01",
                icon: <FaLock />,
            },
        
        ],
    },
    {
        path: "/userDetails",
        name: "Grop-2",
        icon: <MdMessage />,
    },
    {
        path: "/userDetails_2",
        name: "Grop-3",
        icon: <BiAnalyse />,
    },
    
    {
        path: "/pg06",
        name: "Grop-4",
        icon: <BsCartCheck />,
    },
    {
        path: "./pg07",
        name: "Grop-5",
        icon: <AiFillHeart />,
    },
    {
        path: "./pg08",
        name: "Grop-6",
        icon: <AiFillHeart />,
    },
    {
        path: "./pg09",
        name: "Grop-7",
        icon: <AiFillHeart />,
    },
 
    {
        path: "/settings",
        name: "Grop-3",
        icon: <BiCog />,
        exact: true,
        subRoutes: [
            {
                path: "/settings/profile",
                name: "Profile ",
                icon: <FaUser />,
            },
            {
                path: "/settings/2fa",
                name: "2FA",
                icon: <FaLock />,
            },
            {
                path: "/settings/billing",
                name: "Billing",
                icon: <FaMoneyBill />,
            },
        ],
    },

];

function SideBarMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const { witchSidebar } = useSelector(state => state.switchSidebar);

    const toggle = () => setIsOpen(!isOpen);

    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        show: {
            opacity: 1,
            width: "auto",
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <div>
            <div className="main-container">
                <motion.div
                    animate={{
                        width: !witchSidebar ? "200px" : "50px",

                        transition: {
                            duration: 0.5,
                            type: "spring",
                            damping: 10,
                        },
                    }}
                    className={`sidebar `}
                >
                    <div className="top_section">
                        <AnimatePresence>
                            {!witchSidebar && (
                                <motion.p
                                    variants={showAnimation}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    className="logo"
                                >
                                   <img src={logo} alt='logo' height='50px' />  
                                </motion.p>
                            )}
                        </AnimatePresence>

                        {/* <div className="bars">
                            <FaBars onClick={toggle} />
                        </div> */}
                    </div>

                    <section className="routes">
                        {routes.map((route, index) => {
                            if (route.subRoutes) {
                                return (
                                    <SidebarMenu
                                        setIsOpen={setIsOpen}
                                        route={route}
                                        showAnimation={showAnimation}
                                        isOpen={isOpen}
                                    />
                                );
                            }

                            return (
                                <NavLink
                                    to={route.path}
                                    key={index}
                                    className="link"
                                    activeClassName="active"
                                >
                                    <div className="icon">{route.icon}</div>
                                    <AnimatePresence>
                                        {!witchSidebar && (
                                            <motion.div
                                                variants={showAnimation}
                                                initial="hidden"
                                                animate="show"
                                                exit="hidden"
                                                className="link_text"
                                            >
                                                {route.name}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </NavLink>
                            );
                        })}
                    </section>
                </motion.div>

            </div>
        </div>
    )
}

export default SideBarMenu