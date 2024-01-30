import React from 'react';

const Input = ({name,label,value,onChange,type,autofocus,error}) => {
    return (
        <div 
        style={{maxWidth:'50%',alignContent:'center',alignItems:'center'}}
        className="form-group">
            <label htmlFor={name}>{label}</label>
            <input name={name} value={value} onChange={onChange} type={type}
            id={name} className="form-control" autoFocus={autofocus} />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
      );
}
 
export default Input;