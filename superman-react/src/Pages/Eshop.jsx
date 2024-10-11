import '../Styles/Eshop.css';
import Heroshop from '../Components/HeroShop';
import FILTER from '../Components/Filter';
import CATALOGUE from '../Components/Catalogue';
import { CartProvider } from '../Components/CartContext';
import IconSocial from '../Components/iconSocial';

import React from 'react'

const Eshop = () => {
  return (
    <div className='shop'>
      <div className='shop-header'>
      <IconSocial></IconSocial>
      <Heroshop />
      </div> 
      <div className='main-content'>
        <FILTER />
        <CartProvider>
          <CATALOGUE />
        </CartProvider>
      </div>
    </div>

  )
}

export default Eshop