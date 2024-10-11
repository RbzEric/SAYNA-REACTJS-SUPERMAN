import "../Styles/Login.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../Components/Config';
import Google from "../Assets/logos/logo_8.png";
import Apple from "../Assets/logos/logo_7.png";
import fbIcon from "../Assets/logos/logo_4.2.png";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlelogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setEmail('');
        setPassword('');
        setError('');
        navigate('/monCompte');
      })
      .catch(err => setError(err.message))
  }
  return (
    <div className="login-container">
      <div className="login-overlay">
        <div className="connexion-texte">
          <h1>Connexion</h1>
          <p className="stitle">
            Vous n'avez pas encore de compte?{" "}
            <span>
              <Link to="/signup">Inscrivez vous ici</Link>
            </span>
          </p>
          <form action="" className="con-info" autoComplete="off" onSubmit={handlelogin}>
            <label htmlFor="email">Identifiant</label> <br />
            <input type="email" name="" id="con-email" placeholder="email" required onChange={(e) => setEmail(e.target.value)} value={email} /> <br />
            <label htmlFor="password">Mot de passe</label> <br />
            <input type="password" name="" id="con-mdp" placeholder="mot de passe" required onChange={(e) => setPassword(e.target.value)} value={password} />
            <p className="forgot-mdp">Mot de passe oublié</p>
            <div className="lign1"></div>
            <button className="con-btn ">VALIDER</button>
            <p>Connectez vou avec</p>
            {error && <div className="error-msg">{error}</div>}
            <div className="lign2"></div>
            <Link to="">
              <img src={Google} alt="" className="con-icon" />
            </Link>
            <Link to="">
              <img src={Apple} alt="" className="con-icon" />
            </Link>
            <Link to="">
              <img src={fbIcon} alt="" className="con-icon" />
            </Link>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Login;
