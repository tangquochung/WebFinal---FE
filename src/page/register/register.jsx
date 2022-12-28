import './Register.scss'
import authService from "../../service/user.service";
import { useForm } from "react-hook-form";
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';

const Register = () => {
  const [message,setMessage]=useState()
  const { register, handleSubmit, formState: { errors } } = useForm({mode: 'onBlur'});
  const navigate = useNavigate()

  const onSubmit = data => {
    const firstname=data.firstname;
    const lastname=data.lastname;
    const email=data.email;
    const username=data.username;
    const password=data.password;
    authService.register(firstname, lastname, email, username, password).then(
      () => {
        window.alert("Register Successed!")
        navigate("/login")
      }, (error) => {
        const resMessage =
                  (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                  error.message  ||
                  error.toString();
        setMessage(resMessage)
      })
    }

  return (
    <div className="register">
      <div className="container">
        <div className="wrapper">
          <h1 className="title"><b>CREATE AN ACCOUNT</b></h1>

          <form className="form" onSubmit={handleSubmit(onSubmit)}>

            <input 
            className="input" 
            placeholder="name"
            type="text" 
            {...register("firstname",{
              required: "First name is required"
            })}
            >
            </input>
            {errors.firstname && (<small className="notion-text"> {errors.firstname.message}</small>)}

            <input 
            className="input" 
            placeholder="last name"
            type="text"
            {...register("lastname",{
              required: "Last name is required"
            })} >
            </input>
            {errors.lastname && (<small className="notion-text"> {errors.lastname.message}</small>)}

            <input 
            className="input" 
            placeholder="username" 
            type="text"
            {...register("username",{
              required: "Usename is required"
            })} >
            </input>
            {errors.username && (<small className="notion-text"> {errors.username.message}</small>)}    

            <input 
            className="input" 
            placeholder="email" 
            type="text"
            {...register("email",{
              required: "Email is required",
              pattern:{
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "This is not valid email"
              }
            })} ></input> 
            {errors.email && (<small className="notion-text"> {errors.email.message}</small>)}

            <input 
            className="input" 
            placeholder="password"
            type="password"
            {...register("password",{
              minLength: {
                value: 8,
                message: "Password must be between 8 character and 20 character"
              },
              maxLength: {
                value: 20,
                message: "Password must be between 8 character and 20 character "
              },
              required: "Password is required"
            })} ></input>
            
            <input className="input" placeholder="confirm password" type="password"/>
            <span className="Agreement">
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </span>
            {message && (
                      <div className="error-login">
                          <div role="alert"
                          >
                          {message}
                          </div>
                      </div>
            )}

            <button className="button">CREATE</button>
          </form>
        </div>
      </div>
    </div >
  );
};

export default Register;
