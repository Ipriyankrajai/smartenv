import React from 'react'
import './style.css'

const Header = (props) => {
    const {logo,headerColor}=props
  return (
    <div className='header-main-div' style={{backgroundColor:headerColor}}>
        <div className='header-logo'>
            <img src={logo} alt="" />
        </div>
        <div className='header-other'>
        <div>
            Home
        </div>
        <div>
            Schedule
        </div>
        <div>
            About Us
        </div>
        <div>
            Contact US
        </div>
        </div>
    </div>
  )
}

export default Header