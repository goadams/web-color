import React from "react";
import hslToHex from "../utils/hslToHex.js";
import hexToHSL from "../utils/hexToHSL.js";
import "../styles/ColorPalettes.css";

function generateTriadicPalette(hex) {
    const base = hexToHSL(hex);
    const hue1 = (base.h + 120) % 360;
    const hue2 = (base.h + 240) % 360;
    return [
        hslToHex(base.h, base.s, base.l),    // Base color
        hslToHex(hue1, base.s, base.l),      // Triad partner 1
        hslToHex(hue2, base.s, base.l),      // Triad partner 2
    ];
}

const ColorTriad = ({ color }) => {
    const complementPalette = generateTriadicPalette(color);

    return (
        <>
            <div className="colors-complementary">
                <div className="colors-palette-color" style={{ background: complementPalette[0], width: 100, height: 100 }}></div>
                <div className="colors-palette-color" style={{ background: complementPalette[1], width: 100, height: 100 }}></div>
                <div className="colors-palette-color" style={{ background: complementPalette[2], width: 100, height: 100 }}></div>
            </div>
            <div className="design-tips">
                <h3>Design Tips:</h3>
                <ul>
                    <li>Use one color as dominant, the others as secondary and accent.</li>
                    <li>Works well for playful, energetic, or youthful designs.</li>
                </ul>
            </div>
        </>
    )
};

export default ColorTriad;