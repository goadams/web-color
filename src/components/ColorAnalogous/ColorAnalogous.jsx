import React from "react";
import hslToHex from "../utils/hslToHex.js";
import hexToHSL from "../utils/hexToHSL.js";
import "../styles/ColorPalettes.css"

function generateAnalogousPalette(hex, count = 5, angle = 15) {
    const base = hexToHSL(hex);
    const palette = [];
    const half = Math.floor(count / 2);

    for (let i = -half; i <= half; i++) {
        const hue = (base.h + i * angle + 360) % 360;
        palette.push(hslToHex(hue, base.s, base.l));
    }
    return palette;
}

const ColorAnalogous = ({ color }) => {
    const analogousPalette = generateAnalogousPalette(color);

    return (
        <div className="colors-complementary">
            <div className="colors-palette-color" style={{ background: analogousPalette[0], width: 100, height: 100 }}></div>
            <div className="colors-palette-color" style={{ background: analogousPalette[1], width: 100, height: 100 }}></div>
            <div className="colors-palette-color" style={{ background: analogousPalette[2], width: 100, height: 100 }}></div>
            <div className="colors-palette-color" style={{ background: analogousPalette[3], width: 100, height: 100 }}></div>
            <div className="colors-palette-color" style={{ background: analogousPalette[4], width: 100, height: 100 }}></div>
        </div>
    )
};

export default ColorAnalogous;