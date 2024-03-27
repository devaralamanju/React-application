import React from "react";

const InputField = ({ type, value, name, placeholder, label}) =>{
    return(
        <div className="from-group">
            <label htmlFor="input-field">{label}</label>
            <input
             type={type} 
             value={value}
             name={name}
             placeholder={placeholder}
             className="form-control"
             />
        </div>
    );
}

export default InputField;