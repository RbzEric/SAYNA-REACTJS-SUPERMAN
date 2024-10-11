import '../Styles/Home.css';
import Hero from '../Components/Hero';
import HeroContext from '../Components/HeroContext';
import BatVSuperman from '../Components/BatVSuperman';
import Multimedia from '../Components/Multimedia';
import Contact from '../Components/Contact';
import Citation from '../Components/Citation';
import IconSocial from '../Components/iconSocial';


import React from 'react'

const Home = () => {
  return (
    <div className='homepage'>
      <IconSocial></IconSocial>
      <Hero></Hero>
      <HeroContext></HeroContext>
      <BatVSuperman></BatVSuperman>
      <Multimedia></Multimedia>
      <Contact></Contact>
      <Citation></Citation>
    </div>
  )
}

export default Home