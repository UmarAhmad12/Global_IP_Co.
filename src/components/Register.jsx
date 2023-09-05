import React from 'react'
import { GiPowerButton } from "react-icons/gi";
import { FaRegUser} from "react-icons/fa";

function Register() {
  return (
    <>
    <div className='NavBar'>
            <div className='Logo'>
                <img src='https://globalipco.com/ip-online/assets/images/navbarImages/gl_logo.png' />            
            </div>
            <div className='side'>
                    <button id='User-log'>
                      <FaRegUser size={22}/>umara6274@gmail.com
                    </button>
                    <button id='sign-out-btn'>
                      <GiPowerButton size={22}/>
                    </button>
            </div>
        </div>
    </>
  )
}

export default Register