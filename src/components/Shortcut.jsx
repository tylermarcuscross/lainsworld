import React, { useState } from 'react';
import Draggable from 'react-draggable';
import './Shortcut.css'

function Shortcut({ iconImage, iconLabel, x, y, onDblClick }) {
  const [isDragging, setIsDragging] = useState(false);
  const onStart = () => setIsDragging(true);
  const onStop = () => setIsDragging(false);
  const nodeRef = React.useRef(null);
  const iconClass = isDragging ? "shortcut dragging" : "shortcut";
  const dragHandle = "drag-handle-shortcut";

  const shortcutStyle = {
    left: `${x}px`,
    top: `${y}px`,
    position: 'absolute'
  };

  return (
    <Draggable onStart={onStart} onStop={onStop} nodeRef={nodeRef} handle={`.${dragHandle}`} bounds="parent">
      <div ref={nodeRef} className={iconClass} onDoubleClick={onDblClick} style={shortcutStyle}>
        <img className={dragHandle} src={iconImage} alt={iconLabel} draggable="false"/>
        <p className={dragHandle}>{iconLabel}</p>
      </div>
    </Draggable>
  );
}

export default Shortcut;

