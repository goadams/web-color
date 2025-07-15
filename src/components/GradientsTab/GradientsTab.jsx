import React, { useState } from "react";
import { TabList } from '../Tabs';
import GradientLinear from "../GradientLinear";

const GradientsTab = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const tabs = [
        {id: 'linear', label: 'Linear', content: <GradientLinear /> },
    ]

    return (
        <>
            <h2>Gradient Type Select:</h2>
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

export default GradientsTab;