import React from 'react';
import { ErrorMessage, useField } from 'formik';
import { BiErrorCircle } from "react-icons/bi";

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <input
        className={` form_input ${meta.touched && meta.error && 'is-invalid'} ${props.password && "input_email"} `}
        {...field} {...props}
        autoComplete="off"
      />
      {meta.touched && meta.error && <BiErrorCircle className="opps" />}

      <ErrorMessage component="div" name={props.name} className="error" />
    </div>
  )
}

// export const TextFieldTest = ({ label, ...props }) => {
//   const [field, meta] = useField(props);
//   return (
//     <div className="mb-2">


//       <InputGroup className="mb-3">
//         <InputGroupAddon addonType="prepend">
//           <InputGroupText>
//             <i className="ti-user"></i>
//           </InputGroupText>
//         </InputGroupAddon>

//         <Field
//           name="userName"
//           autocomplete="off"
//           type="text"
//           className={` form_input ${meta.touched && meta.error && 'is-invalid'} ${props.email && "input_email"} `}
//         />
//       </InputGroup>
//       {meta.touched && meta.error && <BiErrorCircle className="opps" />}

//       <ErrorMessage component="div" name={props.name} className="error" />
//     </div>
//   )
// }


 