import React from "react";
import hslToHex from "../utils/hslToHex.js";
import hexToHSL from "../utils/hexToHSL.js";
import "../styles/ColorPalettes.css"

function generateComplementaryPalette(hex) {
    const base = hexToHSL(hex);
    const complementHue = (base.h + 180) % 360;
    return [
        hslToHex(base.h, base.s, base.l),                        // Base
        hslToHex(complementHue, base.s, base.l),                 // Complement
        hslToHex(base.h, base.s, Math.min(base.l + 20, 100)),    // Lighter base
        hslToHex(complementHue, base.s, Math.min(base.l + 20, 100)), // Lighter complement
        hslToHex(base.h, base.s, Math.max(base.l - 20, 0)),      // Darker base
    ];
}


const ColorComplementary = ({ color }) => {
    const complementPalette = generateComplementaryPalette(color);

    return (
        <div className="colors-complementary">
            <div className="colors-palette-color" style={{ background: complementPalette[0], width: 100, height: 100 }}></div>
            <div className="colors-palette-color" style={{ background: complementPalette[1], width: 100, height: 100 }}></div>
            <div className="colors-palette-color" style={{ background: complementPalette[2], width: 100, height: 100 }}></div>
            <div className="colors-palette-color" style={{ background: complementPalette[3], width: 100, height: 100 }}></div>
            <div className="colors-palette-color" style={{ background: complementPalette[4], width: 100, height: 100 }}></div>
        </div>
    )
};

export default ColorComplementary;