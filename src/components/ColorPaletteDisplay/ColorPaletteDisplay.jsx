import React from "react";
import "./ColorPaletteDisplay.css"

const  ColorPaletteDisplay = ({ palette, designTips }) => (
    <>
        <div className="colors-complementary">
            {palette.map((color, i) => (
                <div key={color + i}>
                    <p>{color}</p>
                    <div
                        className="colors-palette-color"
                        style={{ background: color, width: 100, height: 100 }}
                    ></div>
                </div>
            ))}
        </div>
        <div className="design-tips">
            <h3>Design Tips:</h3>
            <ul>
                {designTips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                ))}
            </ul>
        </div>
    </>
);

export default ColorPaletteDisplay;