import '../Styles/Heroshop.css';
import React from 'react';
import flechedown from '../../src/Assets/logos/flèche_down_header.png';
import PanierIcon from '../../src/Assets/icones/icone_1.png';
import { useNavigate } from 'react-router-dom';


const Heroshop = () => {
  const navigate = useNavigate('');
  const handleCheckOut = () =>
    navigate('/recapPanier');

  return (
    <div className='heroshop-container'>
            <div className='heroshop-content'>
                <div className="heroshop-text">
                    <p>ENVIE D’UN SLIP JAUNE ?</p>
                </div>
            </div>
        <img className="flèche_down" src={flechedown} alt="flèche_down_header"/>
        <img src={PanierIcon} alt="PanierIcon" className='icon-panier' onClick={handleCheckOut} />

       
    </div>
  );
}

export default Heroshop;