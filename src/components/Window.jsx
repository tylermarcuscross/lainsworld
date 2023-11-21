import React from 'react';
import './Window.css';
import Draggable from 'react-draggable';

const Window = ({ title, children, x, y, onClose }) => {
    const windowStyle = {
        left: `${x}px`,
        top: `${y}px`,
        position: 'absolute' // Use absolute or fixed depending on your needs
    };
    const nodeRef = React.useRef(null);
    const dragHandle = "drag-handle-window";
    return (
        <Draggable nodeRef={nodeRef} handle={`.${dragHandle}`} bounds="parent">
            <div ref={nodeRef} className="window" style={windowStyle}>
                <div className={dragHandle}>
                    {title} <button onClick={onClose} className="exit-button">X</button>
                </div>
                <div className="window-content">{children}</div>
            </div>
        </Draggable>
    );
};

export default Window;
