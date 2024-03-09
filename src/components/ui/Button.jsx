import React from "react";

const Button = ({ text, onClick,classes }) => {
  return <button className={`w-full rounded-[12px] bg bg-black text-white p-4 ${classes}`} onClick={onClick}>{text}</button>;
};

export default Button;
