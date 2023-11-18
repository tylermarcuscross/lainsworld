import React, { useState } from 'react';
import './Taskbar.css'; // Make sure this path is correct
import leftToolbarImage from '../assets/toolbar_left-0000.png'; // Path to the left toolbar default image
import leftToolbarClickedImage from '../assets/toolbar_left_clicked-0000.png'; // Path to the clicked image
import rightToolbarImage from '../assets/toolbar_right-0000.png'; // Path to the right toolbar default image
import rightToolbarClickedImage from '../assets/toolbar_right_clicked-0000.png'; // Path to the clicked image
import NewClock from './NewClock';
import TaskbarCenter from './TaskbarCenter';

const Taskbar = () => {
  const [leftImage, setLeftImage] = useState(leftToolbarImage);
  const [rightImage, setRightImage] = useState(rightToolbarImage);

  // Handlers for left toolbar
  const handleLeftMouseDown = () => setLeftImage(leftToolbarClickedImage);
  const handleLeftMouseUp = () => setLeftImage(leftToolbarImage);

  // Handlers for right toolbar
  const handleRightMouseDown = () => setRightImage(rightToolbarClickedImage);
  const handleRightMouseUp = () => setRightImage(rightToolbarImage);

  return (
    <div className="taskbar">
      <div className="toolbar left-toolbar" onMouseDown={handleLeftMouseDown} onMouseUp={handleLeftMouseUp} onMouseLeave={handleLeftMouseUp}>
        <img src={leftImage} alt="Left Toolbar" draggable="false" />
      </div>
      {/* <div className="toolbar mid-toolbar">
          <NewClock></NewClock><img src={toolbarMid} alt="Mid Toolbar" draggable="false"/>
      </div> */}
      <TaskbarCenter></TaskbarCenter>
      <div className="toolbar right-toolbar" onMouseDown={handleRightMouseDown} onMouseUp={handleRightMouseUp} onMouseLeave={handleRightMouseUp} draggable="false">
        <img src={rightImage} alt="Right Toolbar" draggable="false" />
      </div>
    </div>
  );
};

export default Taskbar;
