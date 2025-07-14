import React from "react";
import getRandomColor from "../utils/getRandomColor.js";
import getLuminance from "../utils/getLuminance.js";
import hexToRgb from "../utils/hexToRbg.js";
import './RandomColor.css';
import SaveSection from "../SaveSection/index.js";
import getTextBestColor from "../utils/getTextBestColor.js";

const RandomColor = () => {
    const [color, setColor] = React.useState(getRandomColor());
    const [codeColor, setCodeColor] = React.useState('#FFFFFF');
    const [savedColors, setSavedColors] = React.useState([]);

    const handleGenerate = () => {
        const randomColor = getRandomColor();
        setColor(randomColor);
        setCodeColor(getTextBestColor(randomColor));
    };

    const handleSave = () => {
        setSavedColors([...savedColors, color]);
    }

    const handleDelete = (num) => {
        setSavedColors(prevColors => prevColors.filter((_, i) => i !== num));
    }

    return (
        <div className="random-color">
            <div className="color-display" style={{ backgroundColor: color }}>
                <p className="color-code" style={{color: codeColor}}>{color}</p>
            </div>
            <div className="button-container">
                <button className="new-color" onClick={handleGenerate}>New Color</button>
                <button className="save-color" onClick={handleSave}>Save Color</button>
            </div>
            <h2>Saved Colors:</h2>
            <SaveSection saved={savedColors} handleDelete={handleDelete} />
        </div>
    );
};

export default RandomColor;