import React from "react";
import hslToHex from "../utils/hslToHex.js";
import hexToHSL from "../utils/hexToHSL.js";
import "../styles/ColorPalettes.css";

function generateAnalogousPalette(hex, count = 5, angle = 15) {
    const base = hexToHSL(hex);
    const palette = [];
    const half = Math.floor(count / 2);

    for (let i = -half; i <= half; i++) {
        const hue = (base[0] + i * angle + 360) % 360;
        palette.push(hslToHex(hue, base[1], base[2]));
    }
    return palette;
}

const ColorAnalogous = ({ color }) => {
    const analogousPalette = generateAnalogousPalette(color);

    return (
        <>
            <div className="colors-complementary">
                <div className="colors-palette-color" style={{ background: analogousPalette[0], width: 100, height: 100 }}></div>
                <div className="colors-palette-color" style={{ background: analogousPalette[1], width: 100, height: 100 }}></div>
                <div className="colors-palette-color" style={{ background: analogousPalette[2], width: 100, height: 100 }}></div>
                <div className="colors-palette-color" style={{ background: analogousPalette[3], width: 100, height: 100 }}></div>
                <div className="colors-palette-color" style={{ background: analogousPalette[4], width: 100, height: 100 }}></div>
            </div>
            <div className="design-tips">
                <h3>Design Tips:</h3>
                <ul>
                    <li>Use one as the dominant color, others as accents.</li>
                    <li>Best for calm, cohesive interfaces or to evoke a specific mood.</li>
                    <li>Ensure enough contrast for readability by adjusting lightness or adding neutrals.</li>
                    <li>Great for backgrounds, gradients, and soft highlights.</li>
                </ul>
            </div>
        </>
    )
};

export default ColorAnalogous;