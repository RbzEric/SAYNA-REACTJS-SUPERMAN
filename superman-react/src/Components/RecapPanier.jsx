import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { CartContext } from '../Components/CartContext';
import { AuthContext } from '../Components/AuthContext';
import Empty from '../Assets/logos/empty.gif'

import '../Styles/RecapPanier.css'

const Panier = () => {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);

    const calculateSubtotal = () => {
        return cart.reduce((total, item) => total + item.newPrice * item.quantity, 0).toFixed(2);
    };

    const handleCheckout = () => {
        if (!isAuthenticated) {
            navigate('/LoginOrSignup');
        }
        else {
            navigate('/recapCommande');
        }
    };

    const subtotal = calculateSubtotal();
    return (
        <div className='panier-body'>
            <div className='nav-link'>
                <NavLink to="/eshop" className="nav-link">E-shop</NavLink> / <NavLink to="/recapPanier" className="nav-link">Panier</NavLink>
            </div>
            <h5 className='recap'>Récapitulatif du panier</h5>
            {cart.length === 0 ? (
                <img src={Empty} alt="empty" style={{ width: "400px" }} />
            ) : (
                <ul className=''>
                    {cart.map((item) => (
                        <li key={item.id} className="list-produit">
                            <img src={item.ProductImage} alt={item.ProductName} style={{ width: '100px', height: '100px', margin: '50px' }} />
                            <p className='list-name'>{item.ProductName}</p>
                            <div className="quantity">
                                <p className='list-price'>{item.newPrice}£</p>
                                <div className="quantity-controls">
                                    <button onClick={() => decreaseQuantity(item.id)} className="quantity-btn">-</button>
                                    <span className="quantity-value">{item.quantity}</span>
                                    <button onClick={() => increaseQuantity(item.id)} className="quantity-btn">+</button>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className="remove-btn">X</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            <p className='subtotal'>Sous total {subtotal}£</p> <br />
            <div className="action-buttons">
                <button onClick={() => navigate('/recapCommande')} className="continue-shopping-btn">Continuer mes achats</button>
                <button onClick={handleCheckout} className="checkout-btn">Passer la commande</button>
            </div>
        </div>
    );
};

export default Panier;
