import React from "react";
import hslToHex from "../utils/hslToHex.js";
import hexToHSL from "../utils/hexToHSL.js";
import "../styles/ColorPalettes.css";

function generateTetradicPalette(hex) {
    const base = hexToHSL(hex);
    // Rectangle: 0°, +60°, +180°, +240°
    const angles = [0, 60, 180, 240];
    return angles.map(a => hslToHex((base[0] + a) % 360, base[1], base[2]));
}

const ColorTetradic = ({ color }) => {
    const complementPalette = generateTetradicPalette(color);

    return (
        <>
            <div className="colors-complementary">
                <div className="colors-palette-color" style={{ background: complementPalette[0], width: 100, height: 100 }}></div>
                <div className="colors-palette-color" style={{ background: complementPalette[1], width: 100, height: 100 }}></div>
                <div className="colors-palette-color" style={{ background: complementPalette[2], width: 100, height: 100 }}></div>
                <div className="colors-palette-color" style={{ background: complementPalette[3], width: 100, height: 100 }}></div>
            </div>
            <div className="design-tips">
                <h3>Design Tips:</h3>
                <ul>
                    <li>Pick one color as primary (60–70%), others as secondary/accent (20–30%/10%).</li>
                    <li>Use warm/cool balance for visual harmony.</li>
                    <li>Use for energetic, playful, or diverse branding.</li>
                </ul>
            </div>
        </>
    )
};

export default ColorTetradic;