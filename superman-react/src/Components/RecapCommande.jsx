import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Components/AuthContext';
import Empty from '../Assets/logos/empty.gif'


import '../Styles/RecapCommande.css';

const RecapitulatifPanier = () => {
    const { cart } = useContext(CartContext);
    // const [promoCode, setPromoCode] = useState("");
    // const [discount, setDiscount] = useState(0);
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);


    const calculateSubtotal = () => {
        return cart.reduce((total, item) => total + item.newPrice * item.quantity, 0);
    };

    // const calculateTaxes = (subtotal) => {
    //     return (subtotal * 0.2).toFixed(2);
    // };

    // const handleApplyPromoCode = () => {
    //     if (promoCode === "PROMO10") {
    //         setDiscount(10);
    //     } else {
    //         alert("Code promo invalide");
    //     }
    // };

    const closeCommande = () => {
        navigate('/eshop');
    }
    const handleCheckout = () => {
        if (!isAuthenticated) {
            navigate('/LoginOrSignup ');
        }
        else {
            navigate('/recapCommande');
        }
    };

    const subtotal = calculateSubtotal();
    // const taxes = calculateTaxes(subtotal);
    const total = (subtotal).toFixed(2);

    return (
        <div className='recap-body'>
            <div className='nav-link'>
                <NavLink to="/eshop" className='nav-link'>E-shop</NavLink> / <NavLink to="/recapPanier" className='nav-link'>Panier</NavLink> / <NavLink to="/recapCommande" className='nav-link'>Récapitulatif de votre panier</NavLink>
            </div>
            {cart.length === 0 ? (
                <img src={Empty} alt="empty" style={{ width: "400px" }} />
            ) : (
                <div className='commande'>
                    <div className="commade-header">
                        <h4 className='commande-title'>Commande</h4>
                        <button onClick={() => closeCommande()} className="closecommande">X</button>
                    </div>
                    <ul className=''>
                        {cart.map((item) => (
                            <li key={item.id} className="list_commande">
                                <img src={item.ProductImage} alt={item.ProductName} style={{ width: '100px', height: '100px', margin: '50px' }} />
                                <div className='commande-description'>
                                    <p>Categorie</p>
                                    <p className='commande-name'>{item.ProductName}</p>
                                    <p className='commande-price'>{item.newPrice}£</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="promocode">
                        <input className="text-code" type="text" value="" placeholder="code promo" />
                        <button className='code-btn'>Ajouter</button>
                    </div>
                    <hr className='lign-hor' />
                    <div className='total-brut'>
                        <h4 className='total-brut'>Total: <span className='right-affich'>{subtotal.toFixed(2)}€</span></h4>
                        <h4 className='total-brut'>Réduction: <span className='right-affich'>-</span></h4>
                        <h4 className='total-brut'>Taxes: <span className='right-affich'>-</span></h4>
                    </div>

                    <hr className='lign-hor' />
                    <h4 className='total-net'>Total: <span className='right-affich'>{total}€</span></h4>


                </div>
            )}
            <div className="action-buttons">
                <button onClick={() => navigate('/recapPanier')} className="comeback-shopping-btn">Revenir au Panier</button>
                <button onClick={handleCheckout} className="checkbuy-btn">valider mon achat</button>
            </div>
        </div>
    );
};

export default RecapitulatifPanier;
