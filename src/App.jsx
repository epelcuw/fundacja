import React from 'react';
import './App.css';
import Header from './components/Header';
import ScrollContainer from './components/ScrollContainer';
import BackgroundScene from './scenes/BackgroundScene';
import SceneManager from './scenes/SceneManager';

const App = () => {
  return (
    <div className="app">
      <Header />
      <ScrollContainer>// ...existing code...
import React from 'react';
import './App.css';
import Header from './components/Header';
import ScrollContainer from './components/ScrollContainer';
import BackgroundScene from './scenes/BackgroundScene';
import SceneManager from './scenes/SceneManager';

const App = () => {
  return (
    <div className="app">
      <Header />
      <ScrollContainer>
        {/* 3D background canvas (fixed, behind content) */}
        <BackgroundScene />

        {/* main content — sekcje potrzebne do scrollowania i testów animacji */}
        <main className="content">
          <section id="hero" className="hero section">
            <div className="container">
              <h1>Greenscreen Studio — pokaż się profesjonalnie</h1>
              <p>Test sekcji HERO — przewiń, aby zobaczyć reakcję tła 3D.</p>
            </div>
          </section>

          <section id="studio" className="section">
            <div className="container">
              <h2>Studio</h2>
              <p>Opis studia, sprzętu i możliwości — ta sekcja mapuje się na środek animacji.</p>
              <p>Dodaj więcej treści by wydłużyć scroll i umożliwić pełne przetestowanie animacji.</p>
            </div>
          </section>

          <section id="oferta" className="section">
            <div className="container">
              <h2>Oferta</h2>
              <ul>
                <li>Greenscreen i cyklorama</li>
                <li>Rejestracja 4K</li>
                <li>Postprodukcja</li>
              </ul>
            </div>
          </section>

          <section id="klienci" className="section">
            <div className="container">
              <h2>Dla kogo</h2>
              <p>Trenerzy, twórcy kursów, firmy — test sekcji końcowej.</p>
            </div>
          </section>

          <section id="kontakt" className="section final-cta">
            <div className="container">
              <h2>Kontakt</h2>
              <p>Zadzwoń lub napisz, aby umówić sesję.</p>
              <a href="tel:+48783912122" className="btn primary">📞 Dzwoń</a>
            </div>
          </section>
        </main>

        {/* lightweight scene manager (placeholder for future keyframes) */}
        <SceneManager />
      </ScrollContainer>
    </div>
  );
};

export default App;
