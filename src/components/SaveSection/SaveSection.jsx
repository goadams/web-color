import React from "react";
import "./SaveSection.css";

const SaveSection = ({ saved, handleDelete }) => {
    return (
        <div className="saved">
            {saved.map((c, i) => (
                <div className="saved-display" key={i}>
                    <p className="saved-code">{c}</p>
                    <div style={{ backgroundColor: c, width: 100, height: 40 }} className="saved-color"></div>
                    <button className="delete" onClick={() => handleDelete(i)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default SaveSection;