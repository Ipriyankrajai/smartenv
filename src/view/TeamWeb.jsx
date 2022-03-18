import React, { useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { Helmet } from 'react-helmet';
import ReactCardFlip from 'react-card-flip';
import './style.css'
const TeamWeb = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isFlipped2, setIsFlipped2] = useState(false);
    const {title,description,titleswon,year,captian,owner,primarycolor,secondarycolor,logo}=props.data;
    console.log('secondarycolor',secondarycolor);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }
    const handleClick2 = () => {
        setIsFlipped2(!isFlipped2);
    }
    return (
        <div>
            <styleMi>
                <Helmet>
                    <title>
                        {title}
                    </title>
                    <meta name="description" content={description} />
                </Helmet>
                <Header logo={logo} headerColor={primarycolor}/>
                <div className='react-flip-main-cover'>

                    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                        <div className='flip-f-status' style={{backgroundColor:secondarycolor}}>
                            <div className='flip-f-status-content'>
                                Stats
                            </div>
                            <div className='btn-change'>
                            <button onClick={handleClick}>Click for stats</button>
                            </div>
                        </div>

                        <div className='flip-b-status' style={{backgroundColor:secondarycolor}}>
                            <div className='flip-f-status-content'>
                                <div>
                                    Total Titles Won : {titleswon}
                                </div>
                                <div>
                                    Year : {year}
                                </div>
                            </div>
                            <div className='btn-change'>
                            <button onClick={handleClick}>Click for Cover</button>
                            </div>
                        </div>
                    </ReactCardFlip>
                    <ReactCardFlip isFlipped={isFlipped2} flipDirection="vertical">
                        <div className='flip-f-status' style={{backgroundColor:secondarycolor}}>
                            <div className='flip-f-status-content'>
                                Team Mangment
                            </div>
                            <div className='btn-change'>
                            <button onClick={handleClick2}>Click For Managment</button>
                            </div>
                        </div>

                        <div className='flip-b-status' style={{backgroundColor:secondarycolor}}>
                            <div className='flip-f-status-content'>
                                <div>
                                    Captian : {captian}
                                </div>
                                <div>
                                    Team Owners :  {owner}
                                </div>
                            </div>
                            <div className='btn-change'>
                            <button onClick={handleClick2}>Click for Cover</button>
                            </div>
                        </div>
                    </ReactCardFlip>
                </div>
                <Footer />
            </styleMi>
        </div>
    )
}

export default TeamWeb