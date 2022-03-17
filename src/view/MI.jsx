import React from 'react'
import milogo from '../asset/images/milogo.png'
import Header from '../common/Header'
const MI = () => {
  return (
    <div>
        <Header/>
        <div>
            MI
        </div>
        <img src={milogo} alt="" />
    </div>
  )
}

export default MI