import React, { useContext, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Components/AuthContext';
import { CartContext } from './CartContext';
import Google from "../Assets/logos/logo_8.png";
import Apple from "../Assets/logos/logo_7.png";
import fbIcon from "../Assets/logos/logo_4.2.png";
import Empty from '../Assets/logos/empty.gif'

import '../Styles/LoginOrSignup.css'

const Inscription = () => {
    const { login } = useContext(AuthContext); 
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        motDePasse: '',
        confirmationMotDePasse: ''
    });
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();
    const [isRedige, setIsRedige] = useState(true);

    const Connexion = () => {
        setIsRedige(true);
    };

    const Inscription = () => {
        setIsRedige(false);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.motDePasse === formData.confirmationMotDePasse) {
            login(); // Connecter l'utilisateur
        } else {
            alert("Les mots de passe ne correspondent pas");
        }
    };
    const closeCommande = () => {
        navigate('/eshop');
    };

    const ValidePaid = () => {
        navigate ('/paidWithAccount')
    }

    const calculateSubtotal = () => {
        return cart.reduce((total, item) => total + item.newPrice * item.quantity, 0);
    };
    const subtotal = calculateSubtotal();
    const total = (subtotal).toFixed(2);

    const handleclickPaid = () => {
        navigate('/paidWithoutAccount');
    }

    return (
        <div className='login-signup'>
            <div className='nav-link'>
                <NavLink to="/eshop" className='nav-link'>E-shop</NavLink> / <NavLink to="/recapPanier" className='nav-link'>Panier</NavLink> / <NavLink to="/recapPanier" className='nav-link'>Récapitulatif de votre panier</NavLink> / <NavLink to="/LoginOrSignup" className='nav-link'>Authentification</NavLink>
            </div>
            <h2 className='Auth-title'>Authentification</h2>

            <div className='flexible'>
                <div className='Compte'>
                    {!isRedige ? (
                        <form onSubmit={handleSubmit} className='inscri-form'>
                            <div className='form-title'>
                                <NavLink to="" className='connexion' onClick={Connexion}>Connexion</NavLink><NavLink to="" className='inscription' onClick={Inscription}>Inscription</NavLink>
                            </div>

                            <div className='form-identity'>
                                <label htmlFor="name">Nom</label><br />
                                <input
                                    type="text"
                                    placeholder="Nom"
                                    className='texte-value'
                                    value={formData.nom}
                                    onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                                /> <br />
                                <label htmlFor="Firstname">Prénom</label> <br />
                                <input
                                    type="text"
                                    placeholder="Prénom"
                                    className='texte-value'
                                    value={formData.prenom}
                                    onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                                /> <br />
                                <label htmlFor="email">Identifiant</label> <br />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className='texte-value'
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                /> <br />
                                <label htmlFor="password">Mot de passe</label> <br />
                                <input
                                    type="password"
                                    placeholder="Mot de passe"
                                    className='texte-value'
                                    value={formData.motDePasse}
                                    onChange={(e) => setFormData({ ...formData, motDePasse: e.target.value })}
                                /> <br />
                                <label htmlFor="confirmPassword">Confirmer votre mot de passe</label> <br />
                                <input
                                    type="password"
                                    className='texte-value'
                                    placeholder="Confirmer le mot de passe"
                                    value={formData.confirmationMotDePasse}
                                    onChange={(e) => setFormData({ ...formData, confirmationMotDePasse: e.target.value })}
                                /> <br />
                                <p className='confident'>Je reconnais avoir pris connaissance et j accepte les
                                    termes des <Link><span className='condition'>conditions générales d utilisation</span></Link></p>
                                <div class="switch-container">
                                    <input type="checkbox" id="toggleSwitch" class="switch-checkbox" />
                                    <label class="switch-label" for="toggleSwitch">
                                        <span class="switch-button"></span>
                                    </label>
                                </div>
                                <button type="submit" className='valider' onClick={ValidePaid}>VALIDER</button>
                                <div className='connectWith'>
                                    <p>Connectez vou avec</p>
                                    <div className="lign3"></div>
                                    <Link to="">
                                        <img src={Google} alt="" className="con-icon" />
                                    </Link>
                                    <Link to="">
                                        <img src={Apple} alt="" className="con-icon" />
                                    </Link>
                                    <Link to="">
                                        <img src={fbIcon} alt="" className="con-icon" />
                                    </Link>
                                </div>
                            </div>
                        </form>
                    ) : (
                        <div className='loginAccount'>
                            <form onSubmit={handleSubmit} className='login-form'>
                                <div className='form-title'>
                                    <NavLink to="" className='connexion' onClick={Connexion}>Connexion</NavLink><NavLink to="" className='inscription' onClick={Inscription}>Inscription</NavLink>
                                </div>

                                <div className='form-identity'>
                                    <label htmlFor="email">Identifiant</label> <br />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className='texte-value'
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    /> <br />
                                    <label htmlFor="password">Mot de passe</label> <br />
                                    <input
                                        type="password"
                                        placeholder="Mot de passe"
                                        className='texte-value'
                                        value={formData.motDePasse}
                                        onChange={(e) => setFormData({ ...formData, motDePasse: e.target.value })}
                                    /> <br />
                                    <Link><span className='condition'>Mot de passe Oublié</span></Link>
                                    <div className="lign4"></div>
                                    <button type="submit" className='valider' onClick={ValidePaid}>VALIDER</button>
                                    <div className='connectWith'>
                                        <p>Connectez vou avec</p>
                                        <div className="lign3"></div>
                                        <Link to="">
                                            <img src={Google} alt="" className="con-icon" />
                                        </Link>
                                        <Link to="">
                                            <img src={Apple} alt="" className="con-icon" />
                                        </Link>
                                        <Link to="">
                                            <img src={fbIcon} alt="" className="con-icon" />
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
                {cart.length === 0 ? (
                <img src={Empty} alt="empty" style={{ width: "400px", marginLeft:"30px"}} />
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
            <div className='buyWithoutAccount'>
                <h4 className='whithoutAccount-title'>Achat sans inscription</h4>
                <p className='info-whithoutAccount'>Saisissez les informations pour la livraison :</p>
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
                    <label htmlFor="email">Email</label><br />
                    <input type="email" placeholder='Email' className='identityWithout' /><br />
                    <label htmlFor="firstName">Adresse</label><br />
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
                    <label class="checkbox-container">
                        <input type="checkbox" />
                        <span class="checkmark"></span><span className='sms'>Sauvegarder ces informations pour un prochain achat</span>
                    </label>
                    <label class="checkbox-container">
                        <input type="checkbox" />
                        <span class="checkmark"></span><span className='sms'>
                        Recevoir les notifications relatives à l’achat par SMS</span></label><br />
                    <button className='paiement'onClick={handleclickPaid}>CONTINUER VERS LE PAIEMENT</button>

                </form>

            </div>

        </div>
    );
};

export default Inscription;
