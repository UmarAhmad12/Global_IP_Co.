import React from 'react'
import { NavLink } from 'react-router-dom';

function RegisterPage() {
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
                <NavLink to='/' id='loginbtn'>Login</NavLink>
                <button id='registerbtn'>Register</button>
            </div>
            <div>
                <img className='loginIcon' src='https://globalipco.com/ip-online/assets/images/icons/register.svg' alt='login' />

                <form className='loginForm' style={{textAlign:'center'}}>
                    <div>
                        <p style={{textAlign:'left'}}>Email</p>
                        <input type='text'  className='login-input' name='username' id='username' />
                    </div>
                    <div className='passwordDiv'>
                        <p style={{textAlign:'left'}}>Password</p>
                        <input type='password' className='login-input' name='password' id='password' />
                        <img className='passwordIcon' src='https://cdn-icons-png.flaticon.com/512/709/709612.png' alt='Icon' />
                    </div>
                    <div style={{width:'100%',textAlign:'center'}}>
                        <button type='submit' id="submit_button" >Register</button>
                    </div>
                    <p id='verify-pass'>A verification email will be sent to your email address after registration.</p>
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

export default RegisterPage