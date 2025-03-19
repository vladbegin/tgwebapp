import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useTelegram } from '@/hooks/useTelegram';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { user, onClose } = useTelegram();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <h1>Авточехлы</h1>
        </Link>
        
        <nav className="header__nav">
          <Link to="/" className="header__nav-item">Главная</Link>
          <Link to="/catalog" className="header__nav-item">Каталог</Link>
        </nav>
        
        <div className="header__actions">
          <button 
            className="header__cart-button"
            onClick={handleCartClick}
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M3 6H21" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            {totalItems > 0 && (
              <span className="header__cart-count">{totalItems}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;