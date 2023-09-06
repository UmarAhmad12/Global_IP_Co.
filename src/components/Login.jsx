import React from 'react'
import { GiPowerButton } from "react-icons/gi";
import { FaRegUser} from "react-icons/fa";

function Login() {
  // Getting user info from localStorage
  let user = localStorage.getItem('email');
  // console.log(user);
  return (
    <>
    <div className='NavBar'>
            <div className='Logo'>
                <img src='https://globalipco.com/ip-online/assets/images/navbarImages/gl_logo.png' />            
            </div>
            <div className='side'>
                    <button id='User-log'>
                      <FaRegUser size={22}/> {user}
                    </button>
                    <button id='sign-out-btn'>
                      <GiPowerButton size={22}/>
                    </button>
            </div>
        </div>
    </>
  )
}

export default Login