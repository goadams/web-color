import React from "react";
import "./GradientLinear.css"
import InputRangeSlider from "../InputRangeSlider/index.js";

const GradientLinear = () => {
    const [colors, setColors] = React.useState(["#F0EF0E", "#F5801E"]);
    const [positions, setPositions] = React.useState([0, 100]);
    const [angle, setAngle] = React.useState(90);

    const stops = colors.map((color, i) => `${color} ${positions[i]}%`).join(", ");
    const gradient = { backgroundImage: `linear-gradient(${angle}deg, ${stops})` }

    return (
        <div className="gradient-container">
            <div
                className="gradient-preview"
                style={gradient}
            >
            </div>

            <div className="gradient-colors-container">
                <div className="gradient-color">
                    <h3>Color 1</h3>
                    <div>
                        <label htmlFor="color1-input">Color Select</label>
                        <input
                            className="gradient-color-input"
                            id="color1-input"
                            type="color"
                            value={colors[0]}
                            onChange={e => {
                                const newColors = [...colors];
                                newColors[0] = e.target.value;
                                setColors(newColors);
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="position1">Position</label>
                        <input
                            id="position1"
                            type="number"
                            min="0"
                            max="100"
                            value={positions[0]}
                            onChange={e => {
                                const newPositions = [...positions];
                                newPositions[0] = Number(e.target.value);
                                setPositions(newPositions);
                            }}
                        />
                    </div>
                    <InputRangeSlider
                        val={positions[0]}
                        handleChange={e => {
                            const newPositions = [...positions];
                            newPositions[0] = Number(e.target.value);
                            setPositions(newPositions);
                        }}
                        label="Position Slider"
                        id="position1-slider"
                    />
                </div>
                <div className="gradient-color">
                    <h3>Color 2</h3>
                    <div>
                        <label htmlFor="color2-input">Color Select</label>
                        <input
                            className="gradient-color-input"
                            id="color2-input"
                            type="color"
                            value={colors[1]}
                            onChange={e => {
                                const newColors = [...colors];
                                newColors[1] = e.target.value;
                                setColors(newColors);
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="position2">Position</label>
                        <input
                            id="position2"
                            type="number"
                            min="0"
                            max="100"
                            value={positions[1]}
                            onChange={e => {
                                const newPositions = [...positions];
                                newPositions[1] = Number(e.target.value);
                                setPositions(newPositions);
                            }}
                        />
                    </div>
                    <InputRangeSlider
                        val={positions[1]}
                        handleChange={e => {
                            const newPositions = [...positions];
                            newPositions[1] = Number(e.target.value);
                            setPositions(newPositions);
                        }}
                        label="Position Slider"
                        id="position2-slider"
                    />
                </div>
                <div className="angle-container">
                    <h3>Angle</h3>
                    <label htmlFor="angle">Angle (°)</label>
                    <input
                        type="number"
                        id="angle"
                        min={0}
                        max={360}
                        value={angle}
                        onChange={e => setAngle(Number(e.target.value))}
                    />
                    <InputRangeSlider
                        val={angle}
                        max={360}
                        handleChange={e => setAngle(Number(e.target.value))}
                        label="Angle Slider"
                        id="angle-slider"
                    />
                </div>
            </div>

            <div className="css-code-container">
                <h3>CSS Code</h3>
                <p className="written-code">linear-gradient({angle}deg, {stops})</p>
            </div>
        </div>
    )
}

export default GradientLinear;