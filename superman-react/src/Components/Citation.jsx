import '../Styles/Citation.css';

import React, { useState, useEffect } from 'react';
import quoteLeft from '../Assets/logos/icon_guillemets_1.png';
import quoteRight from '../Assets/logos/icon_guillemets_2.png';

const quotes = [
    {
        text: "- Que représente le S ?",
        subText: "- Ce n’est pas un S. Sur ma planète cela signifie espoir.",
        author: "Man Of Steel, Lois Lane et Clark Kent.",

    },
    {
        text: "Il y eu des temps célestes, les temps d’avant, emplit de merveilles : des diamants de la plus belle eau. Plus dure est la chute, la chute sur Terre, et ce qui chute est déchu. Dans mon rêve, elles m’emportaient vers la lumière. Sublime mensonge !",
        subText: "",
        author: "Batman v Superman : l’Aube de la Justice, Batman.",

    }, {
        text: "Vous félicitez le plus grand criminel de tous les temps ? Vous ne pouvez pas dire « brillant » ? Non, ce serait trop banal, je vous l’accorde. Charismatique, génie surdoué.",
        subText: "- Moi, je dirais « tordu ».",
        author: "Superman, Lex Luthor et Eve Teschmacher. ",

    },
    {
        text: "- Que représente le S ?",
        subText: "- Ce n’est pas un S. Sur ma planète cela signifie espoir.",
        author: "Man Of Steel, Lois Lane et Clark Kent.",

    },
    {
        text: "Il y eu des temps célestes, les temps d’avant, emplit de merveilles : des diamants de la plus belle eau. Plus dure est la chute, la chute sur Terre, et ce qui chute est déchu. Dans mon rêve, elles m’emportaient vers la lumière. Sublime mensonge !",
        subText: "",
        author: "Batman v Superman : l’Aube de la Justice, Batman.",

    }, {
        text: "Vous félicitez le plus grand criminel de tous les temps ? Vous ne pouvez pas dire « brillant » ? Non, ce serait trop banal, je vous l’accorde. Charismatique, génie surdoué.",
        subText: "- Moi, je dirais « tordu ».",
        author: "Superman, Lex Luthor et Eve Teschmacher. ",

    },
    {
        text: "- Que représente le S ?",
        subText: "- Ce n’est pas un S. Sur ma planète cela signifie espoir.",
        author: "Man Of Steel, Lois Lane et Clark Kent.",

    },
    {
        text: "Il y eu des temps célestes, les temps d’avant, emplit de merveilles : des diamants de la plus belle eau. Plus dure est la chute, la chute sur Terre, et ce qui chute est déchu. Dans mon rêve, elles m’emportaient vers la lumière. Sublime mensonge !",
        subText: "",
        author: "Batman v Superman : l’Aube de la Justice, Batman.",

    }, {
        text: "Vous félicitez le plus grand criminel de tous les temps ? Vous ne pouvez pas dire « brillant » ? Non, ce serait trop banal, je vous l’accorde. Charismatique, génie surdoué.",
        subText: "- Moi, je dirais « tordu ».",
        author: "Superman, Lex Luthor et Eve Teschmacher. ",

    },
]

const Citation = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className='citation-container'>
            <img src={quoteLeft} alt="quote-left" className='quote-left' />
            <div className='quote-container'>
                <div className="quote-content">
                    <p className="quote-text">{quotes[activeIndex].text}</p>
                    <p className="quote-subtext">{quotes[activeIndex].subText}</p>
                    <p className="quote-author">{quotes[activeIndex].author}</p>
                </div>
                <div className="pagination-dots">
                    {quotes.map((_,index)=>(
                        <p key={index} className={`dot ${index ===activeIndex ? 'active' : ''}`}></p>
                    ))}
               
            </div>
            </div>
                <img src={quoteRight} alt="quote-right" className='quote-right'/>
        </div>
    )
}

export default Citation