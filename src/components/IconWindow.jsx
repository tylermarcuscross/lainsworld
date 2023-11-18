import React, { useState } from 'react';
import './Desktop.css';
import Window from './Window';
import RecyclingBin from './RecyclingBin';
import DocumentIcon from './DocumentIcon';

function IconWindow() {
  const [isRecyclingBinWindowOpen, setIsRecyclingBinWindowOpen] = useState(false);
  const [isDocumentWindowOpen, setIsDocumentWindowOpen] = useState(false);
  const [isWelcomeWindowVisible, setWelcomeWindowVisible] = useState(true);
  const toggleRecyclingBinWindow = () => {
    setIsRecyclingBinWindowOpen(!isRecyclingBinWindowOpen);
  };
  const toggleDocumentWindow = () => {
    setIsDocumentWindowOpen(!isDocumentWindowOpen);
  };
  const closeWelcomeWindow = () => {
      setWelcomeWindowVisible(!isWelcomeWindowVisible);
  };
  const closeDocumentWindow = () => {
    setIsDocumentWindowOpen(!isDocumentWindowOpen);
  };
  const closeRecyclingBinWindow = () => {
    setIsRecyclingBinWindowOpen(!isRecyclingBinWindowOpen);
  };
  
  return (
    <div className="Desktop">

      <DocumentIcon 
        iconLabel="Documents" 
        right="5px"
        top="100px"
        onDblClick={toggleDocumentWindow} // Now DocumentIcon will also open a window on double-click
      />

      <RecyclingBin
        iconLabel="Recycle Bin" 
        right="5px" 
        top="10px"
        onDblClick={toggleRecyclingBinWindow} // Assuming RecyclingBin accepts an onClick prop
      />
      
      {isRecyclingBinWindowOpen && (
        <Window title="Recycling Bin" x={100} y={200} onClose={closeRecyclingBinWindow} >
          <p>This is the recycling bin window. You can put anything here :)</p>
        </Window>
      )}
      {isWelcomeWindowVisible && (<Window title="Welcome Window" x={10} y={50} onClose={closeWelcomeWindow}>
      <p>Hi! This is my website. Welcome! </p>
      <></>
      </Window>)}

      {isDocumentWindowOpen && (
        <Window title="Documents" x={200} y={250} onClose={closeDocumentWindow}>
          <p>This is the documents window. You can put anything here :)</p>
        </Window>)}

      <Taskbar />
    </div>
  );
}

export default IconWindow;