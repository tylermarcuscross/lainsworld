import { useState } from 'react';
import './Taskbar.css'; // Make sure this path is correct
import leftToolbarImage from '../assets/toolbar/toolbar_left-0000.png'; // Path to the left toolbar default image
import leftToolbarClickedImage from '../assets/toolbar/toolbar_left_clicked-0000.png'; // Path to the clicked image
import rightToolbarImage from '../assets/toolbar/toolbar_right-0000.png'; // Path to the right toolbar default image
import rightToolbarClickedImage from '../assets/toolbar/toolbar_right_clicked-0000.png'; // Path to the clicked image
import TaskbarCenter from './TaskbarCenter';

const Taskbar = ({onVideoPlay}) => {
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
      <div className="toolbar left-toolbar" onClick={onVideoPlay} onMouseDown={handleLeftMouseDown} onMouseUp={handleLeftMouseUp} onMouseLeave={handleLeftMouseUp}>
        <img src={leftImage} alt="Left Toolbar" draggable="false" />
      </div>
      <TaskbarCenter></TaskbarCenter>
      <div className="toolbar right-toolbar" onMouseDown={handleRightMouseDown} onMouseUp={handleRightMouseUp} onMouseLeave={handleRightMouseUp} draggable="false">
        <img src={rightImage} alt="Right Toolbar" draggable="false" />
      </div>
    </div>
  );
};

export default Taskbar;
