import React from "react";

const Input = ({ placeholder, id, type,classes,onChange,value }) => {
  return <input className={`w-full rounded-lg block mb-2 ${classes}`} placeholder={placeholder} value={value} id={id} type={type} onChange={onChange} />;
};

export default Input;
