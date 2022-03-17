import React, { useState } from 'react'
import milogo from '../asset/images/milogo.png'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { Helmet } from 'react-helmet';
import ReactCardFlip from 'react-card-flip';
import styleMi from './styleMi';
import './style.css'
const MI = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isFlipped2, setIsFlipped2] = useState(false);
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
                        MI | Mumbai Indians
                    </title>
                    <meta name="description" content="Mumbai Indians are a franchise cricket team based in Mumbai, Maharashtra, that competes in the Indian Premier League. Founded in 2008, the team is owned by India's biggest conglomerate, Reliance Industries, through its 100% subsidiary IndiaWin Sports. Since its establishment, the team has played its home matches in the 33,108-capacity Wankhede Stadium in Mumbai." />
                </Helmet>
                <Header logo={milogo} headerColor='blue' />
                <div className='react-flip-main-cover'>

                    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                        <div className='flip-f-status'>
                            <div className='flip-f-status-content'>
                                Stats
                            </div>
                            <div className='btn-change'>
                            <button onClick={handleClick}>Click for stats</button>
                            </div>
                        </div>

                        <div className='flip-b-status'>
                            <div className='flip-f-status-content'>
                                <div>
                                    Total Titles Won : 5 Titles
                                </div>
                                <div>
                                    Year : 2013, 2015, 2017, 2019, 2020.
                                </div>
                            </div>
                            <div className='btn-change'>
                            <button onClick={handleClick}>Click for Cover</button>
                            </div>
                        </div>
                    </ReactCardFlip>
                    <ReactCardFlip isFlipped={isFlipped2} flipDirection="vertical">
                        <div className='flip-f-status'>
                            <div className='flip-f-status-content'>
                                Team Mangment
                            </div>
                            <div className='btn-change'>
                            <button onClick={handleClick2}>Click For Managment</button>
                            </div>
                        </div>

                        <div className='flip-b-status'>
                            <div className='flip-f-status-content'>
                                <div>
                                    Captian : Rohit sharma
                                </div>
                                <div>
                                    Team Owners :  Reliance Industries
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

export default MI