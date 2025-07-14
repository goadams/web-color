import React from "react";
import "./SaveSection.css";

const SaveSection = ({ colors, heading = "", handleDelete }) => {
    return (
        <div className="saved">
            {heading && <h2>{heading}</h2>}
            {colors.map((c, i) => (
                <div className="saved-display" key={i}>
                    <p className="saved-code">{c}</p>
                    <div style={{ backgroundColor: c, width: 100, height: 40 }} className="saved-color"></div>
                </div>
            ))}
            <button className="delete" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default SaveSection;