import React from "react";
import hslToHex from "../utils/hslToHex.js";
import hexToHSL from "../utils/hexToHSL.js";
import "../styles/ColorPalettes.css";

function generateSquarePalette(hex) {
    const base = hexToHSL(hex);
    const palette = [];
    for (let i = 0; i < 4; i++) {
        let hue = (base.h + i * 90) % 360;
        palette.push(hslToHex(hue, base.s, base.l));
    }
    return palette;
}

const ColorSquare = ({ color }) => {
    const complementPalette = generateSquarePalette(color);

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
                    <li>Square palettes can be visually intense.</li>
                    <li>For best effect, pick one color as the main background or brand color, another for secondary elements, and use the other two for accents or highlights.</li>
                </ul>
            </div>
        </>
    )
};

export default ColorSquare;