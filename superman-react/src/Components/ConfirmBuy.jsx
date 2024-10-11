import '../Styles/ConfirmBuy.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const ConfirmBuy = () => {
    return (
        <div className='confirBuy-container'>
            <div className='nav-link confirm-nav'>
                    <NavLink to="/eshop" className='nav-link'>E-shop</NavLink> / <NavLink to="/panier" className='nav-link'>Panier</NavLink> / <NavLink to="/recapPanier" className='nav-link'>Récapitulatif de votre panier</NavLink> / <NavLink to="/inscription" className='nav-link'>Authentification</NavLink> / <NavLink to="/paidWithoutAccount" className='nav-link'>Livraison et paiement </NavLink>/ <NavLink to="/confirmBuy" className='nav-link'>Achat confirmé</NavLink>
                </div>
            <div className="confirmBuy-overlay">
                
                <div className='confirmBuy-text'>
                <div className='btn-back'>
                        <button className='btn-backHome'>Revenir à l’accueil</button>
                        <button className='btn-backShop'>Retourner au catalogue</button>
                    </div>
                    <h1 className='thanks'>Merci pour votre commande !</h1>
                    <p className='text-thanks'>Superman se charge de livrer votre commande ! Ce sera fait à la vitesse de l’éclair tant que Lex Luthor
                        se tiendra tranquille ou que Batman ne cherche pas des noises à notre journaliste préféré !
                        Retrouvez le détail de votre commande ci-dessous et dans le mail de confirmation envoyé à l’adresse
                        mail renseignée. Vous n’avez pas reçu le mail ? <NavLink>Renvoyer la confirmation d’achat.</NavLink> </p>
                </div>
            </div>

        </div>
    )
}

export default ConfirmBuy 