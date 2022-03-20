import React from 'react';
import { AiFillFacebook,AiFillInstagram,AiFillTwitterCircle } from "react-icons/ai";


const Footer = (props) => {
  const { logo, footerColor,primaryColor,instaLink,fbaLink,twLink } = props
  return (
    <div className='main-footer-div' style={{ backgroundColor: footerColor }}>
      <div className='footer-logo-sc'>
        <div className='header-logo'>
          <img src={logo} alt="" />
        </div>
        <div className='footer-sc-main'>
        <AiFillFacebook style={{ color: primaryColor, fontSize: "2em" }} onClick={() => window.open(fbaLink, "_blank")}/>
        <AiFillInstagram style={{ color: primaryColor, fontSize: "2em" }} onClick={() => window.open(instaLink, "_blank")}/>
        <AiFillTwitterCircle style={{ color: primaryColor, fontSize: "2em" }} onClick={() => window.open(twLink, "_blank")}/>
        </div>
      </div>
      <div>
        <div className='footer-other'>
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
      </div>
    </div>
  )
}

export default Footer