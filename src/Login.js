import React from 'react'
import './Login.css'


import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import {auth} from './firebase';


function Login() {
  const navigate = useNavigate ();
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  

  const signIn=e=>{
    e.preventDefault();

    auth

      .signInWithEmailAndPassword(email,password)
      .then(auth=>{
        navigate('/')
  })
  .catch(error=>alert(error.message))


  };
  return (
    <div className='login'>
      <Link to ='/'>
          <img 
          className='login__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'>
          </img>
      </Link>

      <div className='login__containner'>
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type='text'value={email} onChange={
            e=>setEmail(e.target.value)}/>
          <h5>password</h5>
          <input type='text'value={password} onChange={
            e=>setPassword(e.target.value)}/>
          <button type='sumbit' onClick={signIn}
          className='login__signInButton'
          >Sign In </button>


        </form>
        <div className='login__para'>
        <p>By continuing, you agree to Amazone's Conditions of
           Use and Privacy Notice</p>
        </div>
        

        <div className="divider__break">
          <h5> <center>New to Amazon? </center>

          </h5>
        </div>


        {/* <button variant="outlined" onClick={register}
        className='login__registerButton'
        >Create your Amazon account</button> */}
        <Link to="/Signup" >
					<button className="login__registerButton " >Create your Amazon Account</button>
				</Link>

        



      </div>

      <div className="login__bottom">
        
          <h6 style={{color: 'gray'}}> © 1996-2022, Amazon.com, Inc. or its affiliates</h6>
          
        
          
        </div>

     
    
    
    </div>
  )
}

export default Login;