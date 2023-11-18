import React, { useEffect, useRef } from 'react';
import './DesktopContainer.css';
import Desktop from './Desktop.jsx';

function DesktopContainer() {
    const desktopRef = useRef(null);

    useEffect(() => {
        desktopRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, []);
  return (
    <div className="DesktopContainer">
        <div ref={desktopRef} className="DesktopDiv">
            <Desktop></Desktop>
        </div>
    </div>
  );
}

export default DesktopContainer;

