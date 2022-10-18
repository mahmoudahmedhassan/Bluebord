import React from "react";
import './Breadcrumbs.css'
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Breadcrumbs = (props) => {
    const { t } = useTranslation();
    return (
        <div className="breadcrumb-container">
            <h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"> {t(props.main)}</li>
                        {props?.sub ? <li className="breadcrumb-item"> {t(props?.sub)}</li> : null}
                        {props?.subLink}
                        {/* <li className="breadcrumb-item" style={{ "color": '#1e88e5' }}> {t(props.subSub)}</li> */}
                    </ol>
                </nav>

            </h3>
        </div>
    );
};

export default Breadcrumbs;
