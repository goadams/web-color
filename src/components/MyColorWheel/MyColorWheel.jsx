import React, { useState } from "react";
import ColorWheel from '@uiw/react-color-wheel';
import './MyColorWheel.css';
import { TabList } from '../Tabs';
import ColorComplementary from '../ColorComplementary';
import ColorAnalogous from '../ColorAnalogous';
import ColorMono from '../ColorMono';
import ColorTriad from "../ColorTriad";
import ColorSplit from "../ColorSplit/index.js";
import ColorSquare from "../ColorSquare/index.js";
import ColorTetradic from "../ColorTetradic/index.js";



const MyColorWheel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [color, setColor] = useState({ hex:'#0000ff' });

    const tabs = [
        {id: 'complement', label: 'Complementary', content: <ColorComplementary color={color.hex} /> },
        {id: 'analogous', label: 'Analogous', content: <ColorAnalogous color={color.hex} /> },
        {id: 'monotone', label: 'Monotone', content: <ColorMono color={color.hex} /> },
        {id: 'triadic', label: 'Triadic', content: <ColorTriad color={color.hex} /> },
        {id: 'split', label: 'Split', content: <ColorSplit color={color.hex} /> },
        {id: 'square', label: 'Square', content: <ColorSquare color={color.hex} /> },
        {id: 'tetra', label: 'Tetradic', content: <ColorTetradic color={color.hex} /> },
    ];

    return (
        <div className="color-palette-wrapper">
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
            <div className="harmony-container">
                <h2>Color Palette Select:</h2>
                <TabList
                    tabs={tabs}
                    activeIndex={activeIndex}
                    onTabSelect={setActiveIndex}
                />
                <div className="tab-panel">
                    {tabs.map((tab, index) => (
                        <div key={tab.id} style={{ display: activeIndex === index ? 'block' : 'none' }}>
                            {tab.content}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyColorWheel;