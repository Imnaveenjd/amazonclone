import React from 'react'
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import {auth} from './firebase';

function Signup() {
  const navigate = useNavigate ();
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  const register=e=>{
    e.preventDefault();

    auth
    .createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
    
      if(auth){
        navigate('/')
      }

    })
    .catch(error=>alert(error.message))
  }





  return (

    <div className='login'>
      <Link to ='/'>
          <img 
          className='login__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'>
          </img>
      </Link>

    <div className='signup'>

      <div className='signup__containner'>
        <h1>Create Account</h1>
        <form>
          <h5>E-mail</h5>
          <input type='text'value={email} onChange={
            e=>setEmail(e.target.value)}/>
          <h5>password</h5>
          <input type='text'value={password} onChange={
            e=>setPassword(e.target.value)}/>
          <button variant="outlined" onClick={register}
        className='signup__registerButton'
        >Signup</button>

        </form>
        <div className='login__para'>
        <p>By continuing, you agree to Amazone's Conditions of
           Use and Privacy Notice</p>
        </div>
       

        <div className="divider__break">
          <h5> <center>  </center>

          </h5>
        </div>
        <p>
					Already Have an account?
						<span><a href='/Login'>signIn</a></span>
				</p>

        
      </div>
      <div className="login__bottom">
          <h6  style={{color: 'gray'}}><center> © 1996-2022, Amazon.com, Inc. or its affiliates</center></h6>
        </div>
    
    </div>
    </div>


  )
}

export default Signup