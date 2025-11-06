import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__brand">
          <span className="header__logo" data-cursor="#2596be">Instytut Wspierania i Edukacji Pacjentów</span>
          <span className="header__tagline" data-cursor="#8f3608">Edukacja. Wsparcie. Równe szanse.</span>
        </div>
        <nav className="header__nav" aria-label="Główna nawigacja">
          <ul>
            <li><a href="#home" data-cursor="#8f3608">Strona główna</a></li>
            <li><a href="#about" data-cursor="#8f3608">O nas</a></li>
            <li><a href="#podcasts" data-cursor="#8f3608">Podcasty</a></li>
            <li><a href="#debates" data-cursor="#8f3608">Debaty i webinary</a></li>
            <li><a href="#campaigns" data-cursor="#8f3608">Kampanie i projekty</a></li>
          </ul>
        </nav>
        <div className="header__cta-group">
          <a className="header__cta" href="#support" data-cursor="#8f3608">Wesprzyj nas</a>
          <a className="header__cta" href="#contact" data-cursor="#8f3608">Kontakt</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
