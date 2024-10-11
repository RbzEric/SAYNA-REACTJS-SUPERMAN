import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../src/Components/NavBar';
import ESHOP from './Pages/Eshop';
import Home from './Pages/Home';
import AddProduit from './Components/Addproduit';
import Login from './Components/Login';
import Footer from '../src/Components/Footer';
import MonCompte from './Pages/MonCompte';
import Signup from './Components/Signup';
import FicheProduit from './Components/FicheProduit';
import RecapPanier from '../src/Components/RecapPanier';
import RecapCommande from './Components/RecapCommande';
import { AuthProvider } from './Components/AuthContext';
import LoginOrSignup from './Components/LoginOrSignup';
import BuyWithAccount from './Components/BuyWithAccount';
import BuyWithoutAccount from './Components/BuyWithoutAccount';
import ConfirmBuy from './Components/ConfirmBuy';
import '../src/Styles/App.css';
import { CartProvider } from './Components/CartContext';
import IconSocial from './Components/iconSocial';

const App = () => {
  return (
    <CartProvider>
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eshop" element={<ESHOP />}> </Route>
          <Route path="AddProduit" element={<AddProduit />}></Route>
          <Route path="produit/:id" element={<FicheProduit />}></Route>
          <Route path='/recapPanier' element={<RecapPanier />}></Route>
          <Route path="/recapCommande" element={<RecapCommande />} />
          <Route path="/LoginOrSignup" element={<LoginOrSignup />} />
          <Route path='/paidWithAccount' element={<BuyWithAccount />}></Route>
          <Route path='/paidWithoutAccount' element={< BuyWithoutAccount />}></Route>
          <Route path='/confirmBuy' element={< ConfirmBuy />}></Route>
          <Route path='/login' element={<Login />} />
          <Route path='/monCompte' element={<MonCompte />} />
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='iconSocial' element={<IconSocial />}> </Route>
        </Routes>
        <Footer />
      </Router>

    </AuthProvider>
    </CartProvider>
  )
}

export default App
