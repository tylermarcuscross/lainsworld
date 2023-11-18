import React, { useState } from 'react';
import toolbarMid from '../assets/toolbar_mid.bmp'; // Path to the middle toolbar image
import NewClock from './NewClock';
import './TaskbarCenter.css';

const TaskbarCenter = () => {
  
  return (
      <div className="taskbarcenter">
          <img className="toolbar-img" src={toolbarMid} alt="Mid Toolbar" draggable="false"/>
          {/* The NewClock component will be pushed to the right by flexbox */}
          <NewClock className = 'newclock'></NewClock>
      </div>
  );
};

export default TaskbarCenter;
