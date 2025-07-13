import React, { useState } from "react";
import ColorWheel from '@uiw/react-color-wheel';
import './ColorPalettes.css';
import { TabList } from '../Tabs';
import ColorPaletteDisplay from "../ColorPaletteDisplay/ColorPaletteDisplay.jsx";
import {
    generateAnalogousPalette,
    generateComplementaryPalette,
    generateSplitPalette,
    generateMonoPalette,
    generateSquarePalette,
    generateTriadicPalette,
    generateTetradicPalette
} from "../utils/paletteGenerators.js";

import paletteTips from "../utils/paletteTips.js";

const ColorPalettes = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [color, setColor] = useState({ hex:'#0000ff' });

    const tabs = [
        {id: 'complement',
            label: 'Complementary',
            content: <ColorPaletteDisplay palette={generateComplementaryPalette(color.hex)} designTips={paletteTips.complementary} /> },
        {id: 'analogous',
            label: 'Analogous',
            content: <ColorPaletteDisplay palette={generateAnalogousPalette(color.hex)} designTips={paletteTips.analogous} /> },
        {id: 'monotone',
            label: 'Monotone',
            content: <ColorPaletteDisplay palette={generateMonoPalette(color.hex)} designTips={paletteTips.mono}  /> },
        {id: 'triadic',
            label: 'Triadic',
            content: <ColorPaletteDisplay palette={generateTriadicPalette(color.hex)} designTips={paletteTips.triadic} /> },
        {id: 'split',
            label: 'Split',
            content: <ColorPaletteDisplay palette={generateSplitPalette(color.hex)} designTips={paletteTips.split} /> },
        {id: 'square',
            label: 'Square',
            content: <ColorPaletteDisplay palette={generateSquarePalette(color.hex)} designTips={paletteTips.square} /> },
        {id: 'tetra',
            label: 'Tetradic',
            content: <ColorPaletteDisplay palette={generateTetradicPalette(color.hex)} designTips={paletteTips.tetradic} /> },
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

export default ColorPalettes;