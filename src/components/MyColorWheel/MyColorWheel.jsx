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
                pointer={({ color, style }) => (
                    <div style={style}>
                        <div
                            style={{
                                width: 24,    // Set your desired width
                                height: 24,   // Set your desired height
                                transform: 'translate(-12px, -12px)', // Center the circle
                                borderRadius: '50%',
                                border: '2px solid #fff',
                                background: color,
                                boxShadow: '0 0 4px rgba(0,0,0,0.3)',
                            }}
                        />
                    </div>
                )}
            />
            <p className="color-wheel-selected">{color.hex.toUpperCase()}</p>
            <div className="color-wheel-color"
                style={{backgroundColor: color.hex}}>
            </div>
        </div>
    );
};

export default MyColorWheel;