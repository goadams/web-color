import React from "react";
import hslToHex from "../utils/hslToHex.js";
import hexToHSL from "../utils/hexToHSL.js";
import "../styles/ColorPalettes.css";

function generateSplitPalette(hex, angle = 30) {
    const base = hexToHSL(hex);
    const compHue = (base[0] + 180) % 360;
    const split1 = (compHue - angle + 360) % 360;
    const split2 = (compHue + angle) % 360;
    return [
        hslToHex(base[0], base[1], base[2]),      // Base color
        hslToHex(split1, base[1], base[2]),      // Split complement 1
        hslToHex(split2, base[1], base[2]),      // Split complement 2
    ];
}

const ColorSplit = ({ color }) => {
    const complementPalette = generateSplitPalette(color);

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
                    <li>Use the base color for most elements, split complements for accents and highlights.</li>
                    <li>Safer and more versatile than direct complementary schemes.</li>
                    <li>Good for lively, engaging designs that still feel balanced.</li>
                </ul>
            </div>
        </>
    )
};

export default ColorSplit;