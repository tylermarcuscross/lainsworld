import React, { useState } from 'react';
import toolbarMidTop from '../assets/toolbar_mid_top-0000.png'; // Path to the middle toolbar image
import './TaskbarCenterTop.css';
const TaskbarCenter = () => {
  
  return (
      <div className="taskbarcentertop">
          <img className="toolbar-img" src={toolbarMidTop} alt="Mid Toolbar" draggable="false"/>
      </div>
  );
};

export default TaskbarCenter;