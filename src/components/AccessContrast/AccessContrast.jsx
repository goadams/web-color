import React from "react";
import "./AccessContrast.css";
import hexToHSL from "../utils/hexToHSL.js";
import hslToHex from "../utils/hslToHex.js";
import getContrastRatio from "../utils/getContrastRatio.js";
import getTextBestColor from "../utils/getTextBestColor.js";
import InputSlider from "../InputSlider";


const AccessContrast = () => {
    const [hexForeground, setHexForeground] = React.useState("#000000");
    const [hexBackground, setHexBackground] = React.useState("#FFFFFF");
    const [lightnessForeground, setLightnessForeground] = React.useState(0);
    const [lightnessBackground, setLightnessBackground] = React.useState(100);
    const [ratio, setRatio] = React.useState(getContrastRatio(hexForeground, hexBackground));
    const [previewTextColor, setPreviewTextColor] = React.useState("#111111");

    const [sampleText, setSampleText] = React.useState("Sample input text");

    // Passing
    const [wcagLevel, setWcagLevel] = React.useState("2.1 AAA");
    const getStatusColor = (status) => {
        switch (status) {
            case "PASS":
                return "#37A925";
            case "FAIL":
                return "#e55";
            case "SOME":
                return "#fc3";
            default:
                return "#000";
        }
    }

    let statusStandard = "FAIL";
    let statusLarge = "FAIL";
    let statusGraphic = "FAIL";
    let statusOverall = "FAIL";

    if (wcagLevel === "2.1 AA") {
        statusLarge = ratio >= 3 ? "PASS" : "FAIL";
        statusGraphic = ratio >= 3 ? "PASS" : "FAIL";
        statusStandard = ratio >= 4.5 ? "PASS" : "FAIL";
        statusOverall = ratio >= 4.5 ? "PASS" : (ratio >= 3 ? "SOME" : "FAIL");
    } else if (wcagLevel === "2.1 AAA") {
        statusGraphic = ratio >= 3 ? "PASS" : "FAIL";
        statusLarge = ratio >= 4.5 ? "PASS" : "FAIL";
        statusStandard = ratio >= 7 ? "PASS" : "FAIL";
        statusOverall = ratio >= 7 ? "PASS" : (ratio >= 3 ? "SOME" : "FAIL");
    }

    const handleColorChangeBackground = (e) => {
        const newHex = e.target.value.toUpperCase();
        setHexBackground(newHex);
        setRatio(getContrastRatio(hexForeground, newHex).toFixed(2));
        setPreviewTextColor(getTextBestColor(newHex));
        const [, , light] = hexToHSL(newHex);
        setLightnessBackground(light);
    };

    const handleColorChangeForeground = (e) => {
        const newHex = e.target.value.toUpperCase();
        setHexForeground(newHex);
        setRatio(getContrastRatio(newHex, hexBackground).toFixed(2));
        const [, , light] = hexToHSL(newHex);
        setLightnessForeground(light);
    };

    const handleLightForeground = (e) => {
        const newLight = Number(e.target.value);
        const [hue, sat] = hexToHSL(hexForeground);
        const newHex = hslToHex(hue, sat, newLight);
        setHexForeground(newHex);
        setLightnessForeground(newLight);
        setRatio(getContrastRatio(newHex, hexBackground).toFixed(2));
    };

    const handleLightBackground = (e) => {
        const newLight = Number(e.target.value);
        const [hue, sat] = hexToHSL(hexBackground);
        const newHex = hslToHex(hue, sat, newLight);
        setHexBackground(newHex);
        setLightnessBackground(newLight);
        setRatio(getContrastRatio(hexForeground, newHex).toFixed(2));
        setPreviewTextColor(getTextBestColor(newHex));
    };

    const incrementLightForeground = () => {
        let newL = Math.min(100, Number(lightnessForeground) + 1);
        setLightnessForeground(newL);
        const [h, s] = hexToHSL(hexForeground);
        const newHex = hslToHex(h, s, newL);
        setHexForeground(newHex);
        setRatio(getContrastRatio(newHex, hexBackground).toFixed(2));
    };

    const decrementLightForeground = () => {
        let newL = Math.max(0, Number(lightnessForeground) - 1);
        setLightnessForeground(newL);
        const [h, s] = hexToHSL(hexForeground);
        const newHex = hslToHex(h, s, newL);
        setHexForeground(newHex);
        setRatio(getContrastRatio(newHex, hexBackground).toFixed(2));
    };

    const incrementLightBackground = () => {
        let newL = Math.min(100, Number(lightnessBackground) + 1);
        setLightnessBackground(newL);
        const [h, s] = hexToHSL(hexBackground);
        const newHex = hslToHex(h, s, newL);
        setHexBackground(newHex);
        setRatio(getContrastRatio(hexForeground, newHex).toFixed(2));
    };

    const decrementLightBackground = () => {
        let newL = Math.max(0, Number(lightnessBackground) - 1);
        setLightnessBackground(newL);
        const [h, s] = hexToHSL(hexBackground);
        const newHex = hslToHex(h, s, newL);
        setHexBackground(newHex);
        setRatio(getContrastRatio(hexForeground, newHex).toFixed(2));
    };


    return (
        <div className="access-contrast-wrapper">
            <div className="access-contrast">
                <h2>Color Selection:</h2>
                <div className="contrast-container">
                    <div className="contrast-foreground">
                        <h3>Foreground</h3>
                        <label htmlFor="foreground-hex">Hex Value</label>
                        <input
                            type="text"
                            id="foreground-hex"
                            value={hexForeground}
                            onChange={handleColorChangeForeground}
                        />
                        <label htmlFor="foreground-picker">Color Select</label>
                        <input
                            type="color"
                            id="foreground-picker"
                            value={hexForeground}
                            onChange={handleColorChangeForeground}
                        />
                        <InputSlider
                            val={lightnessForeground}
                            handleChange={handleLightForeground}
                            id="foreground-lightness"
                            label="Lightness"
                            handleIncrement={incrementLightForeground}
                            handleDecrement={decrementLightForeground}
                        />
                    </div>
                    <div className="contrast-background">
                        <h3>Background</h3>
                        <label htmlFor="background-hex">Hex Value</label>
                        <input
                            type="text"
                            id="background-hex"
                            value={hexBackground}
                            onChange={handleColorChangeBackground}
                        />
                        <label htmlFor="background-picker">Color Select</label>
                        <input
                            type="color"
                            id="background-picker"
                            value={hexBackground}
                            onChange={handleColorChangeBackground}
                        />
                        <InputSlider
                            val={lightnessBackground}
                            handleChange={handleLightBackground}
                            id="background-lightness"
                            label="Lightness"
                            handleIncrement={incrementLightBackground}
                            handleDecrement={decrementLightBackground}
                        />
                    </div>
                </div>
                <div className="wcag-container">
                    <h3 className="criteria">Criteria:</h3>
                    <div className="wcag-item">
                        <label htmlFor="wcag-2.1-AA">WCAG 2.1 AA</label>
                        <input
                            type="radio"
                            name="wcag-2.1-AA"
                            id="wcag-2.1-AA"
                            value={"2.1 AA"}
                            checked={wcagLevel === "2.1 AA"}
                            onChange={() => setWcagLevel("2.1 AA")}
                        />
                    </div>
                    <div className="wcag-item">
                        <label htmlFor="wcag-2.1-AAA" >WCAG 2.1 AAA</label>
                        <input
                            type="radio"
                            name="wcag-2.1-AAA"
                            id="wcag-2.1-AAA"
                            value={"2.1 AAA"}
                            checked={wcagLevel === "2.1 AAA"}
                            onChange={() => setWcagLevel("2.1 AAA")}
                        />
                    </div>
                </div>
                <div className="contrast-ratio">
                    <h3>Contrast Ratio</h3>
                    <div className="contrast-ratio-feedback">
                        <p className="contrast-ratio-num">{ratio}:1</p>
                        <div className="contrast-ratio-icon">
                            <span
                                className="check-ratio"
                                id="check-ratio"
                                style={{ backgroundColor: getStatusColor(statusOverall)}}
                            >
                                {statusOverall}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="previews-full-container">
                <h2>Previews:</h2>
                <div
                    className="previews-container"
                    style={{ backgroundColor: hexBackground, borderColor: previewTextColor }}
                >
                    <div className="preview standard-text">
                        <h3 style={{ color: previewTextColor }}>
                            Standard Text
                            <span
                                className="check-standard"
                                id="check-standard"
                                style={{ backgroundColor: getStatusColor(statusStandard)}}
                            >
                                {statusStandard}
                            </span>
                        </h3>
                        <div className="back-color" style={{ backgroundColor: hexBackground }}>
                            <p style={{ color: hexForeground }}>A vivid mix of hues jumps quickly, dazzling eyes with zest. When black text overlays a white background, visibility peaks; yet, quirky magenta or yellow fonts perplex viewers.</p>
                        </div>
                    </div>
                    <div className="preview large-text">
                        <h3 style={{ color: previewTextColor }}>
                            Large Text
                            <span
                                className="check-large"
                                id="check-large"
                                style={{ backgroundColor: getStatusColor(statusLarge)}}
                            >
                                {statusLarge}
                            </span>
                        </h3>
                        <div className="back-color" style={{ backgroundColor: hexBackground }}>
                            <p style={{ color: hexForeground }}>A vivid mix of hues jumps quickly, dazzling eyes with zest. When black text overlays a white background, visibility peaks; yet, quirky magenta or yellow fonts perplex viewers.</p>
                        </div>
                    </div>
                    <div className="preview graphical">
                        <h3 style={{ color: previewTextColor }}>
                            Graphics and UI
                            <span
                                className="check-graphics"
                                id="check-graphics"
                                style={{ backgroundColor: getStatusColor(statusGraphic)}}
                            >
                                {statusGraphic}
                            </span>
                        </h3>
                        <div className="back-color" style={{ backgroundColor: hexBackground }}>
                            <div className="graphic-display">
                                <svg
                                    id="rectIcon"
                                    width="80"
                                    height="80"
                                    viewBox="0 0 100 100"
                                    style={{display: "block", color: hexForeground, margin: "auto" }}
                                >
                                    <rect
                                        width="75"
                                        height="50"
                                        x={14}
                                        y={26}
                                        fill={hexForeground}
                                    />
                                </svg>
                                <svg
                                    id="starIcon"
                                    width="80"
                                    height="80"
                                    viewBox="0 0 100 100"
                                    style={{ display: "block", color: hexForeground, margin: "auto" }}
                                >
                                    <polygon
                                        points="50,10 61,39 92,39 66,59 75,90 50,70 25,90 34,59 8,39 39,39"
                                        fill={hexForeground}
                                    />
                                </svg>
                            </div>
                            <input
                                type="text"
                                style={{ borderColor: hexForeground, borderWidth: 2, borderStyle: "solid" }}
                                value={sampleText}
                                onChange={(e) => setSampleText(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccessContrast;