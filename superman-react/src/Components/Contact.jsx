import '../Styles/Contact.css';


import React, { useState } from 'react';
import arrowDown from "../Assets/logos/icon_flèche_2.png"

const Contact = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Choisissez la fréquence à laquelle vous souhaitez recevoir votre newsletter');
    const [dropdownSelection, setDropdownSelection] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);
    const [selected, setSelected] = useState('');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
        setDropdownSelection(false)
    };

    const toggleDropdown = () => {
        setDropdownSelection(!dropdownSelection);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email && message && checkboxChecked && selectedOption && dropdownSelection) {
            setShowThankYou(true);
        } else {
            alert("Veuillez remplir tous les champs.");
        }
    };

    const closePopup = () => {
        setShowThankYou(false);
    };
    return (
        <div className='contact'>
            <div className='overlay-contact'>
                <div className="forme">
                    <h2 className='contact-title'>PRENOMS CONTACT</h2>
                    <form className='contact-form' onSubmit={handleSubmit}>
                        <label class="titre2" for="email">ADRESSE EMAIL</label> <br />
                        <input type="email" name="email" placeholder="Adresse email" className='contact-email' required onChange={(e) => setEmail(e.target.value)}/> <br />
                        <label class="titre2" for="newsletter">NEWSLETTER</label> <br /><br />
                        <label for="checkbox" style={{ color: "gray" }}>En cochant cette case vous acceptez de recevoir l’actualité concernant les aventures de
                            Batman: </label>
                        <input type="checkbox" name="choix" value="c" className="contact-checkbox" required onChange={(e) => setCheckboxChecked(e.target.checked)}/> <br /><br />
                        <div className="menu_deroulant">
                            <h3 className="choice" onClick={toggleDropdown} style={{ cursor: 'pointer', color :'gray'}}>
                                {selectedOption}
                                <img src={arrowDown} alt="arrowDown" className='arrowDown' /></h3>
                                {dropdownSelection && (
                                    <select onChange={handleOptionChange} value={selectedOption}>
                                        <option value="Une fois par semaine">Une fois par semaine</option>
                                        <option value="Une fois toutes les deux semaines (2 fois par mois)">Une fois toutes les deux semaines (2 fois par mois)</option>
                                        <option value="Une fois par mois">Une fois par mois</option>
                                        <option value="Une fois tous les trois mois">Une fois tous les trois mois</option>
                                        <option value="Une fois tous les six mois"></option>
                                    </select>
                                )}
                        </div>



                        <div className="news">
                            <p className='news-title'>souhaitez vous recevoir des news</p>
                        </div>
                        <div className="radio-container">
                            <label className={`radio-label ${selected === 'films' ? 'active' : ''}`}>
                                <input type="radio" name="category" value="films" checked={selected === 'films'} onChange={() => setSelected('films')} />Des films</label>
                            <label className={`radio-label ${selected === 'comics' ? 'active' : ''}`}>
                                <input type="radio" name="category" value="comics" checked={selected === 'comics'} onChange={() => setSelected('comics')} />Des comics</label>
                            <label className={`radio-label ${selected === 'tout' ? 'active' : ''}`}>
                                <input type="radio" name="category" value="tout" checked={selected === 'tout'} onChange={() => setSelected('tout')} />De tout</label>

                        </div>

                        <label class="titre2">MESSAGE</label> <br />
                        <textarea type="text" placeholder="Laissez un commentaire pour la communauté" className='contact-message' onChange={(e) => setMessage(e.target.value)} /> <br />
                        <input type="submit" value="CONFIRMER" className="btn-submit" />
                    </form>

                </div >
                {showThankYou && (
                    <div className="popup-overlay" onClick={closePopup}>
                        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                            <p>MESSAGE REÇU !</p>
                        </div>
                    </div>
                )}
            </div>

        </div >

    )
}

export default Contact