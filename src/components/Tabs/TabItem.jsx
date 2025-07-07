import React from 'react';

const TabItem = ({ id, label, isActive, onSelect, controls }) => (
    <button
        role="tab"
        id={`tab-${id}`}
        aria-selected={isActive}
        aria-controls={controls}
        tabIndex={0}
        className={isActive ? `tab-item active` : `tab-item`}
        onClick={onSelect}
    >
        {label}
    </button>
);

export default TabItem;