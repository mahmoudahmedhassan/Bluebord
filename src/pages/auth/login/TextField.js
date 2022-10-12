import React from 'react';
import { ErrorMessage, useField } from 'formik';
import { BiErrorCircle } from "react-icons/bi";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">

      {/* <input
        className={` form_input ${meta.touched && meta.error && 'is-invalid'} ${props.password && "input_email"} `}
        {...field} {...props}
        autoComplete="off"
      /> */}

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          {props.password? (<RiLockPasswordLine/>):(<FaUserAlt/>)}
        </InputGroup.Text>
        <Form.Control
        {...field} {...props}
        // aria-label="Username"
          aria-describedby="basic-addon1"
          className={` ${meta.touched && meta.error && 'is-invalid'} `}
        />
      </InputGroup>
      {meta.touched && meta.error && <BiErrorCircle className="opps" />}

      <ErrorMessage component="div" name={props.name} className="error" />
    </div>
  )
}
 