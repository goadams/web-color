import React from "react";
import "./InputRangeSlider.css"

const InputRangeSlider = (props) => {
    const {
        val,
        handleChange,
        min = 0,
        max = 100,
        label,
        id,
        handleIncrement,
        handleDecrement
    } = props;

    return (
        <div className="input-slider">
            {label && (
                <label {...( id ? { htmlFor: id }: {})}>
                    {label}
                </label>
            )}
            {handleIncrement && handleDecrement && (
                <div className="slider-btns">
                    <button onClick={handleDecrement}>
                        -
                    </button>
                    <button onClick={handleIncrement}>
                        +
                    </button>
                </div>
            )}
            <input
                className="slider"
                type="range"
                min={min}
                max={max}
                value={val}
                onChange={handleChange}
                {...( id ? { id } : {})}
            />
        </div>
)};


export default InputRangeSlider;