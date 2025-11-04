import React from 'react';
import './HandGraphic.css';
import alphaPink from '../assets/alfapink.jpg';
import alphaBlue from '../assets/alfablue.jpg';

const HandGraphic = ({ color = '#572cf2', className = '', flip = false }) => {
  return (
    <div
      className={`hand-graphic${className ? ` ${className}` : ''}${flip ? ' hand-graphic--flip' : ''}`}
      style={{ '--hand-accent': color }}
      aria-hidden="true"
    >
      <div className="hand-graphic__layer hand-graphic__layer--pink">
        <img src={alphaPink} alt="" loading="lazy" />
      </div>
      <div className="hand-graphic__layer hand-graphic__layer--blue">
        <img src={alphaBlue} alt="" loading="lazy" />
      </div>
      <div className="hand-graphic__outline" />
    </div>
  );
};

export default HandGraphic;
