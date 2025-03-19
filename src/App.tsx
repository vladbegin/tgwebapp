import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTelegram } from './hooks/useTelegram';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const App: React.FC = () => {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App; 