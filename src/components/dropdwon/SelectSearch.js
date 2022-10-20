import {React,useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form';

function SelectSearch({setSelection,selected}) {

     const handleSlectChange =(e)=>{
        setSelection(e.target.value);
    }
    return (
        <div>
            <Form.Select aria-label="Floating label select example" value={selected} onChange={handleSlectChange}>
                <option>Open this select menu</option>
                <option value="oj">oj</option>
                <option value="odt">odt</option>
                <option value="ofn">ofn</option>
            </Form.Select>
        </div>
    )
}

export default SelectSearch