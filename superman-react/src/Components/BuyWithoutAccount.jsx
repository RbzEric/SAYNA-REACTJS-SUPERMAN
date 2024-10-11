import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { NavLink, useNavigate } from 'react-router-dom';
import Empty from '../Assets/logos/empty.gif';
// import Chronopost from 'kisspng-chronopost-logistics-logo-delivery-brand-small-cube-5b61624b644a89-7093257415331088114108/';
import '../Styles/BuyWithoutAccount.css'

const BuyWithoutAccount = () => {
    const navigate = useNavigate();
    const { cart } = useContext(CartContext);

    const closeCommande = () => {
        navigate('/eshop');
    };

    const calculateSubtotal = () => {
        return cart.reduce((total, item) => total + item.newPrice * item.quantity, 0);
    };

    const subtotal = calculateSubtotal();
    const total = (subtotal).toFixed(2);

    const thanksPages = () => {
        navigate('/thanksPages');
    };
    return (
        <div className='paiement-page'>
            <div className='nav-link'>
                <NavLink to="/eshop" className='nav-link'>E-shop</NavLink> / <NavLink to="/panier" className='nav-link'>Panier</NavLink> / <NavLink to="/recapPanier" className='nav-link'>Récapitulatif de votre panier</NavLink> / <NavLink to="/inscription" className='nav-link'>Authentification</NavLink> / <NavLink to="/paidWithoutAccount" className='nav-link'>Livraison et paiement </NavLink>
            </div>
            <div className='flexible'>
                <div className='buyWithoutAccount'>
                    <h4 className='whithoutAccount-title'>Livraison</h4>
                    <p className='info-whithoutAccount'>Choisir une méthode de livraison</p>
                    <div>
                        <div className="delivery-options">
                            <label className="delivery-option">
                                <input type="radio" name="delivery" checked style={{ backgroundColor: 'transparent' }} />
                                <div className="delivery-details">
                                    {/* <img src={Chronopost} alt="Chronopost" /> */}
                                    <div className="delivery-info">
                                        <h4>chronopost</h4>
                                        <p>Livraison à domicile<br />3 à 4 jours ouvrés<br />3,95€</p>
                                    </div>
                                </div>
                            </label>

                            <label className="delivery-option">
                                <input type="radio" name="delivery" style={{ backgroundColor: 'transparent' }} />
                                <div className="delivery-details">
                                    {/* <img src={ } alt="Colissimo" /> */}
                                    <div className="delivery-info">
                                        <h4>colissimo</h4>
                                        <p>Livraison à domicile<br />3 à 4 jours ouvrés<br />3,95€</p>
                                    </div>
                                </div>
                            </label>

                            <label className="delivery-option">
                                <input type="radio" name="delivery" style={{ backgroundColor: 'transparent' }} />
                                <div className="delivery-details">
                                    {/* <img src={} alt="Mondial Relay" /> */}
                                    <div className="delivery-info">
                                        <h4>mondial relay</h4>
                                        <p>Livraison en point relais<br />6 à 8 jours ouvrés<br />Gratuit</p>
                                    </div>
                                </div>
                            </label>
                        </div>

                    </div>
                    <form action="" className='indentity'>
                        <div className='full-name'>
                            <label htmlFor="name">Nom</label><br />
                            <input type="text" placeholder='Nom' id='identityWithout' />
                            <div className='first-name'>
                                <label htmlFor="firstName">Prénom</label><br />
                                <input type="text" placeholder='Prénom' id='identityWithout' />
                            </div>
                            <br />
                        </div>
                        <label htmlFor="adresse">Adresse</label><br />
                        <input type="text" placeholder='Adresse' className='identityWithout' />
                        <div className='Postal'>
                            <label htmlFor="CodePostal">Code Postal</label><br />
                            <input type="number" placeholder='Code Postal' className='postal' /><br />
                            <div className='ville'>
                                <label htmlFor="ville">Ville</label><br />
                                <input type="text" placeholder='Ville' className='postal' id='ville' />
                            </div>

                        </div>
                        <label htmlFor="Pays">Pays</label><br />
                        <select name="" id="" className='identityWithout' style={{ color: '#ffffff' }}>
                            <option value="Pays" style={{ color: 'black' }}>Pays</option>
                            <option value="Pays" style={{ color: 'black' }}>Pays</option>
                            <option value="Pays" style={{ color: 'black' }}>Pays</option>
                            <option value="Pays" style={{ color: 'black' }}>Pays</option>
                            <option value="Pays" style={{ color: 'black' }}>Pays</option>

                        </select>
                        <label htmlFor="tel">Numéro de téléphone</label><br />
                        <input type="tel" placeholder='Numéro de téléphone' className='identityWithout' /><br />

                    </form>
                   <div className='buyWithoutAccount'>
                   <h4 className='whithoutAccount-title'>Paiment</h4>
                    <p className='info-whithoutAccount'>Séléctionner un moyen de paiement</p>
                    {/* <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" /> */}
                    <form action="">
                        <label htmlFor="numéro de carte">Numéro de carte</label><br />
                        <input type="number" placeholder='numéro de carte' className='identityWithout' />
                        <div className='Postal'>
                            <label htmlFor="expiration-date">Date dexpiration</label><br />
                            <input type="number" placeholder='Date dexpiration' className='postal' /><br />
                            <div className='CVV'>
                                <label htmlFor="CVV">CVV</label><br />
                                <input type="number" placeholder='CVV' className='postal' id='CVV' />
                            </div>

                        </div>
                        <label htmlFor="name">Nom sur la carte</label><br />
                        <input type="text" placeholder='Nom sur la carte' className='identityWithout' /><br />
                    </form>
                   </div> 
                   
                   <label class="checkbox-container">
                            <input type="checkbox" />
                            <span class="checkmark"></span><span className='sms2'>
                            L'adresse de facturation est la même que l adresse de livraison</span></label><br />
                        <button className='paiement' onClick={thanksPages}>Valider et payer {total} €</button>

                </div>
                {cart.length === 0 ? (
                    <img src={Empty} alt="Empty" style={{ width: '500px', marginLeft: '50px', height: '400px' }} />
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

export default BuyWithoutAccount