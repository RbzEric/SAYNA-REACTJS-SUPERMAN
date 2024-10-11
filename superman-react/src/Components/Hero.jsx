import '../Styles/Hero.css';
import React from 'react';
import LogoDC from '../Assets/logos/logoDC.png';

const Hero = () => {
    return (
        <div className='HeroHome'>
            <div className='intro'>
            <img src={LogoDC} alt="LogoDc" className='LogoDc' />
            <h1 className='intro-title'> <span className='hero-intro'>SUPERMAN </span><br />
                L’HOMME D’ACIER
            </h1>
            </div>
        </div>
    )
}

export default Hero