import React from "react";
import getRandomColor from "../utils/getRandomColor.js";
import getLuminance from "../utils/getLuminance.js";
import hexToRgb from "../utils/hexToRbg.js";
import './RandomColor.css';

const RandomColor = () => {
    const [color, setColor] = React.useState(getRandomColor());
    const [codeColor, setCodeColor] = React.useState('#FFFFFF');
    const [savedColors, setSavedColors] = React.useState([]);

    const handleGenerate = () => {
        const randomColor = getRandomColor();
        setColor(randomColor);

        const rgb = hexToRgb(randomColor);
        const luminance = getLuminance(rgb);

        // 0.179 is a common threshold for WCAG contrast
        if (luminance < 0.2) {
            setCodeColor('#DDDDDD'); // white text
        } else {
            setCodeColor('#111111'); // black text
        }
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
            <div className="saved-colors">
                {savedColors.map((c, i) => (
                    <div className="saved-color-display" key={i}>
                        <p className="saved-color-code">{c}</p>
                        <div style={{ backgroundColor: c, width: 100, height: 40 }} className="saved-color-color"></div>
                        <button className="delete-color" onClick={() => handleDelete(i)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RandomColor;