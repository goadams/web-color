import React, { useState } from "react";
import ColorWheel from '@uiw/react-color-wheel';
import './MyColorWheel.css';

const MyColorWheel = () => {
    const [color, setColor] = useState({ hex:'#0000ff' });

    return (
        <div className="color-wheel-container">
            <ColorWheel
                color={color.hex}
                onChange={setColor}
                style={{ width: 200, height: 200 }}
            />
            <p className="color-wheel-selected">{color.hex.toUpperCase()}</p>
            <div className="color-wheel-color"
                style={{backgroundColor: color.hex}}>
            </div>
        </div>
    );
};

export default MyColorWheel;