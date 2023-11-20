import React, { useState } from 'react';
import './App.css';
import DesktopContainer from './components/DesktopContainer.jsx';

function App() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  const handleVideoShow = () => {
    setShowVideo(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  
  return (
    <DesktopContainer></DesktopContainer>
  );
}

export default App;

