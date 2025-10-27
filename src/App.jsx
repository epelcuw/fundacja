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
        <BackgroundScene />
        <SceneManager />
      </ScrollContainer>
    </div>
  );
};

export default App;