import '../Styles/ProductCarousel.css'
import React, { useState } from 'react';
import Cat from '../Assets/images/cat.png';
import Meme from '../Assets/images/meme.png';
import Pepe from '../Assets/images/pepe.png';

const ProductCarousel = () => {
  // Les produits à afficher
  const produits = [
    { id: 1, nom: 'PRODUIT', prix: '75€', image: Cat },
    { id: 2, nom: 'PRODUIT', prix: '75€', image: Meme },
    { id: 3, nom: 'PRODUIT', prix: '75€', image: Pepe },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % produits.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + produits.length) % produits.length
    );
  };

  return (
    <section className="produits-similaires">
      <h2>Produits similaires</h2>
      <div className="carousel">
        <button className="prev" onClick={prevSlide}>◀</button>
        <div className="carousel-container">
          {produits.map((produit, index) => (
            <div
              key={produit.id}
              className={`product-card ${
                index === currentIndex ? 'active' : ''
              }`}
            >
              <img src={produit.image} alt={produit.nom} />
              <p className="product-name">{produit.nom}</p>
              <p className="product-price">{produit.prix}</p>
            </div>
          ))}
        </div>
        <button className="next" onClick={nextSlide}>▶</button>
      </div>
    </section>
  );
};

export default ProductCarousel;
