import React,{useState,useRef,useContext,useEffect} from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Label from "../ui/Label";
import { Link,useNavigate,useLocation } from "react-router-dom";
import axios from '../../api/axios';
import AuthContext from '../../context/AuthContext';
import { validateEmail,validPwd } from "../../utils/validationsFrontend";
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const emailRef = useRef();
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const IsValidEmail = validEmail(email);
    const IsValidPassword = validPwd(pwd);

    if(!IsValidEmail && !IsValidPassword){
      toast.error("Invalid Entries");
      return;
    }
  }


  return (
    <>
    <ToastContainer />
      <div className="bg bg-slate-500 rounded-lg p-4 max-w-[600px]">
        <Label label="Email" htmlFor="email" />
        <Input id="email" type="email" placeholder="Email" />
        <Label label="Password" htmlFor="password" />
        <Input id="password" type="password" placeholder="Password" />
        <Button text="Login" />
        <p>
          Don't Have an account? Please <Link to="/register">Register</Link>
        </p>
        <p>
          Forgot your Password?{" "}
          <Link to="/forgotpassword">Please Click here</Link>{" "}
        </p>
      </div>
    </>
  );
};

export default Login;
