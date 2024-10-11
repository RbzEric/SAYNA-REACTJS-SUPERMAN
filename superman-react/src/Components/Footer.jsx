import '../Styles/Footer.css';
import React from 'react'

import iconWB from '../../src/Assets/logos/icon_WB.png';
import iconSayna from '../../src/Assets/logos/logo_1.png';
import iconX from '../../src/Assets/logos/icon_x.png';
import iconDC from '../../src/Assets/logos/logo_3.png';
import iconFb from '../../src/Assets/logos/icon_facebook.png';
import iconIg from '../../src/Assets/logos/icon_ig.png';
import iconTw from '../../src/Assets/logos/icon_tw.png';

const Footer = () => {
  return (
    <aside>
      <div className='footerItem'>
      <div className='texte-footer'>
            <img src={iconWB} alt="" />
            <p>Ce projet respecte l’univers cinématographique des films Batman récents. Version Nolan & Snyder & Reeves</p>
        </div>
        <div className='icon'>
            <img src={iconSayna} alt="" id="reseau"/>
            <img src={iconX} alt=""  id="reseau"/>
            <img src={iconDC} alt="" id="reseau"/>
            <img src={iconFb} alt="" id="reseau"/>
            <img src={iconIg} alt="" id="reseau"/>
            <img src={iconTw} alt="" id="reseau"/>
        </div>
      </div>
        
    </aside>
  )
    
   
}

export default Footer
