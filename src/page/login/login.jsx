import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import { useForm } from "react-hook-form";
import authService from "../../service/user.service";

import './Login.scss'

const Login = () => {
  const navigate = useNavigate()
  const [message,setMessage]=useState()
  const { register, handleSubmit, formState: { errors } } = useForm({mode: 'onBlur'});
  const onSubmit = data => {
    const username=data.username;
    const password=data.password;
    authService.login(username, password).then(
      () => {
        navigate("/homepage")
        window.location.reload();
      }, (error) => {
        const resMessage =
                  (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                  error.message  ||
                  error.toString();
        setMessage(resMessage)
      }
    )
  }
  return (

   <div className="login">
      <div className="container">
        <div className="wrapper">
          <h1 className="title"><b>SIGN IN</b></h1>

          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <input 
            className="input" 
            name="username"
            placeholder="username"
            type="text"
            {...register("username", {
              required: "Usename is required"
            } )} >
            </input>
            {errors.username && (<small className="notion-text"> {errors.username.message}</small>)}
            <input
            className="input"
            placeholder="password"
            name="password" 
            type="password" 
            {...register("password",{
              minLength:{
                value:8,
                message: "Password must be between 8 character and 20 character"
              },
              maxLength:{
                value: 20,
                message: "Password must be between 8 character and 20 character "
              },
              required: "Password is required"
            })}
            >
            </input>
            {errors.password && (<small className="notion-text"> {errors.password.message}</small>)}
            {message && (
                      <div className="error-login">
                          <div role="alert"
                          >
                          {message}
                          </div>
                      </div>
            )}
            <button className="button">LOGIN</button>
  
            <Link className="link">DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link className="link" to='/register'>CREATE A NEW ACCOUNT</Link>
          </form>

        </div>
      </div>
   </div >
  );
};

export default Login;
