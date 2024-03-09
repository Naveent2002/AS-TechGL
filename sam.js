import React, { useState } from 'react';
import './sam.css';
import AnimatedCursor from "react-animated-cursor";


const Dashboard = () => {
  const [mouseAction, setMouseAction] = useState('');

  const handleMouseClick = () => {
    setMouseAction('Clicked');
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    setMouseAction('Right-clicked');
  };

  const handleDoubleClick = () => {
    setMouseAction('Double-clicked');
  };

  const handleMouseEnter = () => {
    setMouseAction('Mouse entered');
  };

  const handleMouseLeave = () => {
    setMouseAction('Mouse left');
  };

  const handleMouseOver = () => {
    setMouseAction('Mouse over');
  };

  const handleMouseOut = () => {
    setMouseAction('Mouse out');
  };

  return (
    <div className="dashboard">
        <AnimatedCursor />
      <div
        className="box"
        onClick={handleMouseClick}
        onContextMenu={handleContextMenu}
        onDoubleClick={handleDoubleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <span className="text">Mouse Events Example</span>
      </div>
      <p className={`lifePa ${mouseAction ? 'show' : ''}`}>{mouseAction}</p>
    </div>
  );
};

export default Dashboard;
