import React from "react";
import Button from "../ui/Button";
import Label from "../ui/Label";
import Input from "../ui/Input";
import { useParams } from "react-router-dom";

const ResetPassword = () => {

  const { email, token } = useParams();
  console.log(email, token);

  return (
    <>
      <div className="bg bg-slate-500 rounded-lg p-4 max-w-[600px]">
        <Label label="New-Password" htmlFor="newpassword" />
        <Input id="newpassword" type="password" placeholder="New-Password" />
        <Label label="Confirm-Password" htmlFor="confirmpassword" />
        <Input
          id="confirmpassword"
          type="password"
          placeholder="Confirm-Password"
        />
        <Button text="Reset-Password" />
      </div>
    </>
  );
};

export default ResetPassword;
