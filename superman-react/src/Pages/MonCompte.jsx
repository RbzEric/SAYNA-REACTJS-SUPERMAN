import "../Styles/MonCompte.css";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const togglePopup = () => {
    setIsOpen(true);
  };
  const closePopup = () => {
    setIsOpen(false);
  }

  const confirmLogOut = () => {
    navigate('/login')
  }

  return (
    <section class="account">
      <div class="account-header">
        <h1 className="monCompte-intro">SERIEZ-VOUS KRYPTONIEN ? <br />DITES NOUS EN PLUS
        </h1>
      </div>
      <div class="account-texte">
        <div class="account-left">
          <ul className="list-account">
            <li className="un">Mes informations</li>
            <li>Historique des commandes</li>
            <li>Mes avis</li>
            <li>Mes favoris</li>
          </ul>
          <button class="account-btn" onClick={togglePopup}>
            Déconnexion
          </button>
          {isOpen && (
            <div className="popup-overlay">
              <div className="popup-content">
                <p className="closePopup" onClick={closePopup}>X</p>
                <p className="popup-texte">Êtes vous sûr.e de vouloir vous déconnecter ?</p> <br />
                <button className="account-btn" onClick={confirmLogOut} >CONFIRMER</button>
              </div>
            </div>
          )}
        </div>
        <div class="ligne-vertical">
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div class="account-right">
          {!isEditing ? (
            <div class="informations">
              <h2 class="info">Informations personnelles</h2>
              <label htmlFor="Name">Nom :</label>
              <input type="text" name="name" id="con" placeholder="Lorem ipsum dolor sit amet," /> <br />
              <label htmlFor="Firstname">Prenom :</label>
              <input type="text" name="Firstname" id="con" placeholder="Lorem ipsum dolor sit amet," /><br />
              <label htmlFor="Password">Mot de passe :</label>
              <input type="password" name="password" id="con" placeholder="Lorem ipsum dolor sit amet," /> <br />
              <label htmlFor="Email">Email : </label>
              <input type="email" name="email" id="con" placeholder="Lorem ipsum dolor sit amet," /> <br />
              <label htmlFor="">Numero de téléphone :</label>
              <input type="tel" name="tel" id="con" placeholder="Lorem ipsum dolor sit amet," /> <br />
              <label htmlFor="">Adresse de livraison : </label>
              <input type="text" name="adress" id="con" placeholder="Lorem ipsum dolor sit amet," /> <br />
              <label htmlFor="">Adresse de facturation :</label>
              <input type="text" name="adress" id="con" placeholder="Lorem ipsum dolor sit amet," /> <br />

              <button class="account-btn" onClick={handleEditClick}>MODIFIER</button>
            </div>
          ) : (
            <div className="FormulaireModification">
              <h2 class="info">Informations personnelles</h2>
              <label htmlFor="Name">Nom :</label>
              <input type="text" name="name" id="com" /> <br /> <br />
              <label htmlFor="Firstnmae">Prenom :</label>
              <input type="text" name="Firstname" id="com" /><br /> <br />
              <p>Note :Si vous modifier votre mot de passe vous devrez vous reconnecter à votre compte <br />avec votre nouveau mot de passe</p> <br /> <br />
              <label htmlFor="Email">Identifiant :</label>
              <input type="email" name="email" id="comId" placeholder="" /> <br /> <br />
              <label htmlFor="">Ancien mot de passe: </label>
              <input type="password" name="" id="com" /> <br /> <br />
              <label htmlFor="">Nouveau mot de passe :</label>
              <input type="password" name="" id="com" /> <br /> <br />
              <label htmlFor="">Confirmer votre nouveau mot de passe :</label>
              <input type="password" name="" id="com" /> <br /><br />

              <button class="account-btn" onClick={handleSaveClick}>ENREGISTRER</button>
            </div>
          )}

          <div class="newsletter">
            <h2 class="info">Newsletter</h2>
            <p className="newsletter-text">
              Abonnez vous à la newsletter ! Ne ratez pas nos offres
              exceptionnels sur votre article préféré !
            </p>
            <div className="checkbox-group">
              <ul>
                <li><input type="checkbox" value="oui" /><label>Oui</label></li>
                <li><input type="checkbox" value="Non" /><label>Non</label></li>
              </ul>
            </div>

            <button class="account-btn">ENREGISTRER</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
