import React, { useState } from 'react'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../components/Userpage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


function Userpage() {

    //  Navigate to login page
    const navigateToLogin = useNavigate();
     // Fetching API on Button Click
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleApi =(e) => {
        e.preventDefault();
        
    console.log({email, password})
    
    if (email === '') {
        alert('Email is required')
    } else if (!email.includes('@')){
        alert('Please enter a valid email address')
    }  else if (password === '') {
        alert('Password is required')
    } else if (password.length <= 7) {
        alert ('Password length must be greater than 8 characters')
    }  
    // https://api.morkshub.xyz/api/login - Pass: Vossle#123 - Test Api
    // http://assetapi.sublimecreations.in/api/login/login
    
        axios.post(' https://api.morkshub.xyz/api/login',{
            email : email,
            password : password
        })
        .then(result=>{
        console.log(result)
        toast.success("Login Successful")
        navigateToLogin('/loggedin')
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)
        })
        .catch(error => {
        console.log(error)
        toast.error('Invalid email or password');
        })

        
    }
  return (
    <>
        <div className='NavBar'>
            <div className='Logo'>
            <img src='https://globalipco.com/ip-online/assets/images/navbarImages/gl_logo.png' />
            </div>
        </div>
        <div className='loginBoxDiv'>
            <div className="loginBox">
                <div className='loginNav'>
                    <button id='loginbtn'>Login</button>
                    <NavLink to='/registration' id='registerbtn'>Register</NavLink>
                </div>
                <div>
                    <img className='loginIcon' src='https://globalipco.com/ip-online/assets/images/icons/lock.svg' alt='login' />

                    <form className='loginForm' style={{textAlign:'center'}}>
                        <div>
                            <p style={{textAlign:'left'}}>Email</p>
                            <input type='text' value={email} className='login-input' name='username' id='username' onChange={handleEmail}/>
                        </div>
                        <div className='passwordDiv'>
                            <p style={{textAlign:'left'}}>Password</p>
                            <input type='password' value={password} className='login-input' name='password' id='password' onChange={handlePassword}/>
                            <img className='passwordIcon' src='https://cdn-icons-png.flaticon.com/512/709/709612.png' alt='Icon' />
                        </div>
                        <div style={{width:'100%',textAlign:'center'}}>
                            <button type='submit' id="submit_button" onClick={handleApi}>Log in</button>
                        </div>
                        <p className='forgot-pass'>Forgot my password?</p>
                    </form>
                </div>
            </div>
        </div>
        <div className='loginNoteDiv'>
            <div className='loginNote'>
                <div className='color-border'></div>
                <h3 className='login-note'>Recently Released: </h3>
                <ul className='Ulnote'>
                    <li>Nigerian patents</li>
                    <li>EU Registered Community Designs</li>
                    <li>Resources section with manuals (available to law firms)</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Userpage