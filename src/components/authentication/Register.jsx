import React from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Label from "../ui/Label";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="bg bg-slate-500 rounded-lg p-4 max-w-[600px]">
        <Label label="Name" htmlFor="name" />
        <Input id="name" type="text" placeholder="Name" />
        <Label label="Email" htmlFor="email" />
        <Input id="email" type="email" placeholder="Email" />
        <Label label="Password" htmlFor="password" />
        <Input id="password" type="password" placeholder="Password" />
        <Button text="Register" />
        <p>Already have an account ? <Link to='/login'>Login</Link></p>
      </div>
    </>
  );
};

export default Register;
