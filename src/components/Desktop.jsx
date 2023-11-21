import { useState, useRef } from 'react';
import './Desktop.css';
import Window from './Window';
import Taskbar from './Taskbar';
import Shortcut from './Shortcut';
import docImage from '../assets/icons/document.png';
import binImage from '../assets/icons/recycling.png';
import dvdImage from '../assets/icons/dvd.png';
import computerImage from '../assets/icons/computer1.png';
import recorderImage from '../assets/icons/recorder.png';
import TaskbarTop from './TaskbarTop'
import VideoPlayer from './VideoPlayer';

function Desktop() {

  const [windows, setWindows] = useState({
    recyclingBin: false,
    document: false,
    welcome: true,
    store: false,
    dvd: false,
    computer1: false,
    recorder: false,
  });

  const [showVideo, setShowVideo] = useState(true);
  const videoRef = useRef(null);

  const handleVideoPlay = () => {
    setShowVideo(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleVideoEnd = () => {
    setShowVideo(false);
  };
  
  const toggleWindow = (windowName) => {
    setWindows((prevWindows) => ({
      ...prevWindows,
      [windowName]: !prevWindows[windowName],
    }));
  };
  return (
    <div className="DesktopDivWithTaskbars">
    <TaskbarTop></TaskbarTop>
    <div className="Desktop">
       <Shortcut
        iconImage= {binImage}
        iconLabel="Recycle Bin"
        onDblClick={() => toggleWindow('recyclingBin')}
        x={3} 
        y={0}
      />
      <Shortcut
        iconImage= {dvdImage}
        iconLabel="DVD Player"
        onDblClick={() => toggleWindow('dvd')}
        x={101}
        y={63}
      />
      <Shortcut
        iconImage= {computerImage}
        iconLabel="Computer Icon <3"
        onDblClick={() => toggleWindow('computer1')}
        x={83}
        y={0}
      />
      <Shortcut
        iconImage= {docImage}
        iconLabel="Documents"
        onDblClick={() => toggleWindow('document')}
        x={9}
        y={63}
      />
      <Shortcut
        iconImage= {recorderImage}
        iconLabel="Recorder Icon"
        onDblClick={() => toggleWindow('recorder')}
        x={194}
        y={0}
      />
      {windows.welcome && (
        <Window title="Welcome Window" x={268} y={135} onClose={() => toggleWindow('welcome')}>
          <p>Hi! I'm Tyler and this is my website. Welcome!</p>
        </Window>
      )}

      {windows.document && (
        <Window title="Documents" x={200} y={250} onClose={() => toggleWindow('document')}>
          <p>This is the documents window. You can put anything here :)</p>
        </Window>
      )}
      {windows.recyclingBin && (
        <Window title="Recycling Bin" x={382} y={365} onClose={() => toggleWindow('recyclingBin')}>
          <p>This is the recycling bin window. Remember to follow your recycling rules!</p>
        </Window>
      )}
      {windows.computer1 && (
        <Window title="Computer Window" x={100} y={200} onClose={() => toggleWindow('computer1')}>
          <p>This is the computer icon window. Imagine what files could be here...</p>
        </Window>
      )}
      {windows.recorder && (
        <Window title="Recorder Window" x={355} y={20} onClose={() => toggleWindow('recorder')}>
          <p>This is the recording icon window. Some cool recordering abilities will be found here soon.</p>
        </Window>
      )}
      {windows.dvd && (
        <Window title="DVD Window" x={355} y={20} onClose={() => toggleWindow('dvd')}>
          <p>This is the DVD icon window. Here are some cool animations.</p>
        </Window>
      )}
      {showVideo && <VideoPlayer videoRef={videoRef} onVideoEnd={handleVideoEnd} />}
    </div>
    <Taskbar onVideoPlay={handleVideoPlay} ></Taskbar>
    </div>
  )
}

export default Desktop;