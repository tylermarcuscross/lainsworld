import React, { useState } from 'react';
import './Desktop.css';
import Window from './Window';
import Taskbar from './Taskbar';
import Shortcut from './Shortcut';
import docImage from '../assets/MyDocuments.png';
import binImage from '../assets/RecyclingBin.png';

function Desktop() {

  const [windows, setWindows] = useState({
    recyclingBin: true,
    document: true,
    welcome: true,
  });
  
  const toggleWindow = (windowName) => {
    setWindows((prevWindows) => ({
      ...prevWindows,
      [windowName]: !prevWindows[windowName],
    }));
  };
  return (
    <div className="Desktop">
      {windows.recyclingBin && (
        <Window title="Recycling Bin" x={100} y={200} onClose={() => toggleWindow('recyclingBin')}>
          <p>This is the recycling bin window. You can put anything here :)</p>
        </Window>
      )}
       <Shortcut
        iconImage= {binImage}
        iconLabel="Recycle Bin"
        onDblClick={() => toggleWindow('recyclingBin')}
      />

      <Shortcut
        iconImage= {docImage}
        iconLabel="Documents"
        onDblClick={() => toggleWindow('document')}
      />

      {windows.welcome && (
        <Window title="Welcome Window" x={10} y={50} onClose={() => toggleWindow('welcome')}>
          <p>Hi! This is my website. Welcome!</p>
        </Window>
      )}

      {windows.document && (
        <Window title="Documents" x={200} y={250} onClose={() => toggleWindow('document')}>
          <p>This is the documents window. You can put anything here :)</p>
        </Window>
      )}
      <Taskbar/>
    </div>
  )
}

export default Desktop;