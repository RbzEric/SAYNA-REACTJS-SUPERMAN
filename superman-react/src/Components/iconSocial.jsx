import '../Styles/iconSocial.css'

import React from 'react';
import { NavLink} from 'react-router-dom';
import iconfb from '../../src/Assets/icones/facebook.png';
import iconIg from '../../src/Assets/icones/instagram.png';
import iconTw from '../../src/Assets/icones/twitter.png';

const IconSocial = () => {
  return (
    <div className='Icon-Container'>
        <ul>
            <li><img src={iconfb} alt="" /></li>
            <li><img src={iconIg} alt="" /></li>
            <li><img src={iconTw} alt="" /></li>
        </ul>
        

    </div>
  )
}

export default IconSocial