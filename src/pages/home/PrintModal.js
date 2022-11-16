import React, { useState,useEffect,useMemo,useRef } from 'react';
import classes from './printmodal.module.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Table from './Table';
import { useReactToPrint } from 'react-to-print';

 
function PrintModal() {
    // modal 
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }
// print

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    // table data
    const [loading,setLoading]= useState(true);
    const [dataTable,setDataTable] = useState([]);
 
    useEffect(() => {
        const fetchdataTable = async () => {
          const result = await axios(
            'https://tstauth.smartgate-egypt.com/jobs/GetDashPrint',
          );
          setLoading(false)
          setDataTable(result.data);
        };
        fetchdataTable();
      }, []);

    return (
        <div>

            <Button className="me-2 mb-2" onClick={()=>handleShow(true)}>
                Print  
            </Button>
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal</Modal.Title>
                </Modal.Header>
         
                <Modal.Body >
                    <div className={classes.Table_container}>
                        <Table dataTable={dataTable} loading={loading} ref={componentRef}/>
                    </div>
                    
                </Modal.Body>
            </Modal>

        </div >
    )
}

export default PrintModal