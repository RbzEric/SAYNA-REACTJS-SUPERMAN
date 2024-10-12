import '../Styles/FicheProduit.css'
import React, { useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { db } from "./Config";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import StarIcon1 from '../../src/Assets/icones/icone_2.png';
import StarIcon2 from '../../src/Assets/icones/icone_3.png';
import PanierIcon from '../../src/Assets/icones/icone_1.png';
import ProductCarousel from './ProductCarousel';





const FicheProduit = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState("M");
    const [products, setProducts] = useState([]);
    const navigate = useNavigate('');


    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const handleCheckOut = () =>
        navigate('/recapPanier');

    useEffect(() => {
        const fetchProduct = async () => {
            const productDoc = await getDoc(doc(db, "Produits", id));
            if (productDoc.exists()) {
                setProduct(productDoc.data());
            } else {
                console.log("Produit non trouvé");
            }
        };
        fetchProduct();
    }, [id]);

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
        <div className="ficheProducts">
            <img src={PanierIcon} alt="PanierIcon" className='icon-panier2' onClick={handleCheckOut} />
            {product ? (
                <div className="product-container">
                    <div className="breadcrumb">
                        <NavLink to="/eshop">E-shop</NavLink> / <NavLink to="/recapPanier">Panier</NavLink>
                    </div>

                    <div className="product-details">
                        <div className="product-images">
                            <img src={product.ProductImage} alt={product.ProductName} className="main-image" />
                            <div className="thumbnails">
                                <img src={product.ProductImage} alt="Miniature 1" class="thumbnail" />
                                <img src={product.ProductImage} alt="Miniature 2" class="thumbnail" />
                                <img src={product.ProductImage} alt="Miniature 3" class="thumbnail" />
                                <img src={product.ProductImage} alt="Miniature 4" class="thumbnail" />
                            </div>
                        </div>
                        <div className="product-info">
                            <div className="product-header">
                                <div className="product-rating">
                                    <img src={StarIcon1} alt="" />
                                    <img src={StarIcon1} alt="" />
                                    <img src={StarIcon1} alt="" />
                                    <img src={StarIcon1} alt="" />
                                    <img src={StarIcon2} alt="" />
                                    <p>6 Commentaires</p>
                                </div>
                                <h1 className="product-name">{product.ProductName}</h1>
                                <hr />

                            </div>
                            <div className='product-size-price'>
                                <p className="product-price">48€</p>
                                <div className="product-stock-size">
                                    <p className="stock-status">En stock</p>
                                    <select className="product-size" value={selectedSize} onChange={handleSizeChange}>
                                        <option value="M">Taille M</option>
                                        <option value="L">Taille L</option>
                                        <option value="S">Taille S</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <button className="add-to-cart">AJOUTER AU PANIER</button>
                                <button className="wishlist">&#x2764;</button>
                            </div>
                            <hr />

                        </div>
                    </div>

                    <div class="product-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dignissim elit id
                            turpis scelerisque mollis. Nulla vehicula velit augue, ut maximus est porttitor quis. Morbi
                            finibus, nulla non consectetur convallis, eros mi sollicitudin metus, id sollicitudin nunc
                            ligula eu dui. Curabitur eleifend sagittis mi, a sodales ante sagittis sed. Proin sed mauris
                            tristique, dictum ipsum in, interdum justo. Curabitur vestibulum nec lectus nec
                            maximus. Suspendisse euismod scelerisque velit at sollicitudin. Donec quis accumsan
                            neque. Nullam maximus elit sem, ac varius nibh ultrices vitae. Curabitur in ipsum nec
                            augue commodo luctus mollis vitae tortor. Proin a lacinia tellus, eu viverra odio. Sed
                            quis mi eget massa pharetra facilisis in laoreet felis. Fusce ac venenatis lacus. Ut
                            tempus elit feugiat tellus ultrices, quis aliquet ipsum placerat.</p>
                    </div>
                    <hr />
                    <div className='product-characteristic'>
                        <h2 className='charac'>Caractéristiques</h2>
                        <p>Matériaux :</p>
                        <p>Couleur : </p>
                        <p>Poids : </p>
                        <p>Capacité :--</p>
                    </div>
                    <hr />
                    <div className='product-livraison'>
                        <h2 className='livraison'>Livraison</h2>
                        <p>Livraison à domicile.</p>
                        <p>Retrait en point relais.</p>
                        <p>Délai de livraison 2-4 jours </p>
                    </div>
                    <hr />
                    <div className="product-comment1">
                        <h1 className='comment'>Commentaires</h1>
                        <div className='note'>
                            <div className='stars'>
                                <img src={StarIcon1} alt="starIcon" />
                                <img src={StarIcon1} alt="starIcon" />
                                <img src={StarIcon1} alt="starIcon" />
                                <img src={StarIcon1} alt="starIcon" />
                                <img src={StarIcon2} alt="starIcon" />
                            </div>
                            <p className='comment-name'>Robert</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dignissim elit id turpis scelerisque mollis. Nulla vehicula velit augue, ut maximus est
                            porttitor quis. Morbi finibus, nulla non consectetur convallis, eros mi sollicitudin metus, id sollicitudin nunc ligula eu dui. </p>
                    </div>
                    <hr />
                    <div className="product-comment2">
                        <div className='note john'>
                            <div className='stars'>
                                <img src={StarIcon1} alt="starIcon" />
                                <img src={StarIcon1} alt="starIcon" />
                                <img src={StarIcon1} alt="starIcon" />
                                <img src={StarIcon1} alt="starIcon" />
                                <img src={StarIcon1} alt="starIcon" />
                            </div>
                            <p className='comment-name '>John</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dignissim elit id turpis scelerisque mollis. Nulla vehicula velit augue, ut maximus est
                            porttitor quis. Morbi finibus, nulla non consectetur convallis, eros mi sollicitudin metus, id sollicitudin nunc ligula eu dui. </p>
                    </div>
                    <hr />
                    <br /><br /><br /><br /><br /><br />
                    <div className='pagination-product'>
                        <div class="triangle-left"></div>
                        <p className='page_number'><NavLink to="#">1</NavLink>- <NavLink to="#">2</NavLink></p>
                        <div class="triangle-right"></div>
                    </div>
                    <div>
                        <ProductCarousel></ProductCarousel>
                    </div>
                </div>
            ) : (
                <p>Chargement...</p>
            )}
        </div>
    );
};

export default FicheProduit;
