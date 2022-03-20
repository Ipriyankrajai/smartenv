import React from 'react'
import './style.css';
import { useMediaQuery } from 'react-responsive';
import {AiOutlineMenu} from 'react-icons/ai'

const Header = (props) => {
    const {logo,headerColor}=props;
    const phoneView = useMediaQuery({ minWidth: 300, maxWidth: 480 });
  return (
    <div className='header-main-div' style={{backgroundColor:headerColor}}>
        <div className='header-logo'>
            <img src={logo} alt="" />
        </div>
        {
            phoneView? <div className='header-mob-other'> <AiOutlineMenu/></div>:<div className='header-other'>
            <div>
                Home
            </div>
            <div>
                Schedule
            </div>
            <div>
                About us
            </div>
            <div>
                Contact us
            </div>
            </div>

        }

    </div>
  )
}

export default Header