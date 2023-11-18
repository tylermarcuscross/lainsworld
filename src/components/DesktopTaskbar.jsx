import React, { useState } from 'react';
import './DesktopTaskbar.css';
import Taskbar from './Taskbar';
import Desktop from './Desktop'

function DesktopTaskbar() {
  return (
    <div className="DesktopTaskbar">
      <Desktop />
      <Taskbar />
    </div>
  )
}

export default DesktopTaskbar;