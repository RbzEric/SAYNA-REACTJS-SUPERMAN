import '../Styles/Catalogue.css';
import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../Components/Config";
import { collection, getDocs } from "firebase/firestore";
import { CartContext } from './CartContext';


const ProductCatalog = () => {
  const [products, setProducts] = useState([]);


  const { addToCart } = useContext(CartContext);

  

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, "Produits");
      const productSnapshot = await getDocs(productsCollection);
      const productList = productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(productList);
    };

    fetchProducts();
  }, []);

  return (
    <div className='catalogue'>
      <ul className='products'>
        {products.map((Produit) => (
          <li key={Produit.id}>
            <Link to={`/produit/${Produit.id}`}><img src={Produit.ProductImage} alt={Produit.ProductName} className='product-image'/></Link>
            <p className='product-name'>{Produit.ProductName}</p>
            <p className='product-price'><span className='old-price'>{Produit.oldPrice}€</span><span className='new-price'>{Produit.newPrice}€</span></p>
            <button className='product-btn' onClick={() => addToCart(Produit)}>Ajouter au panier</button>
          </li>
        ))}

      </ul>

    </div>

  )
}
export default ProductCatalog;
