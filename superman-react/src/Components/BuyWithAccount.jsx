import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { NavLink, useNavigate } from 'react-router-dom';
import visaLogo from '../Assets/logos/visa.png';
import Empty from '../Assets/logos/empty.gif'
import '../Styles/BuyWithAccount.css';

const BuyWithAccount = () => {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();

    const closeCommande = () => {
        navigate('/eshop');
    };

    const calculateSubtotal = () => {
        return cart.reduce((total, item) => total + item.newPrice * item.quantity, 0);
    };

    const subtotal = calculateSubtotal();
    const total = (subtotal).toFixed(2);

    return (
        <div className='paiement-page'>
            <div className='nav-link'>
                <NavLink to="/eshop" className='nav-link'>E-shop</NavLink> / <NavLink to="/panier" className='nav-link'>Panier</NavLink> / <NavLink to="/recapPanier" className='nav-link'>Récapitulatif de votre panier</NavLink> / <NavLink to="/inscription" className='nav-link'>Authentification</NavLink> / <NavLink to="/paidWithAccount" className='nav-link'>Livraison et paiement </NavLink>
            </div>
            <div className='flexible'>
                <div>
                    <div className='paiement-box'>
                        <p className='user-name'>M. Albert Dupontel</p>
                        <NavLink to="" className="edit">Modifier</NavLink>
                        <p className='user-firstname'>2 Imp. Lebouis</p>
                        <p className='user-postal'>75014 Paris</p>
                        <p className='user-ville'>France</p>
                        <p className='user-tel'>06 ** ** ** ** ** </p>
                    </div>
                    <div className='paiement-box'>
                        <p className='livraison-methode'>Méthode de livraison</p>
                        <NavLink to="" className="edit">Modifier</NavLink>
                        <p className='livraison-methode'>Chronopost livraison à domicile</p>
                        <p className=''>2 Imp Lebouis</p>
                        <p className='user-ville'>75014 Paris</p>
                        <p className='user-ville'>France</p>
                    </div>
                    <div className='paiement-box'>
                        <p className='paid-type'>Moyen de paiement</p>
                        <NavLink to="" className="edit">Modifier</NavLink>
                        <div className='paidCard'>
                            <img src={visaLogo} alt="visaLogo" className='visa' />
                            <p className='code'><span className='dot-code'>....</span>0000 <span className='expiratio-date'>03/26</span></p>
                        </div>
                        <p>ALBERT DUPONTEL</p>
                    </div>
                    <button className='submitPaid'> <em>Valider et payer {total} €</em></button>
                </div>

                {cart.length === 0 ? (
                    <img src={Empty} alt="Empty" style={{ width: '500px', marginLeft: '50px', height:'400px' }} />
                ) : (
                    <div className='commande2'>
                        <div className="commade-header">
                            <h4 className='commande-title2'>Commande</h4>
                            <button onClick={() => closeCommande()} className="closecommande">X</button>
                        </div>
                        <ul className='produit-com'>
                            {cart.map((item) => (
                                <li key={item.id} className="list_commande" >
                                    <img src={item.ProductImage} alt={item.ProductName} style={{ width: '100px', height: '100px', margin: '50px' }} />
                                    <div className='commande-description'>
                                        <p>Categorie</p>
                                        <p className='commande-name'>{item.ProductName}</p>
                                        <p className='commande-price'>{item.newPrice}£</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="promocode2">
                            <input className="text-code2" type="text" value="" placeholder="code promo" />
                            <button className='code-btn2'>Ajouter</button>
                        </div>
                        <hr className='lignhor' />
                        <div className='total-brut'>
                            <h4 className='total-brut'>Total <span className='right-affich'>{subtotal.toFixed(2)}€</span></h4>
                            <h4 className='total-brut'>Livraison <span className='right-affich' style={{ color: 'yellow' }}>Offerte</span></h4>
                            <h4 className='total-brut'>Réduction <span className='right-affich'>-</span></h4>
                            <h4 className='total-brut'>Taxes <span className='right-affich'>-</span></h4>
                        </div>

                        <hr className='lignhor' />
                        <h4 className='total-net'>Total: <span className='right-affich'>{total}€</span></h4>


                    </div>
                )}
            </div>

        </div>
    )
}

export default BuyWithAccount