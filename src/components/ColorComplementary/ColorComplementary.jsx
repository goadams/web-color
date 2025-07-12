import React from "react";
import hslToHex from "../utils/hslToHex.js";
import hexToHSL from "../utils/hexToHSL.js";
import "../styles/ColorPalettes.css";

function generateComplementaryPalette(hex) {
    const base = hexToHSL(hex);
    const complementHue = (base[0] + 180) % 360;
    return [
        hslToHex(base[0], base[1], base[2]),                        // Base
        hslToHex(complementHue, base[1], base[2]),                 // Complement
        hslToHex(base[0], base[1], Math.min(base[2] + 20, 100)),    // Lighter base
        hslToHex(complementHue, base[1], Math.min(base[2] + 20, 100)), // Lighter complement
        hslToHex(base[0], base[1], Math.max(base[2] - 20, 0)),      // Darker base
    ];
}


const ColorComplementary = ({ color }) => {
    const complementPalette = generateComplementaryPalette(color);

    return (
        <>
            <div className="colors-complementary">
                <div className="colors-palette-color" style={{ background: complementPalette[0], width: 100, height: 100 }}></div>
                <div className="colors-palette-color" style={{ background: complementPalette[1], width: 100, height: 100 }}></div>
                <div className="colors-palette-color" style={{ background: complementPalette[2], width: 100, height: 100 }}></div>
                <div className="colors-palette-color" style={{ background: complementPalette[3], width: 100, height: 100 }}></div>
                <div className="colors-palette-color" style={{ background: complementPalette[4], width: 100, height: 100 }}></div>
            </div>
            <div className="design-tips">
                <h3>Design Tips:</h3>
                <ul>
                    <li>Use the 60-30-10 rule: one color dominates, the complement accents, and a neutral balances.</li>
                    <li>Ideal for drawing attention to key actions (like CTAs).</li>
                    <li>Ideal for drawing attention to key actions (like CTAs).</li>
                    <li>Use sparingly to avoid visual tension; too much can be jarring.</li>
                </ul>
            </div>
        </>
    )
};

export default ColorComplementary;