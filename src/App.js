import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage'; // 만들 페이지 가져오기
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import ShopPage from './pages/ShopPage';
import DetailPage from './pages/DetailPage';
import Footer from './components/Footer';
import CommunityPage from './pages/CommunityPage';
import CartPage from './pages/CartPage';

import './App.css';

function App() {
  return (

    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/shop" element={<ShopPage/>}/>
        <Route path="/product/:id" element={<DetailPage/>}/> 
        <Route path="/community" element={<CommunityPage/>}/>
        <Route path="/cartPage" element={<CartPage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}



export default App;
