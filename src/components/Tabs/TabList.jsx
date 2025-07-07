import React from 'react';
import TabItem from './TabItem';
import './Tabs.css';

const TabList = ({ tabs, activeIndex, onTabSelect }) => (
    <nav role="tablist" aria-orientation="horizontal" className="tab-list">
        {tabs.map((tab, index) => (
            <TabItem
                key={tab.id}
                id={tab.id}
                label={tab.label}
                isActive={activeIndex === index}
                onSelect={() => onTabSelect(index)}
                controls={`panel-${tab.id}`}
            />
        ))}
    </nav>
);

export default TabList;