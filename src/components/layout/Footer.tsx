import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">Авточехлы</h3>
            <p className="footer__description">
              Качественные авточехлы для вашего автомобиля с доставкой по всей России.
            </p>
          </div>
          
          <div className="footer__section">
            <h3 className="footer__title">Контакты</h3>
            <ul className="footer__list">
              <li className="footer__list-item">
                <a href="tel:+78001234567" className="footer__link">
                  +7 (800) 123-45-67
                </a>
              </li>
              <li className="footer__list-item">
                <a href="mailto:info@авточехлы.рф" className="footer__link">
                  info@авточехлы.рф
                </a>
              </li>
            </ul>
          </div>
          
          <div className="footer__section">
            <h3 className="footer__title">Информация</h3>
            <ul className="footer__list">
              <li className="footer__list-item">
                <a href="#" className="footer__link">О компании</a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">Доставка и оплата</a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">Возврат и обмен</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Авточехлы. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;