import React, { useState } from 'react';
import './Desktop.css';
import Window from './Window';
import Taskbar from './Taskbar';
import Shortcut from './Shortcut';
import docImage from '../assets/00025.png';
import binImage from '../assets/00038.png';
import dvdImage from '../assets/00020.png';
import computerImage from '../assets/00021.png';
import recorderImage from '../assets/00022.png';
import computerImage2 from '../assets/00023.png';


function Desktop() {

  const [windows, setWindows] = useState({
    recyclingBin: true,
    document: true,
    welcome: true,
    store: true,
    dvd: true,
    computer1: true,
    recorder: true,
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
        iconImage= {dvdImage}
        iconLabel="DVD Player"
        onDblClick={() => toggleWindow('dvd')}
      />
      <Shortcut
        iconImage= {computerImage}
        iconLabel="Computer Icon <3"
        onDblClick={() => toggleWindow('computer1')}
      />
      <Shortcut
        iconImage= {docImage}
        iconLabel="Documents"
        onDblClick={() => toggleWindow('document')}
      />
      <Shortcut
        iconImage= {recorderImage}
        iconLabel="Recorder Icon"
        onDblClick={() => toggleWindow('recorder')}
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