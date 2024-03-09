import React from "react";
import Label from "../ui/Label";
import Input from "../ui/Input";
import Button from "../ui/Button";

const ForgotPassword = () => {

const handleClick = () => {

}

  return (
    <>
      <div className="bg bg-slate-500 rounded-lg p-4 max-w-[600px]">
        <Label label="Email" htmlFor="email" />
        <Input id="email" type="email" placeholder="Email" />
        <Button text='Click to send Email' onClick={handleClick} />
      </div>
    </>
  );
};

export default ForgotPassword;
