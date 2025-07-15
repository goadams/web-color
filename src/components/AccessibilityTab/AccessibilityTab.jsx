import React, { useState } from "react";
import { TabList } from '../Tabs';
import AccessContrast from "../AccessContrast/index.js";

const AccessibilityTab = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const tabs = [
        {id: 'contrast', label: 'Contrast', content: <AccessContrast /> },
    ]

    return (
        <>
            <h2>Accessibility Tool Select:</h2>
            <div className="access-tabs">
                <TabList tabs={tabs} activeIndex={activeIndex} onTabSelect={setActiveIndex} />
                <div className="tab-panel">
                    {tabs.map((tab, index) => (
                        <div key={tab.id} style={{ display: activeIndex === index ? 'block' : 'none' }}>
                            {tab.content}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AccessibilityTab;