import React, { useEffect, useState, useRef } from 'react'
import classes from './printmodal.module.css';
import { useReactToPrint } from 'react-to-print';
import SpinnerLoading from '../../components/sppiner/Sppiner';

function Table({ dataTable, loading }) {
    console.log(dataTable)
 
    const TH = ['Sd', 'T102', 'T103', 'T105','T104', 'T111','T107', 'T108', 'T110',  ]

    // SD,T102,T103,T105 T106,T104,T111,T107,T108,T110
// print

const componentRef = useRef();
const handlePrint = useReactToPrint({
    content: () => componentRef.current,
});
    return (


        <div className={classes.table} ref={componentRef}>
            <button onClick={handlePrint}>print</button>
            {loading ? (<SpinnerLoading/>) : (
                <>
                    <div className={classes.date_print}> report form : <span>2022-08-12 08:00 AM</span> <span>2022-08-12 08:00 AM</span></div>

                    <taple>
                        <tr className={classes.TR}>
                            {
                                TH.map(((el, index) => (
                                    <th className={classes.TH} key={index}>{el}</th>
                                )))
                            }
                        </tr>
                        {dataTable &&
                            dataTable.map((el, index) => {
                                const { sd, t102, t103, t104, t105, t106, t107, t108,t110,t111} = el
                                return (

                                    <tr>
                                        <td className={classes.TD}>
                                            {sd}
                                        </td>

                                        <td>
                                            {t102}
                                        </td>
                                        <td>
                                            {t103}
                                        </td>

                                        <td>
                                            {t105} X {t106}

                                        </td>
                                        <td>
                                            {t104}
                                        </td>
                                        <td>
                                            {t111}
                                        </td>

                                        <td>
                                            {t107}
                                        </td>
                                        <td>
                                            {t108}
                                        </td>
                              
                                        <td>
                                            {t110}
                                        </td>

                                    </tr>
                                )
                            })
                        }
                    </taple>
                </>

            )}


        </div>
    )
}

export default Table