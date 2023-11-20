import React, { useEffect, useRef } from 'react';
import './DesktopContainer.css';
import Desktop from './Desktop.jsx';
import Taskbar from './Taskbar.jsx';

function DesktopContainer() {
  return (
    <div className="DesktopContainer">
        <div className="DesktopDiv">
            <Desktop></Desktop>
        </div>
    </div>
  );
}

export default DesktopContainer;

