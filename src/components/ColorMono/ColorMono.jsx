import React from "react";
import hslToHex from "../utils/hslToHex.js";
import hexToHSL from "../utils/hexToHSL.js";
import "../styles/ColorPalettes.css";

function generateMonoPalette(hex, count = 5) {
    const base = hexToHSL(hex);
    const palette = [];
    // Evenly distribute lightness values for tints and shades
    const step = 40 / (count - 1); // e.g., from l-20 to l+20
    for (let i = 0; i < count; i++) {
        let l = Math.max(0, Math.min(100, base[2] - 20 + step * i));
        palette.push(hslToHex(base[0], base[1], l));
    }
    return palette;
}

const ColorMono = ({ color }) => {
    const complementPalette = generateMonoPalette(color);

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
                    <li>Use for a clean, harmonious look—great for minimal, elegant designs.</li>
                    <li>Add contrast with neutral colors (gray, off-white, or black) for text and accents.</li>
                    <li>Works best for backgrounds, cards, and subtle UI elements.</li>
                </ul>
            </div>
        </>
    )
};

export default ColorMono;