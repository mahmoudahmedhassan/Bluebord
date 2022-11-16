import React from 'react';
import classes from './index.module.css'
import egy from '../../assets/egypt.png'
import unitedstates from '../../assets/united-states.png'
import { useTranslation } from 'react-i18next';
// redux
import { useDispatch } from 'react-redux'
import { toggleSwitchAr, toggleSwitchEn } from '../../redux/toggledirction'
 function Lang() {
    
    const dispatch = useDispatch();
    const [t, i18n] = useTranslation();
    
    return (
        <div>
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
        </div>
    )
}

export default Lang